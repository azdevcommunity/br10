import DotPattern from "@/components/DotPattern.tsx";
import {cn} from "@/lib/utils.ts";
import {ContainerScroll} from "@/components/ContainerScroll.tsx";

export const AboutUs = () => {
    return (
        // <div id="about"
        //      className="flex flex-col items-center justify-start h-1/2 lg:mx-24 max-sm:mx-12 whitespace-pre-wrap">
        //     {/*<Chip color="default" variant="bordered">About us</Chip>*/}
        //     <span className="text-xl sm:text-2xl md:text-3xl font-medium">br10 iş başında</span>
        //     <span className="text-5xl sm:text-6xl md:text-8xl font-bold mt-2 underline decoration-primary-500">
        //         Həyatın asanlaşsın.
        //     </span>
        //     <span className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
        //         Rahatlığın keyfiyyətlə qovuşduğu yer.
        //     </span>
        //     <div className="flex flex-col mt-5 w-full text-gray-500">
        //         <span className="text-base sm:text-xl md:text-3xl font-medium">
        //             Müştərilər üçün, istənilən xidməti asanlıqla tapmaq və rezervasiya etmək imkanı yaradılır.
        //             Xidmət göstərənlər üçün, işlərini daha effektiv idarə etmək və müştərilərlə əlaqələrini gücləndirmək üçün geniş imkanlar təqdim edilir.
        //         </span>
        //         <span className="text-base sm:text-xl md:text-3xl font-medium">
        //             Hər bir funksiyası, istifadəçilərin rahatlığını artırmaq məqsədilə düşünülmüşdür.
        //         </span>
        //         <span className="text-base sm:text-xl md:text-3xl font-medium">
        //             br10, müştərilər ilə xidmət göstərənləri ən rahat və ən səmərəli şəkildə birləşdirir.
        //         </span>
        //     </div>
        // </div>
        // <ContainerScroll
        //     titleComponent={
        //         <>
        //             <h1 className="text-4xl font-semibold text-black dark:text-white">
        //                 Unleash the power of <br/>
        //                 <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
        //         Scroll Animations
        //       </span>
        //             </h1>
        //         </>
        //     }
        // >
        //     <img src="/assets/watch_our_film_xlarge.jpg" alt="Scroll Animations"/>
        // </ContainerScroll>
        <div className={"px-11 max-sm:px-0  mt-10 mx-auto h-full"}>
            <div
                className="px-10 py-10 relative bg-cal-dark-card max-sm:bg-cal-mb-dark-card max-sm:h-full h-[43rem]
                [background-image:radial-gradient(100%_100%_at_top,rgba(255,255,255,0.05),rgba(255,255,255,0))] sm:mx-0
                sm:rounded-[2rem] overflow-hidden"
            >
                <div
                    className=" absolute inset-0 w-full h-full scale-[1.2] transform opacity-5
                    [mask-image:radial-gradient(#fff,transparent,75%)]"
                    style={{
                        backgroundImage: "url(/assets/noise.png)",
                        backgroundSize: "30%",
                    }}
                >
                    <div
                        className="max-sm:hidden h-[50rem] w-full dark:bg-black bg-grid-white relative flex items-center
                        justify-center">
                        <div
                            className="absolute pointer-events-none inset-0 flex items-center justify-center
                            dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col h-full"}>
                    <div className={"flex flex-row max-sm:flex-col"}>
                        <div className={"text-white font-bold text-5xl w-[42rem] max-sm:text-3xl max-sm:w-full"}>
                            Müştəri randevularını telefon zəngləri və ya kağız-qələm istifadə etmədən rahatlıqla idarə
                            et
                        </div>
                        <div
                            className="mt-10 rounded-3xl border-black font-system flex flex-col border-2 lg:flex-row
                            bg-cal-mb-dark-card  text-white">
                            <div
                                className="min-w-32 h-auto border-b-2 p-6 md:p-5 lg:w-[40vw] lg:min-w-[42%] lg:!max-w-[286px] lg:border-b-0 lg:p-6 lg:ltr:border-r-2 lg:rtl:border-l-2 border-neutral-800">
                                <img alt="rick astley" loading="lazy" width="282" height="281" decoding="async"
                                     data-nimg="1"
                                     className="border-primary-50 h-6 w-6 rounded-full border-2 lg:h-7 lg:w-7 !border-neutral-600 mb-3"
                                     sizes="24px"
                                     srcSet="https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=16&amp;q=75 16w, https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=32&amp;q=75 32w, https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=48&amp;q=75 48w, https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=64&amp;q=75 64w, https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=96&amp;q=75 96w, https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=128&amp;q=75 128w, https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=256&amp;q=75 256w, https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=384&amp;q=75 384w, https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=640&amp;q=75 640w, https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=750&amp;q=75 750w, https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=828&amp;q=75 828w, https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=1080&amp;q=75 1080w, https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=1200&amp;q=75 1200w, https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=1920&amp;q=75 1920w, https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=2048&amp;q=75 2048w, https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=3840&amp;q=75 3840w"
                                     src="https://cal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frickastley.f74e0e8d.png&amp;w=3840&amp;q=75"
                                     style={{color: "transparent;"}}/>
                                <span
                                    className="text-sm xl:text-base text-neutral-200">Yusif Həsənov</span>
                                <div className="flex flex-col gap-2 text-xs font-medium lg:gap-3 xl:text-sm">
                                    <div className="flex gap-1 lg:gap-2 text-neutral-400 flex-col"><span
                                        className="[&amp;>svg]:fill-neutral-700 [&amp;>svg]:!fill-neutral-500"><svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"><g
                                        clipPath="url(#clip0_2482_23267)"><g clipPath="url(#clip1_2482_23267)"><path
                                        d="M7.67715 11.6269C7.67715 12.0413 8.01308 12.3772 8.42746 12.3772C8.84184 12.3772 9.17777 12.0413 9.17777 11.6269H7.67715ZM9.17777 8.95914C9.17777 8.54475 8.84184 8.20883 8.42746 8.20883C8.01308 8.20883 7.67715 8.54475 7.67715 8.95914H9.17777ZM8.42746 5.54107C8.01308 5.54107 7.67715 5.87699 7.67715 6.29138C7.67715 6.70576 8.01308 7.04168 8.42746 7.04168V5.54107ZM8.43413 7.04168C8.84851 7.04168 9.18444 6.70576 9.18444 6.29138C9.18444 5.87699 8.84851 5.54107 8.43413 5.54107V7.04168ZM14.3466 8.95914C14.3466 12.2282 11.6965 14.8782 8.42746 14.8782V16.3788C12.5253 16.3788 15.8472 13.0569 15.8472 8.95914H14.3466ZM8.42746 14.8782C5.15843 14.8782 2.50836 12.2282 2.50836 8.95914H1.00775C1.00775 13.0569 4.32967 16.3788 8.42746 16.3788V14.8782ZM2.50836 8.95914C2.50836 5.69011 5.15843 3.04004 8.42746 3.04004V1.53943C4.32967 1.53943 1.00775 4.86134 1.00775 8.95914H2.50836ZM8.42746 3.04004C11.6965 3.04004 14.3466 5.69011 14.3466 8.95914H15.8472C15.8472 4.86134 12.5253 1.53943 8.42746 1.53943V3.04004ZM9.17777 11.6269V8.95914H7.67715V11.6269H9.17777ZM8.42746 7.04168H8.43413V5.54107H8.42746V7.04168Z"></path></g></g><defs><clipPath
                                        id="clip0_2482_23267"><rect width="16.0066" height="16.0066" fill="white"
                                                                    transform="translate(0.424072 0.955933)"></rect></clipPath><clipPath
                                        id="clip1_2482_23267"><rect width="16.0066" height="16.0066" fill="white"
                                                                    transform="translate(0.424072 0.955933)"></rect></clipPath></defs></svg></span>
                                        <span
                                            className="hidden md:hidden xl:block">- Saç kəsimi
                                        </span>
                                        <span
                                            className="md:block xl:hidden">- Saç kəsimi
                                        </span>
                                        <span
                                            className="hidden md:hidden xl:block">- Üz maskası
                                        </span>
                                        <span
                                            className="md:block xl:hidden">- Üz maskası
                                        </span>
                                    </div>
                                    <div className="flex gap-1 lg:gap-2 text-neutral-400 flex-col"><span
                                        className="[&amp;>svg]:fill-neutral-700 [&amp;>svg]:!fill-neutral-500"><svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"><g
                                        clipPath="url(#clip0_2482_23271)"><g clipPath="url(#clip1_2482_23271)"><path
                                        d="M9.17777 4.96488C9.17777 4.5505 8.84184 4.21457 8.42746 4.21457C8.01308 4.21457 7.67715 4.5505 7.67715 4.96488H9.17777ZM8.42746 8.96652H7.67715C7.67715 9.25072 7.83772 9.51052 8.09191 9.63762L8.42746 8.96652ZM10.7597 10.9715C11.1303 11.1568 11.581 11.0066 11.7663 10.636C11.9516 10.2653 11.8014 9.81462 11.4308 9.62931L10.7597 10.9715ZM14.3466 8.96652C14.3466 12.2355 11.6965 14.8856 8.42746 14.8856V16.3862C12.5253 16.3862 15.8472 13.0643 15.8472 8.96652H14.3466ZM8.42746 14.8856C5.15843 14.8856 2.50836 12.2355 2.50836 8.96652H1.00775C1.00775 13.0643 4.32967 16.3862 8.42746 16.3862V14.8856ZM2.50836 8.96652C2.50836 5.6975 5.15843 3.04743 8.42746 3.04743V1.54681C4.32967 1.54681 1.00775 4.86873 1.00775 8.96652H2.50836ZM8.42746 3.04743C11.6965 3.04743 14.3466 5.6975 14.3466 8.96652H15.8472C15.8472 4.86873 12.5253 1.54681 8.42746 1.54681V3.04743ZM7.67715 4.96488V8.96652H9.17777V4.96488H7.67715ZM8.09191 9.63762L10.7597 10.9715L11.4308 9.62931L8.76301 8.29543L8.09191 9.63762Z"></path></g></g><defs><clipPath
                                        id="clip0_2482_23271"><rect width="16.0066" height="16.0066" fill="white"
                                                                    transform="translate(0.424072 0.963379)"></rect></clipPath><clipPath
                                        id="clip1_2482_23271"><rect width="16.0066" height="16.0066" fill="white"
                                                                    transform="translate(0.424072 0.963379)"></rect></clipPath></defs></svg></span><span
                                        className="hidden md:hidden xl:block">Müddət: 30 dəq</span><span
                                        className="md:block xl:hidden">Müddət: 30 dəq</span>
                                    </div>


                                </div>
                            </div>
                            <div className="flex w-full flex-col justify-between p-6 md:p-5 lg:p-6">
                                <div className="flex items-center justify-between gap-1 pb-2">
                                    <div className="flex items-center gap-2"><span
                                        className="text-sm font-bold capitalize lg:text-base">September</span><span
                                        className="text-sm lg:text-base">2024</span></div>
                                    <div className="flex ltr:ml-auto rtl:flex-row-reverse lg:gap-1 xl:gap-2">
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" className="">
                                            <g clipPath="url(#clip0_3941_22089)">
                                                <path d="M10.745 12.498L6.74341 8.49639L10.745 4.49475" stroke="#6B7280"
                                                      strokeWidth="1.50062" strokeLinecap="round"
                                                      color-interpolation-filters="round"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_3941_22089">
                                                    <rect width="16.0066" height="16.0066" fill="white"
                                                          transform="translate(0.740967 0.493103)"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" className="rotate-180 transform">
                                            <g clipPath="url(#clip0_3941_22089)">
                                                <path d="M10.745 12.498L6.74341 8.49639L10.745 4.49475" stroke="#6B7280"
                                                      strokeWidth="1.50062" strokeLinecap="round"
                                                      color-interpolation-filters="round"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_3941_22089">
                                                    <rect width="16.0066" height="16.0066" fill="white"
                                                          transform="translate(0.740967 0.493103)"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="grid w-full grid-flow-row grid-cols-7 gap-1">
                                    <div
                                        className="m-[2px] grid aspect-square place-content-center p-2 text-xs font-medium uppercase leading-none lg:text-[10px] xl:text-sm">
                                        <div>Sun</div>
                                    </div>
                                    <div
                                        className="m-[2px] grid aspect-square place-content-center p-2 text-xs font-medium uppercase leading-none lg:text-[10px] xl:text-sm">
                                        <div>Mon</div>
                                    </div>
                                    <div
                                        className="m-[2px] grid aspect-square place-content-center p-2 text-xs font-medium uppercase leading-none lg:text-[10px] xl:text-sm">
                                        <div>Tue</div>
                                    </div>
                                    <div
                                        className="m-[2px] grid aspect-square place-content-center p-2 text-xs font-medium uppercase leading-none lg:text-[10px] xl:text-sm">
                                        <div>Wed</div>
                                    </div>
                                    <div
                                        className="m-[2px] grid aspect-square place-content-center p-2 text-xs font-medium uppercase leading-none lg:text-[10px] xl:text-sm">
                                        <div>Thu</div>
                                    </div>
                                    <div
                                        className="m-[2px] grid aspect-square place-content-center p-2 text-xs font-medium uppercase leading-none lg:text-[10px] xl:text-sm">
                                        <div>Fri</div>
                                    </div>
                                    <div
                                        className="m-[2px] grid aspect-square place-content-center p-2 text-xs font-medium uppercase leading-none lg:text-[10px] xl:text-sm">
                                        <div>Sat</div>
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-inherit">1
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-inherit">2
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm">3
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm">4
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm">5
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm">6
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm">7
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-inherit">8
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-inherit">9
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm">10
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm">11
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm">12
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm">13
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm">14
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-gray-200 bg-neutral-700 bg-inherit">15
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-gray-200 bg-neutral-700 bg-inherit">16
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-gray-200 bg-neutral-700">17
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-gray-200 bg-neutral-700">18
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-gray-200 bg-neutral-700">19
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-gray-200 bg-neutral-700">20
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-gray-200 bg-neutral-700">21
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-gray-200 bg-neutral-700 bg-inherit">22
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-gray-200 bg-neutral-700 bg-inherit">23
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-gray-200 bg-neutral-700">24
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-gray-200 bg-neutral-700">25
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-gray-200 bg-neutral-700">26
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-gray-200 bg-neutral-700">27
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-gray-200 bg-neutral-700">28
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-gray-200 bg-neutral-700 bg-inherit">29
                                    </div>
                                    <div
                                        className="grid aspect-square place-content-center rounded-sm text-xs font-medium leading-none lg:rounded-[4px] xl:text-sm bg-gray-200 bg-neutral-700 bg-inherit">30
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"space-y-5 mt-10"}>
                        <div className={"font-bold text-white text-3xl max-sm:text-2xl"}>
                            <div className={"flex flex-row items-center"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="size-7 max-sm:size-6 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                Xidmətlərini əlavə et
                            </div>
                        </div>
                        <div className={"font-bold text-white text-3xl max-sm:text-2xl"}>
                            <div className={"flex flex-row items-center"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="size-7 max-sm:size-6 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                İş saatlarını qeyd et
                            </div>
                        </div>
                        <div className={"font-bold text-white text-3xl max-sm:text-2xl"}>
                            <div className={"flex flex-row items-center"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="size-7 max-sm:size-6 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                Linki paylaş
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}