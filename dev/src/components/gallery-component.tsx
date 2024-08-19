import { Link } from "@nextui-org/react";

export function GalleryComponent() {
    
  return (
    <div className="container mx-auto px-4 pb-12 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        <div className="group relative overflow-hidden rounded-lg">
          <Link href="#" className="absolute inset-0 z-10">
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Image 1"
            width="400"
            height="300"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <Link href="#" className="absolute inset-0 z-10">
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Image 2"
            width="400"
            height="300"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <Link href="#" className="absolute inset-0 z-10">
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Image 3"
            width="400"
            height="300"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-6">
        <div className="group relative overflow-hidden rounded-lg">
          <Link href="#" className="absolute inset-0 z-10">
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Image 4"
            width="400"
            height="300"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <Link href="#" className="absolute inset-0 z-10">
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Image 5"
            width="400"
            height="300"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <Link href="#" className="absolute inset-0 z-10">
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Image 6"
            width="400"
            height="300"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-6">
        <div className="group relative overflow-hidden rounded-lg">
          <Link href="#" className="absolute inset-0 z-10">
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Image 7"
            width="400"
            height="300"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <Link href="#" className="absolute inset-0 z-10">
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Image 8"
            width="400"
            height="300"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <Link href="#" className="absolute inset-0 z-10">
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Image 9"
            width="400"
            height="300"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-6">
        <div className="group relative overflow-hidden rounded-lg">
          <Link href="#" className="absolute inset-0 z-10">
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Image 10"
            width="400"
            height="300"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <Link href="#" className="absolute inset-0 z-10">
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Image 11"
            width="400"
            height="300"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <Link href="#" className="absolute inset-0 z-10">
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Image 12"
            width="400"
            height="300"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  )
}