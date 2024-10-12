import { useReadGalleriesQuery } from "@/redux/slices/gallerySlice";
import { Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

// export function GalleryComponent() {
//     const {specialistId} = useParams();
//   const {data, error,isError} = useReadGalleriesQuery(specialistId);
//
//   useEffect(() => {
//     console.log(data);
//   }, [data]);
//
//   if (isError) {
//    console.log(error);
//   }
//
//   return (
//     <div className="container px-0 mx-auto  pb-12 md:px-6 lg:px-8">
//       <div className="grid  grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
//         {data &&
//           data.data.map((image: any) => (
//             <div key={image.id} className="group relative overflow-hidden border rounded-lg">
//               <Link href="#" className="absolute inset-0 z-10">
//                 <span className="sr-only">View</span>
//               </Link>
//               <img
//                 src={image.path}
//                 alt={image.name}
//                 width="400"
//                 height="300"
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                 style={{ aspectRatio: "400/300", objectFit: "cover" }}
//               />
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }
 // assuming this is the correct import

export default function GalleryComponent() {
    const { specialistId } = useParams();
    const { data, error, isError, isLoading } = useReadGalleriesQuery(specialistId);

    // Hook must be outside conditional render
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (src: string) => {
        setSelectedImage(src);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    // Ensure no hooks are conditionally rendered
    if (isError) {
        return <p>{error.toString()}</p>;
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data?.data?.map((image: any) => (
                    <div
                        key={image.id}
                        className="cursor-pointer"
                        onClick={() => openModal(image.path)}
                    >
                        <img
                            style={{ width: "400px", height: "300px" }}
                            src={image.path}
                            alt=""
                            className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div className="relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors duration-300"
                        >
                            {/* Modal close button */}
                        </button>
                        <img
                            src={selectedImage}
                            alt="Zoomed image"
                            style={{ width: "400px", height: "300px" }}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}