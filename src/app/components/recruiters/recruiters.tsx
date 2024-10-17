"use client";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Home,
  User,
  Bus,
  Car,
  AlertTriangle,
  Coffee,
  Landmark,
  Camera,
  Church,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function Recruiters(props: any) {
  const nearbyAttractions = Array.from({ length: 31 }, (_, i) => ({
    path: require(`../../../../public/data/recruiters/prorec/l${i + 1}.png`),
  }));

  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(5); // lg screen: 3 items per slide
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2); // md screen: 2 items per slide
      } else {
        setItemsPerSlide(1); // sm screen: 1 item per slide
      }
    };

    // Set initial itemsPerSlide
    updateItemsPerSlide();

    // Add a resize event listener
    window.addEventListener("resize", updateItemsPerSlide);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      // Move to the next slide, considering the number of items per slide
      setCurrentSlide(
        (prevSlide) =>
          (prevSlide + 1) % Math.ceil(nearbyAttractions.length / itemsPerSlide)
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [itemsPerSlide, nearbyAttractions.length]);

  const nextSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + 0.5) % nearbyAttractions.length
    );
    setCurrentSlide(
      (prevSlide) => (prevSlide + 0.5) % nearbyAttractions.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 0.5 + nearbyAttractions.length) % nearbyAttractions.length
    );
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 0.5 + nearbyAttractions.length) % nearbyAttractions.length
    );
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8 text-center text-[#2C3E50]">
        Our Recruiters
      </h2>

      <div className="relative bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentSlide * (100 / itemsPerSlide)
              }%)`,
            }}
          >
            {nearbyAttractions.map((attraction, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4 md:px-6 lg:px-8"
                style={{ width: `${100 / itemsPerSlide}%` }} // Dynamic width based on screen size
              >
                <div className="mb-4 flex justify-center items-center object-contain">
                  <Image
                    placeholder="blur"
                    src={attraction.path}
                    alt={"image"}
                    className="w-[65%] h-48  object-contain rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev/Next buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-[#3498DB]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-[#3498DB]" />
        </button>
      </div>
    </section>
  );
}
