import React, {useState} from "react";
import {Service} from "@/data/columns.tsx";
import {Calendar} from "@/components/ui/calendar.tsx";
import {Button} from "@/components/ui/button.tsx";
import {az} from "date-fns/locale";
import {HttpClient} from "@/util/HttpClient.ts";
import {useNavigate} from "react-router-dom";

interface BookingProps {
    data: Service[];
    selectedIds: number[];
}

export const Booking: React.FC<BookingProps> = ({data, selectedIds}) => {
    const extractedData = data.filter((item) => selectedIds.includes(item.id));
    const totalDuration = extractedData.map((item) => item.duration).reduce((a, b) => a + b, 0);
    const totalHours = Math.floor(totalDuration / 60);
    const totalMinutes = totalDuration % 60;
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null); // Add state for selected button

    const navigate = useNavigate();

    const handleDateChange = (date: Date) => {
        setDate(date);
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time); // Update the selected time
    };


    const times = [
        "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
        "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
        "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"
    ];

    const getFormattedReservationDate = (): string | undefined => {
        if (!date || !selectedTime) return undefined;

        // Parse selected time
        const [hours, minutes] = selectedTime.split(":").map(Number);

        // Set time to the selected date
        const updatedDate = new Date(date);
        updatedDate.setHours(hours, minutes, 0, 0); // Set hours, minutes, and reset seconds/milliseconds

        // Format the updated date to the desired pattern
        const pad = (num: number) => num.toString().padStart(2, '0');
        const year = updatedDate.getFullYear();
        const month = pad(updatedDate.getMonth() + 1); // Months are zero-indexed
        const day = pad(updatedDate.getDate());
        const hoursFormatted = pad(updatedDate.getHours());
        const minutesFormatted = pad(updatedDate.getMinutes());
        const seconds = pad(updatedDate.getSeconds());
        const milliseconds = updatedDate.getMilliseconds().toString().padStart(6, '0'); // Pad to 6 digits

        const timezoneOffset = -updatedDate.getTimezoneOffset(); // Timezone offset in minutes
        const sign = timezoneOffset >= 0 ? '+' : '-';
        const offsetHours = pad(Math.abs(Math.floor(timezoneOffset / 60)));
        const offsetMinutes = pad(Math.abs(timezoneOffset % 60));

        return `${year}-${month}-${day}T${hoursFormatted}:${minutesFormatted}:${seconds}.${milliseconds}${sign}${offsetHours}:${offsetMinutes}`;
    };


    const reserve = () => {

        const reservation = {
            reservationDate: getFormattedReservationDate(),
            specialistUserId: data[0].specialistUserId,
            specialistServiceIds: selectedIds,
            reservationSource: 1,
        };

        let reservationResult = null;


        HttpClient.post("/reservations", reservation)
            .then((response) => {
                // Check if the response status is in the successful range (200–299)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // Parse response only if it's successful
            })
            .then((d) => {
                const bookingData = {
                    data: data,
                    reservationDate: reservation.reservationDate,
                    bookedServicesId: selectedIds
                };
                console.log(data);
                // Navigate only if the request is successful
                navigate(`/booking/${d.data?.id}`, {
                    state: { bookingData: bookingData },
                    replace: true,
                });
            })
            .catch((error) => {
                // Handle the error, show an alert, and prevent navigation
                alert(error);
            });


    };

    return (
        <>
            <div className="flex flex-col w-full h-full space-y-5">
                <div className="w-full flex flex-row">
                    <div className="bg-black rounded-l-3xl max-sm:h-full h-auto w-5"/>
                    <div
                        className="w-full border-dashed border-2 border-black border-l-0 rounded-3xl rounded-l-none flex flex-col">
                        <p className="w-full border-b-2 pl-6 border-dashed border-black pb-3 font-bold pt-3">
                            Seçilən xidmətlər:
                        </p>
                        <div className="max-sm:px-6 px-6 pt-5 flex flex-col space-y-5">
                            {extractedData.map((item) => {
                                const hours = Math.floor(item.duration / 60);
                                const minutes = item.duration % 60;
                                const formattedDuration = hours > 0
                                    ? `${hours} saat${minutes > 0 ? ` ${minutes} dəqiqə` : ""}`
                                    : `${minutes} dəqiqə`;

                                return (
                                    <p key={item.id} className="text-black font-medium">
                                        {item.name} - {formattedDuration} - {item.price} AZN
                                    </p>
                                );
                            })}
                            <div className={"w-full flex justify-between"}>
                                <div className="pb-3 pr-6 font-bold">
                                    Ümumi
                                    qiymət: {extractedData.map((item) => item.price).reduce((a, b) => a + b, 0)} AZN
                                    <br/>
                                    Ümumi müddət:
                                    {totalHours > 0 ? ` ${totalHours} saat` : ""}
                                    {totalMinutes > 0 ? ` ${totalMinutes} dəqiqə` : ""}
                                    {totalHours === 0 && totalMinutes === 0 ? `0 dəqiqə` : ""}
                                </div>
                                {date && selectedTime && (
                                    <Button variant="default" className="w-40 max-sm:hidden" onClick={() => reserve()}>
                                        Bron et
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-10 max-sm:space-x-0 h-full max-sm:flex-col">
                    <Calendar
                        mode="single"
                        selected={date}
                        locale={az}
                        fromDate={new Date()}
                        toDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                        onSelect={handleDateChange}
                        className="rounded-2xl border w-fit max-sm:w-full justify-center items-center flex"
                    />
                    <div id="hours"
                         className="grid grid-cols-2 overflow-x-auto h-full max-sm:w-full w-64 gap-3 max-sm:overflow-x-visible max-sm:mt-5">
                        {times.map((time) => (
                            <Button
                                key={time}
                                variant="outline"
                                className={`${
                                    selectedTime === time ? "bg-black text-white hover:bg-black hover:border-none hover:text-white" : "hover:border hover:border-black"
                                }`}
                                onClick={() => handleTimeSelect(time)}
                            >
                                {time}
                            </Button>
                        ))}
                    </div>

                </div>
                {/* Conditionally render the "Bron et" button */}
                {date && selectedTime && (
                    <Button variant="default" className="w-40 lg:hidden" onClick={() => reserve()}>
                        Bron et
                    </Button>
                )}
            </div>
        </>
    );
};