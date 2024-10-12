import { useReadGalleriesQuery } from "@/redux/slices/gallerySlice";
import { useState } from "react";
import {useParams} from "react-router-dom";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {CloseIcon} from "@/components/ProductsComponent.tsx";

export default function GalleryComponent() {
    const { specialistId } = useParams();
    const { data, isError, isLoading } = useReadGalleriesQuery(specialistId);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (src: string) => {
        setSelectedImage(src);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };


    if (isLoading || isError) {
        return(
            <div className={"grid grid-cols-2 md:grid-cols-3 gap-4 "}>
                {
                    Array(12).fill(null).map((_, i) => (
                        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    ))
                }
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data?.data?.map((image: any) => (
                    <div
                        key={image.id}
                        className="cursor-pointer"
                        onClick={() => openModal(image.path)}
                    >
                        <img
                            src={image.path}
                            alt=""
                            className="w-full h-[12rem] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>

    {
        selectedImage && (
            <div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                onClick={closeModal}
            >
                <div className="relative p-4 max-w-full max-h-full flex items-center justify-center">
                     {/*Close button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full px-2.5 py-1 mr-1.5 mt-1.5 hover:bg-opacity-75 transition-colors duration-300 z-10"
                    >
                        ✕
                    </button>


                    {/* Image container with fixed dimensions */}
                    <div className="w-[600px] h-[400px] bg-black flex items-center justify-center rounded-lg shadow-lg">
                        <img
                            src={selectedImage}
                            alt="Zoomed image"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        )}
        </div>
    );
}