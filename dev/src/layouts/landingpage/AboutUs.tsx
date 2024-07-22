import {Chip} from "@nextui-org/react";

export const AboutUs = () => {
    return (
        <div id="about"
             className="flex flex-col items-center justify-center pt-10 w-full h-screen px-4 sm:px-6 md:px-10">
            {/*<Chip color="default" variant="bordered">About us</Chip>*/}
            <span className="text-xl sm:text-2xl md:text-3xl font-medium">br10 iş başında</span>
            <span className="text-5xl sm:text-6xl md:text-8xl font-bold mt-2 underline decoration-primary-500">
                Həyatın asanlaşsın.
            </span>
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
                Rahatlığın keyfiyyətlə qovuşduğu yer.
            </span>
            <div className="flex flex-col mt-14 w-full max-w-screen-lg text-gray-500">
                <span className="text-base sm:text-xl md:text-3xl font-medium">
                    Müştərilər üçün, istənilən xidməti asanlıqla tapmaq və rezervasiya etmək imkanı yaradılır.
                    Xidmət göstərənlər üçün, işlərini daha effektiv idarə etmək və müştərilərlə əlaqələrini gücləndirmək üçün geniş imkanlar təqdim edilir.
                </span>
                <span className="text-base sm:text-xl md:text-3xl font-medium">
                    Hər bir funksiyası, istifadəçilərin rahatlığını artırmaq məqsədilə düşünülmüşdür.
                </span>
                <span className="text-base sm:text-xl md:text-3xl font-medium">
                    br10, müştərilər ilə xidmət göstərənləri ən rahat və ən səmərəli şəkildə birləşdirir.
                </span>
            </div>
        </div>
    );
}