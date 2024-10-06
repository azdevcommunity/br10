import { useReadGalleriesQuery } from "@/redux/slices/gallerySlice";
import { Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { date } from "zod";
import {useParams} from "react-router-dom";

export function GalleryComponent() {
    const {specialistId} = useParams();
  const {data, error,isError} = useReadGalleriesQuery(specialistId);
  
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isError) {
   console.log(error);
  }
  
  return (
    <div className="container px-0 mx-auto  pb-12 md:px-6 lg:px-8">
      <div className="grid  grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {data &&
          data.data.map((image: any) => (
            <div key={image.id} className="group relative overflow-hidden border rounded-lg">
              <Link href="#" className="absolute inset-0 z-10">
                <span className="sr-only">View</span>
              </Link>
              <img
                src={image.path}
                alt={image.name}
                width="400"
                height="300"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}