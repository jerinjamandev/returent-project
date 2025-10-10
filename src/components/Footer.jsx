import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import img1 from '../assets/imgs/burgur.png'
import img2 from '../assets/imgs/potatto.png'
import img3 from '../assets/imgs/kfc.png'
import img4 from '../assets/imgs/cupcake.png'

const navLinks = [
    "Home", "About", "Menu", "Pricing", "Blog", "Contact", "Delivery"
];

const utilityLinks = [
    "Start Here", "Styleguide", "Password Protected", "404 Not Found", "Licenses", "Changelog", "View More"
];

const instaImages = [
    `${img1}`,
    `${img2}`,
    `${img3}`,
    `${img4}`,



];

const LinkList = ({ title, links }) => (
    <div className="text-white">
        <h4 className="text-lg font-semibold mb-6 uppercase tracking-wider text-opacity-80">
            {title}
        </h4>
        <ul className="space-y-3">
            {links.map((link, index) => (
                <li key={index}>
                    <a
                        href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                        className="text-sm text-white opacity-70 hover:opacity-100 transition duration-200"
                    >
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-gray-700 pb-12">

                    <div>
                        <div className="flex items-center mb-4">
                            <span className="text-3xl font-serif mr-2">🍽️</span>
                            <h3 className="text-xl font-bold">Bistro Bliss</h3>
                        </div>

                        <p className="text-sm text-white opacity-70 mb-6 max-w-xs">
                            In the new era of technology we look in the future with certainty and pride to for our company and.
                        </p>

                        <div className="flex space-x-3">
                            <a href="#" className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full hover:bg-red-700 transition">
                                <FaTwitter size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full hover:bg-red-700 transition">
                                <FaFacebookF size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full hover:bg-red-700 transition">
                                <FaInstagram size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full hover:bg-red-700 transition">
                                <FaPinterestP size={14} />
                            </a>
                        </div>
                    </div>

                    <LinkList title="Pages" links={navLinks} />

                    <LinkList title="Utility Pages" links={utilityLinks} />

                    <div>
                        <h4 className="text-lg font-semibold mb-6 uppercase tracking-wider text-opacity-80">
                            Follow Us On Instagram
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            {instaImages.map((image, index) => (
                                <div key={index} className="w-full h-24 overflow-hidden rounded-lg">
                                    <img
                                        src={image}
                                        alt={`Instagram image ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 text-center">
                    <p className="text-sm text-white opacity-50">
                        Copyright © 2023 Hashtag Developer. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;