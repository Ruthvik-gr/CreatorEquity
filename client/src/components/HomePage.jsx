import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaHandshake, FaLightbulb } from 'react-icons/fa'; // Import icons for visual appeal

const HomeScreen = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">

            {/* Hero Section */}
            <section className="flex-1 flex flex-col justify-center items-center bg-blue-100 p-8 text-center animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-blue-800">Transforming Creativity into Opportunity</h2>
                <p className="text-lg md:text-xl mb-6 text-gray-700 max-w-2xl mx-auto">
                    CreatorEquity connects creators with businesses to form equity-based partnerships. Our platform helps creators turn their influence into equity and businesses find the perfect partners to grow.
                </p>
                <Link to="/register" className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
                    Join Now
                </Link>
            </section>

            {/* Features Section */}
            <section className="bg-white py-12 animate-fade-in">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-blue-800">Why CreatorEquity?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center">
                            <FaRocket className="text-4xl text-blue-700 mb-4" />
                            <h3 className="text-xl font-bold mb-4 text-blue-700">Empowering Creators</h3>
                            <p className="text-gray-600 text-center">
                                Creators can leverage their audience and influence to gain equity in exciting businesses, turning their passion into long-term success.
                            </p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center">
                            <FaHandshake className="text-4xl text-blue-700 mb-4" />
                            <h3 className="text-xl font-bold mb-4 text-blue-700">Building Strong Partnerships</h3>
                            <p className="text-gray-600 text-center">
                                Businesses gain access to top creators who can boost their brand and help them reach their target audience effectively.
                            </p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center">
                            <FaLightbulb className="text-4xl text-blue-700 mb-4" />
                            <h3 className="text-xl font-bold mb-4 text-blue-700">Innovative Opportunities</h3>
                            <p className="text-gray-600 text-center">
                                Connect with early-stage companies and explore unique opportunities for growth and collaboration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-blue-100 py-12 animate-fade-in">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-blue-800">What Our Users Say</h2>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex-1">
                            <p className="text-gray-600 mb-4">"CreatorEquity has revolutionized the way we connect with influencers. The equity-based model is a game changer!"</p>
                            <p className="font-semibold text-blue-700">Alex J., Business Owner</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex-1">
                            <p className="text-gray-600 mb-4">"I've been able to partner with amazing brands through CreatorEquity. It's an incredible platform for creators!"</p>
                            <p className="font-semibold text-blue-700">Jamie L., Creator</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeScreen;
