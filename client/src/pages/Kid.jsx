import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import K1 from '../assets/LatestHome/k1.png'
import K2 from '../assets/LatestHome/k2.png'
import K3 from '../assets/LatestHome/k3.png'
import K4 from '../assets/LatestHome/k4.png'
import K5 from '../assets/LatestHome/k5.png'
import K6 from '../assets/LatestHome/k6.png'
import K7 from '../assets/LatestHome/k7.png'
import K8 from '../assets/LatestHome/k8.png'
import K9 from '../assets/LatestHome/k9.png'
import W3 from '../assets/LatestHome/w3.png';
import W4 from '../assets/LatestHome/w4.png';
import F3 from '../assets/LatestHome/f3.png';
import F4 from '../assets/LatestHome/f4.png';
import BackgroundImage from '../assets/LatestHome/bg-women.jpg';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Kid = () => {

    const navigate = useNavigate();

    const handleViewProduct = (product) => {
        navigate('/viewproduct', { state: { product } });
    };

    const kidsCard = [
        { 
            id: 1, image: K1, title: "Classic Spring", price: 120.0, rating: 4,
            description: "A lightweight and stylish spring jacket designed for active kids."
        },
        { 
            id: 2, image: K2, title: "Suit", price: 150.0, rating: 5,
            description: "A charming kids' suit for special occasions, offering both comfort and elegance."
        },
        { 
            id: 3, image: K3, title: "Cotton", price: 100.0, rating: 3,
            description: "Soft and breathable cotton wear, perfect for everyday play and comfort."
        },
        { 
            id: 4, image: K1, title: "Classic Spring", price: 120.0, rating: 4,
            description: "A lightweight and stylish spring jacket designed for active kids."
        },
        { 
            id: 5, image: K2, title: "Suit", price: 150.0, rating: 5,
            description: "A charming kids' suit for special occasions, offering both comfort and elegance."
        },
        { 
            id: 6, image: K3, title: "Cotton", price: 100.0, rating: 3,
            description: "Soft and breathable cotton wear, perfect for everyday play and comfort."
        },
    ];
    
    const FeaturedCard = [
        { 
            id: 1, image: K4, title: "Classic Spring", price: 120.0, rating: 4,
            description: "A trendy spring jacket for kids, keeping them stylish and warm."
        },
        { 
            id: 2, image: K5, title: "Suit", price: 150.0, rating: 5,
            description: "A premium suit for kids, ideal for weddings, parties, and celebrations."
        },
        { 
            id: 3, image: K6, title: "Cotton", price: 100.0, rating: 3,
            description: "Comfortable and soft cotton outfit for a relaxed and cozy feel."
        },
        { 
            id: 4, image: K7, title: "Classic Spring", price: 120.0, rating: 4,
            description: "A trendy spring jacket for kids, keeping them stylish and warm."
        },
        { 
            id: 5, image: K8, title: "Suit", price: 150.0, rating: 5,
            description: "A premium suit for kids, ideal for weddings, parties, and celebrations."
        },
        { 
            id: 6, image: K9, title: "Cotton", price: 100.0, rating: 3,
            description: "Comfortable and soft cotton outfit for a relaxed and cozy feel."
        },
    ];

    return (
        <div className='bg-[#E5E7EB]'>
            <Header />

            {/* Mens Latest */}
            <div className="container mx-auto px-5 py-10">
                <h2 className="text-3xl font-bold text-center mb-8">Kid's Latest</h2>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {kidsCard.map((item) => (
                        <div key={item.id} className="bg-white p-5 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 relative group">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-80 object-fill rounded-md transition-transform duration-300 hover:scale-105"
                            />

                            {/* Heart Icon */}
                            <div className="absolute bg-white p-2 rounded-lg top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                                <ShoppingCart size={24} />
                            </div>

                            {/* Product Title & Price */}
                            <div className="mt-4 flex flex-col items-center">
                                <p className="text-lg font-bold">{item.title}</p>
                                <p className="text-lg font-semibold text-gray-700">${item.price.toFixed(2)}</p>
                            </div>

                            {/* Star Rating & Button */}
                            <div className="flex flex-col items-center mt-3">
                                <div className="flex text-yellow-500 text-lg">
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
                    ))}
                </div>
            </div>

            {/* Kids Collection */}
            <div
                className="relative bg-cover bg-center bg-no-repeat py-16 px-6 md:px-12 flex items-center justify-center my-10"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Content Wrapper */}
                <div className="relative flex flex-col md:flex-row items-center text-center md:text-left max-w-6xl mx-auto gap-6 md:gap-20">
                    {/* Images Section */}
                    <div className="flex gap-4 md:gap-6">
                        <img src={F3} alt="Kid's Collection 1" className="w-40 md:w-56 rounded-xl shadow-lg" />
                        <img src={F4} alt="Kid's Collection 2" className="w-40 md:w-56 rounded-xl shadow-lg" />
                    </div>

                    {/* Text Section */}
                    <div className="max-w-xl text-center md:text-left text-white bg-black bg-opacity-60 p-8 md:p-10 rounded-lg">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Men’s Collection</h2>
                        <p className="text-sm md:text-base leading-relaxed mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <p className="text-sm md:text-base leading-relaxed mb-6">
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
                        </p>
                        <button
                            className="mt-4 bg-black text-white py-2 px-5 rounded hover:bg-gray-800 transition-all"
                            onClick={() => handleViewProduct(item)}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Featured */}
            <div className="container mx-auto px-5 py-10">
                <h2 className="text-3xl font-bold text-center mb-8">Featured</h2>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FeaturedCard.map((item) => (
                        <div key={item.id} className="bg-white p-5 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 relative group">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-80 object-fill rounded-md transition-transform duration-300 hover:scale-105"
                            />

                            {/* Heart Icon */}
                            <div className="absolute bg-white p-2 rounded-lg top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                                <ShoppingCart size={24} />
                            </div>

                            {/* Product Title & Price */}
                            <div className="mt-4 flex flex-col items-center">
                                <p className="text-lg font-bold">{item.title}</p>
                                <p className="text-lg font-semibold text-gray-700">${item.price.toFixed(2)}</p>
                            </div>

                            {/* Star Rating & Button */}
                            <div className="flex flex-col items-center mt-3">
                                <div className="flex text-yellow-500 text-lg">
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
                    ))}
                </div>
            </div>

            {/* Kids Collection */}
            <div
                className="relative bg-cover bg-center bg-no-repeat py-16 px-6 md:px-12 flex items-center justify-center my-10"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Content Wrapper */}
                <div className="relative flex flex-col md:flex-row items-center text-center md:text-left max-w-6xl mx-auto gap-6 md:gap-20">
                    {/* Images Section */}
                    <div className="flex gap-4 md:gap-6">
                        <img src={W3} alt="Kid's Collection 1" className="w-40 md:w-56 rounded-xl shadow-lg" />
                        <img src={W4} alt="Kid's Collection 2" className="w-40 md:w-56 rounded-xl shadow-lg" />
                    </div>

                    {/* Text Section */}
                    <div className="max-w-xl text-center md:text-left text-white bg-black bg-opacity-60 p-8 md:p-10 rounded-lg">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Women’s Collection</h2>
                        <p className="text-sm md:text-base leading-relaxed mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <p className="text-sm md:text-base leading-relaxed mb-6">
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
                        </p>
                        <button className="bg-white text-black font-bold py-2 px-6 rounded hover:bg-gray-200 transition-all">
                            Discover More
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Kid;
