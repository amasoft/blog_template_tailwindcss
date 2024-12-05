// import React, { useState, useEffect } from "react";

// const Carousel = () => {
//   const slides = [
//     "https://via.placeholder.com/800x400?text=Slide+1",
//     "https://via.placeholder.com/800x400?text=Slide+2",
//     "https://via.placeholder.com/800x400?text=Slide+3",
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   return (
//     // <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
//     <div className="px-4 py-32 max-auto ">
//       {/* Slides */}
//       <div
//         className="flex transition-transform duration-500"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="w-full flex-shrink-0">
//             <img
//               src={slide}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-64 object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       {/* <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100"
//       >
//         &larr;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100"
//       >
//         &rarr;
//       </button> */}

//       {/* Dots Navigation */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full ${
//               index === currentSlide ? "bg-gray-800" : "bg-gray-300"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState, useEffect } from "react";

const Carousel = () => {
  // const slides = [
  //   "/path/to/your/image1.jpg", // Replace with your image URL
  //   "/path/to/your/image2.jpg", // Replace with your image URL
  //   "/path/to/your/image3.jpg", // Replace with your image URL
  // ];
  const slides = [
    "doctor-child.jpeg",
    "healthy_livng.jpeg",
    "doctor-child.jpeg",
  ];
  //   const slides = [
  //     "C:/Users/user/Desktop/BLog ApP/doctor-child.jpeg",
  //     "https://via.placeholder.com/800x400?text=Slide+2",
  //     "https://via.placeholder.com/800x400?text=Slide+3",
  //   ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  //   px-4 py-32 max-auto
  return (
    <div className="px-4 mt-4 bg-gray-300 max-auto ">
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden mt-14">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-96 object-cover" // Adjust height as needed
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100"
        >
          &larr;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100"
        >
          &rarr;
        </button> */}

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
