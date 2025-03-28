import React from 'react';
import P1 from '../assets/Product/p1.jpg';
import P2 from '../assets/Product/p2.jpg';
import P3 from '../assets/Product/p3.jpg';
import P4 from '../assets/Product/p4.jpg';
import S1 from '../assets/Product/s1.png';
import S2 from '../assets/Product/s2.png';
import S3 from '../assets/Product/s3.png';
import S4 from '../assets/Product/s4.png';
import S5 from '../assets/Product/s5.png';
import S6 from '../assets/Product/s6.png';

const OurProduct = () => {
    const images = [
        { id: 1, src: S1, title: "Casual Wear" },
        { id: 2, src: S2, title: "Classic Suit" },
        { id: 3, src: S3, title: "Denim Jacket" },
        { id: 4, src: S4, title: "Leather Jacket" },
        { id: 5, src: S5, title: "Summer Outfit" },
        { id: 6, src: S6, title: "Formal Attire" },
    ];
    return (
        <div>
            {/* Our Product */}
            <div className='container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* Text Section */}
                <div className='flex flex-col justify-center'>
                    <h2 className='text-3xl font-bold '>Explore Our Products</h2>
                    <p className='text-gray-600 mt-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <p className='text-gray-600 mt-4'>
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className='text-gray-600 mt-4'>
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                {/* Image Grid */}
                <div className='grid grid-cols-2 gap-4'>
                    {[{ img: P1, text: 'Leather Bags' }, { img: P2, text: 'Jewelry' }, { img: P3, text: 'Stylish Wear' }, { img: P4, text: 'Different Types' }].map((item, index) => (
                        <div key={index} className='relative overflow-hidden group'>
                            <img src={item.img} alt={item.text} className='w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105' />
                            <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <p className='text-white text-lg font-bold'>{item.text}</p>
                                <p className='text-white text-sm'>Lorem Ipsum is simply dummy text</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Social Media */}
            <div className="my-10 bg-[#E5E7EB] py-10">
                <h2 className="text-3xl font-bold text-center">Social Media</h2>
                <p className="text-gray-500 text-center max-w-xl mx-auto my-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="flex justify-center gap-5 flex-wrap">
                    {images.map((item) => (
                        <div key={item.id} className="relative group overflow-hidden rounded-lg">
                            <img
                                src={item.src}
                                alt="img"
                                className="w-52 h-72 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-lg font-semibold translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-white text-sm opacity-70 mt-1">Latest Collection</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurProduct;
