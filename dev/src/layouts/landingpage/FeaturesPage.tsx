


import React, { useState, useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from '../../components/Modal';
import { Spacer } from '@nextui-org/react';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const features = [
    {
        title: "Vaxta qənaət və rahatlıq",
        description: "Günün istənilən vaxtında, evdən çıxmadan və ya işdən ayrılmadan istədiyiniz xidməti rezervasiya edin.",
        icon: "🕒",
        additionalInfoTitle: "Təhlükəsiz və rahat",
        additionalInfoHeading: "Hər yerdən və hər zaman",
        additionalInfo: "Hər yerdən və hər zaman rezervasiya etmək imkanı ilə həyatınızı daha asan və rahat edin. Siz yalnız vaxtınıza qənaət etmirsiniz, həm də stressdən uzaqlaşırsınız."
    },
    {
        title: "Hər zaman əlçatanlıq",
        description: "Günün 24 saatı, həftənin 7 günü rezervasiya edə bilərsiniz. Artıq iş saatlarını gözləməyə ehtiyac yoxdur.",
        icon: "📅",
        additionalInfoTitle: "Daimi xidmət",
        additionalInfoHeading: "Çevik və rahat",
        additionalInfo: "Xidmətlərimiz hər zaman əlçatandır, belə ki, siz istədiyiniz zaman rezervasiya edə bilərsiniz. Bu sizə müstəsna çeviklik və rahatlıq verir."
    },
    {
        title: "Heç bir qarışıqlıq yoxdur",
        description: "Xatırlatmalar göndərilərək, artıq rezervasiyalar unudulmayacaq.",
        icon: "📌",
        additionalInfoTitle: "Dəqiq və asan izləmə",
        additionalInfoHeading: "Unutma qorxusu olmadan",
        additionalInfo: "Rezervasiyalarınız haqqında xatırlatmalar alaraq, heç bir rezervasiyanı unutmayacaqsınız. Bu sizin üçün hər şeyin asan və nizamlı qalmasını təmin edir."
    },
    {
        title: "Əlavə gəlirlər",
        description: "Əlavə xidmətlər və müxtəlif paketlərdən yararlanın.",
        icon: "💰",
        additionalInfoTitle: "Faydalı təkliflər",
        additionalInfoHeading: "Daha çox dəyər əldə edin",
        additionalInfo: "Xidmətlərimiz sizə yalnız əsas ehtiyacları qarşılamaqdan daha çoxunu təklif edir. Əlavə gəlirlər və xüsusi paketlərdən istifadə edərək, daha çox fayda əldə edə bilərsiniz."
    },
    {
        title: "Əlavə gəlirlər",
        description: "Əlavə xidmətlər və müxtəlif paketlərdən yararlanın.",
        icon: "💰",
        additionalInfoTitle: "Faydalı təkliflər",
        additionalInfoHeading: "Daha çox dəyər əldə edin",
        additionalInfo: "Xidmətlərimiz sizə yalnız əsas ehtiyacları qarşılamaqdan daha çoxunu təklif edir. Əlavə gəlirlər və xüsusi paketlərdən istifadə edərək, daha çox fayda əldə edə bilərsiniz."
    }
    // Add more features as needed
];

export const FeaturesPage: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({ title: "", heading: "", description: "" });
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const cardWidth = carouselRef.current.querySelector<HTMLDivElement>('div > div')?.offsetWidth || 0;
            if (direction === 'left' && currentIndex > 0) {
                carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
                setCurrentIndex(prevIndex => prevIndex - 1);
            } else if (direction === 'right' && currentIndex < features.length - 1) {
                carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
                setCurrentIndex(prevIndex => prevIndex + 1);
            }
        }
    };

    useEffect(() => {
        const handleResize = () => {
            // Force re-render on window resize to recalculate current card width
            setCurrentIndex(currentIndex);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [currentIndex]);

    return (
        <>
            <section className="lg:mx-24 max-sm:mx-12">
                <div className="mt-32 max-sm:mt-10 bg-custom-gray-100 rounded-3xl">
                    <h1 className="pl-10 pt-10 xl:text-6xl text-2xl font-medium">Niyə br10 ən yaxşısıdır.</h1>
                    <div className="pt-4 pl-5 flex flex-col justify-end items-end">
                        <div
                            id="features"
                            ref={carouselRef}
                            className="flex items-start pt-10 w-full pb-3 overflow-x-scroll no-scrollbar"
                        >
                            <div className="flex space-x-4 w-max">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className={`${index === 0 ? 'pt-4 pb-4' : index === features.length - 1 ? 'p-4' : 'pl-4 py-4'} h-96 flex-shrink-0 w-full md:w-1/3`}
                                    >
                                        <div
                                            className="bg-white cursor-pointer p-6 rounded-3xl h-full flex flex-col justify-between items-end">
                                            <div>
                                                <div className="text-6xl mb-4">{feature.icon}</div>
                                                <div className="text-2xl font-bold mb-2">{feature.title}</div>
                                                <p className="text-gray-600">{feature.description}</p>
                                            </div>
                                            <svg
                                                onClick={() => {
                                                    setModalOpen(true);
                                                    setModalData({
                                                        title: feature.additionalInfoTitle,
                                                        heading: feature.additionalInfoHeading,
                                                        description: feature.additionalInfo,
                                                    });
                                                }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="size-10 flex-shrink-0"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-row space-x-5 pb-5 pr-5">
                            <FaCircleChevronLeft
                                onClick={() => scroll('left')}
                                className={`w-auto h-10 cursor-pointer rounded-3xl ${currentIndex === 0 ? 'text-gray-200' : 'text-gray-400 hover:bg-black'}`}
                            />
                            <FaCircleChevronRight
                                onClick={() => scroll('right')}
                                className={`w-auto h-10 cursor-pointer rounded-[100px] ${currentIndex === features.length - 1 ? 'text-gray-200' : 'text-gray-400 hover:bg-black'}`}
                            />
                        </div>
                    </div>

                    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                        <div className="mx-8 my-10">
                            <h1 className="text-xl font-medium mb-2">{modalData.title}</h1>
                            <h2 className="xl:text-5xl text-4xl font-semibold mb-7">{modalData.heading}</h2>
                            <p className="text-gray-600 text-lg">{modalData.description}</p>
                        </div>
                    </Modal>
                </div>
                <div className="flex flex-col justify-center items-start max-sm:h-[50rem] lg:h-screen lg:mt-16">
                    <span className="text-5xl max-sm:text-2xl font-semibold">Kəşf etməyə dəyər<br/> yeniliklər.</span>
                    <div className="relative">
                        <Spacer y={10}/>
                        <picture>
                            <source srcSet="/assets/watch_our_film_mobile.png" media="(max-width: 640px)"/>
                            <source srcSet="/assets/watch_our_film_xlarge.jpg" media="(min-width: 641px)"/>
                            <img
                                src="/assets/watch_our_film_xlarge.jpg"
                                alt="Watch our film"
                                className="rounded-3xl w-full max-sm:h-[30rem] object-cover"
                            />
                        </picture>
                        <div
                            className="absolute inset-0 flex max-sm:justify-start max-sm:items-center flex-col justify-center items-start text-white p-10">
                            <div className={"max-sm:mt-16 max-sm:text-center"}>
                                <h1 className="text-xl lg:text-3xl md:text-5xl font-bold text-custom-gray-050">br10'un</h1>
                                <span className="text-xl lg:text-3xl md:text-5xl font-bold text-custom-gray-050">
                                incəliklərinə səyahət</span>
                            </div>
                            <button
                                className="max-sm:mt-2 mt-4 px-6 py-2 bg-white text-black font-semibold
                                    rounded-full hover:bg-gray-200">
                                Videonu izlə
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
