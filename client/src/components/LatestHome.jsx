import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ShoppingCart } from 'lucide-react';
import M1 from '../assets/LatestHome/m1.png';
import M2 from '../assets/LatestHome/m2.png';
import M3 from '../assets/LatestHome/m3.png';
import W1 from '../assets/LatestHome/w1.png';
import W2 from '../assets/LatestHome/w2.png';
import W3 from '../assets/LatestHome/w3.png';
import K1 from '../assets/LatestHome/k1.png';
import K2 from '../assets/LatestHome/k2.png';
import K3 from '../assets/LatestHome/k3.png';
import { useNavigate } from 'react-router-dom';

const LatestHome = () => {
    const navigate = useNavigate();

    const handleViewProduct = (product) => {
        navigate('/viewproduct', { state: { product } });
    };

    const MensCard = [
        { 
            id: 1, image: M1, title: "Classic Spring", price: 120.0, rating: 4,
            description: "A stylish and comfortable spring outfit designed for a casual and elegant look."
        },
        { 
            id: 2, image: M2, title: "Suit", price: 150.0, rating: 5,
            description: "A premium-quality suit that brings sophistication and class to any occasion."
        },
        { 
            id: 3, image: M3, title: "Cotton", price: 100.0, rating: 3,
            description: "A breathable cotton outfit perfect for warm weather and everyday wear."
        },
        { 
            id: 4, image: M1, title: "Classic Spring", price: 120.0, rating: 4,
            description: "A stylish and comfortable spring outfit designed for a casual and elegant look."
        },
        { 
            id: 5, image: M2, title: "Suit", price: 150.0, rating: 5,
            description: "A premium-quality suit that brings sophistication and class to any occasion."
        },
        { 
            id: 6, image: M3, title: "Cotton", price: 100.0, rating: 3,
            description: "A breathable cotton outfit perfect for warm weather and everyday wear."
        },
    ];
    
    const WomensCard = [
        { 
            id: 1, image: W1, title: "Classic Spring", price: 120.0, rating: 4,
            description: "A charming and lightweight dress for a fresh springtime look."
        },
        { 
            id: 2, image: W2, title: "Suit", price: 150.0, rating: 5,
            description: "An elegant women’s suit tailored for a confident and professional style."
        },
        { 
            id: 3, image: W3, title: "Cotton", price: 100.0, rating: 3,
            description: "A soft and breathable cotton outfit for all-day comfort and style."
        },
        { 
            id: 4, image: W1, title: "Classic Spring", price: 120.0, rating: 4,
            description: "A charming and lightweight dress for a fresh springtime look."
        },
        { 
            id: 5, image: W2, title: "Suit", price: 150.0, rating: 5,
            description: "An elegant women’s suit tailored for a confident and professional style."
        },
        { 
            id: 6, image: W3, title: "Cotton", price: 100.0, rating: 3,
            description: "A soft and breathable cotton outfit for all-day comfort and style."
        },
    ];
    
    const KidsCard = [
        { 
            id: 1, image: K1, title: "Classic Spring", price: 120.0, rating: 4,
            description: "A fun and comfy outfit designed for kids to enjoy the spring season in style."
        },
        { 
            id: 2, image: K2, title: "Suit", price: 150.0, rating: 5,
            description: "A cute and stylish mini suit, perfect for formal events and celebrations."
        },
        { 
            id: 3, image: K3, title: "Cotton", price: 100.0, rating: 3,
            description: "A soft cotton outfit that keeps kids comfortable while they play and explore."
        },
        { 
            id: 4, image: K1, title: "Classic Spring", price: 120.0, rating: 4,
            description: "A fun and comfy outfit designed for kids to enjoy the spring season in style."
        },
        { 
            id: 5, image: K2, title: "Suit", price: 150.0, rating: 5,
            description: "A cute and stylish mini suit, perfect for formal events and celebrations."
        },
        { 
            id: 6, image: K3, title: "Cotton", price: 100.0, rating: 3,
            description: "A soft cotton outfit that keeps kids comfortable while they play and explore."
        },
    ];
    

    return (
        <div className="container mx-auto px-4 py-10 bg-[#E5E7EB]">
            {/* Mens Collection */}
            <div>
                {/* Section Header */}
                <h2 className="text-3xl font-bold text-center">Men’s Latest</h2>
                <p className="text-gray-500 text-center max-w-xl mx-auto mt-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    spaceBetween={20}
                    pagination={{ clickable: true, el: ".custom-pagination" }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    className="mt-8 relative"
                >
                    {MensCard.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-white p-5 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 relative group mb-5">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-80 object-fill rounded-md transition-transform duration-300 transform hover:scale-105"
                                />
                                {/* Heart Icon */}
                                <div className="absolute bg-white p-2 rounded-lg top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ShoppingCart size={24} />
                                </div>
                                <div className="mt-4 flex gap-10 justify-center items-center">
                                    <p className='text-lg font-bold'>{item.title}</p>
                                    <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
                                </div>
                                <div className='flex gap-10 justify-center items-center'>
                                    {/* Star Rating */}
                                    <div className="flex justify-center mt-2 text-yellow-500">
                                        {'★'.repeat(item.rating)}
                                        {'☆'.repeat(5 - item.rating)}
                                    </div>
                                    <button 
                                        className="mt-4 bg-black text-white py-2 px-5 rounded hover:bg-gray-800 transition-all"
                                        onClick={() => handleViewProduct(item)}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    {/* Custom Pagination */}
                <div className="custom-pagination mt-6 flex justify-center"></div>
                </Swiper>
            </div>
            {/* Womens Collection */}
            <div className='mt-5'>
                {/* Section Header */}
                <h2 className="text-3xl font-bold text-center">Women’s Latest</h2>
                <p className="text-gray-500 text-center max-w-xl mx-auto mt-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    spaceBetween={20}
                    pagination={{ clickable: true, el: ".custom-pagination" }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    className="mt-8 relative"
                >
                    {WomensCard.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-white p-5 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 relative group mb-5">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-80 object-fill rounded-md transition-transform duration-300 transform hover:scale-105"
                                />
                                {/* Heart Icon */}
                                <div className="absolute bg-white p-2 rounded-lg top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ShoppingCart size={24} />
                                </div>
                                <div className="mt-4 flex gap-10 justify-center items-center">
                                    <p className='text-lg font-bold'>{item.title}</p>
                                    <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
                                </div>
                                <div className='flex gap-10 justify-center items-center'>
                                    {/* Star Rating */}
                                    <div className="flex justify-center mt-2 text-yellow-500">
                                        {'★'.repeat(item.rating)}
                                        {'☆'.repeat(5 - item.rating)}
                                    </div>
                                    <button 
                                        className="mt-4 bg-black text-white py-2 px-5 rounded hover:bg-gray-800 transition-all"
                                        onClick={() => handleViewProduct(item)}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    {/* Custom Pagination */}
                <div className="custom-pagination flex justify-center"></div>
                </Swiper>

                
            </div>
            {/* Kids Collection */}
            <div className='mt-5'>
                {/* Section Header */}
                <h2 className="text-3xl font-bold text-center">Kids Latest</h2>
                <p className="text-gray-500 text-center max-w-xl mx-auto mt-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    spaceBetween={20}
                    pagination={{ clickable: true, el: ".custom-pagination" }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    className="mt-8 relative"
                >
                    {KidsCard.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-white p-5 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 relative group mb-5">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-80 object-fill rounded-md transition-transform duration-300 transform hover:scale-105"
                                />
                                {/* Heart Icon */}
                                <div className="absolute bg-white p-2 rounded-lg top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ShoppingCart size={24} />
                                </div>
                                <div className="mt-4 flex gap-10 justify-center items-center">
                                    <p className='text-lg font-bold'>{item.title}</p>
                                    <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
                                </div>
                                <div className='flex gap-10 justify-center items-center'>
                                    {/* Star Rating */}
                                    <div className="flex justify-center mt-2 text-yellow-500">
                                        {'★'.repeat(item.rating)}
                                        {'☆'.repeat(5 - item.rating)}
                                    </div>
                                    <button 
                                        className="mt-4 bg-black text-white py-2 px-5 rounded hover:bg-gray-800 transition-all"
                                        onClick={() => handleViewProduct(item)}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    {/* Custom Pagination */}
                <div className="custom-pagination flex justify-center"></div>
                </Swiper>

                
            </div>
        </div>
    );
};

export default LatestHome;