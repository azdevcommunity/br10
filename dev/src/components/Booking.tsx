import {Service} from "@/data/columns.tsx";
import React from "react";
import {Calendar} from "@/components/ui/calendar.tsx";
import {Tabs, TabsContent, TabsTrigger} from "./ui/tabs";
import {TabsList} from "@/components/ui/tabs.tsx";

interface BookingProps {
    data: Service[];
    selectedIds: number[];
}

export const Booking: React.FC<BookingProps> = ({data, selectedIds}) => {

    const extractedData = data.filter((item) => selectedIds.includes(item.id));

    // Calculate total duration in minutes
    const totalDuration = extractedData.map((item) => item.duration)
        .reduce((a, b) => a + b, 0);

    // Calculate hours and remaining minutes for total duration
    const totalHours = Math.floor(totalDuration / 60);
    const totalMinutes = totalDuration % 60;
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    const handleDateChange = (date: Date) => {
        // if date selected is after 2 days, show error
        if (date > new Date(new Date().setDate(new Date().getDate() + 1))) {
            return;
        }else{
            setDate(date);
        }
    }

    return (
        <>
            <div className={"flex flex-col w-full h-full space-y-5"}>
                <div className={" w-full flex flex-row"}>
                    <div className={"bg-black rounded-l-3xl max-sm:h-full h-auto w-5"}/>
                    <div
                        className={`w-full border-dashed border-2 border-black border-l-0 rounded-3xl rounded-l-none flex flex-col`}>
                        <p className={"w-full border-b-2 pl-6 border-dashed border-black pb-3 font-bold pt-3"}>Seçilən
                            xidmətlər:</p>
                        <div className={"max-sm:px-6 px-6 pt-5 flex flex-col space-y-5"}>
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
                            <div className="pb-3 pr-6 font-bold">
                                Ümumi qiymət: {extractedData.map((item) => item.price).reduce((a, b) => a + b, 0)} AZN
                                <br/>
                                Ümumi müddət:
                                {totalHours > 0 ? ` ${totalHours} saat` : ""}
                                {totalMinutes > 0 ? ` ${totalMinutes} dəqiqə` : ""}
                                {totalHours === 0 && totalMinutes === 0 ? `0 dəqiqə` : ""}
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleDateChange}
                        className="rounded-2xl border w-fit max-sm:w-full justify-center items-center flex"
                    />
                    <div className={"flex flex-col w-full mt-5"}>
                        <div className={"flex items-center justify-between w-full"}>
                            <p>Çərşənbə</p>
                            <Tabs defaultValue="24s" className="">
                                <TabsList>
                                    <TabsTrigger value="12s">12s</TabsTrigger>
                                    <TabsTrigger value="24s">24s</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};