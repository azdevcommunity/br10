import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {PlusCircleIcon} from "@heroicons/react/24/outline";

const features = [
    {
        title: "Vaxtınıza qənaət edin və rahatlıq yaşayın",
        description: "Günün istənilən vaxtında, evdən çıxmadan və ya işdən ayrılmadan sadəcə telefonunuzdan istədiyiniz xidməti rezervasiya ",
        icon: "🕒",
    },
    {
        title: "Hər zaman əlçatanlıq",
        description: "Günün 24 saatı, həftənin 7 günü rezervasiya edə bilərsiniz. Artıq iş saatlarını gözləməyə ehtiyac yoxdur. ",
        icon: "📅",
    },
    {
        title: "Heç bir qarışıqlıq yoxdur",
        description: "Xatırlatmalar göndərilərək, artıq rezervasiyalar unudulmayacaq",
        icon: "📌",
    },
    {
        title: "Əlavə gəlirlərdən yararlanın",
        description: "Əlavə xidmətlər və müxtəlif paketlərdən yararlan",
        icon: "💰"
    }
];

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const FeaturesPage: React.FC = () => {
    return (
        <div className="mt-32 bg-custom-gray-100 rounded-3xl mx-10">
            <div className="pt-10 pl-10">
                <h1 className="xl:text-6xl text-2xl font-medium mb-6">Niyə br10 ən yaxşısıdır.</h1>
                <div id="features" className="flex flex-col items-start justify-start pt-10 w-full pb-10 overflow-x-scroll">
                    <div className="flex w-11/12">
                        {features.map((feature, index) => (
                            <div key={index} className={`${index === 0 ? 'pt-4 pb-4' : index === features.length - 1 ? 'p-4' : 'pl-4 py-4'} h-96 flex-shrink-0 w-full md:w-1/3`}>
                                <div
                                    className="bg-white cursor-pointer p-6 rounded-3xl shadow-lg h-full flex flex-col justify-between items-end">
                                    <div>
                                        <div className="text-6xl mb-4">{feature.icon}</div>
                                        <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         className="size-10">
                                        <path fillRule="evenodd"
                                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365
                                              9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0
                                              0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                                              clipRule="evenodd"/>
                                    </svg>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};