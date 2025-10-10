import React from 'react';
import Banner from '../components/Banner';
import Browesmenu from '../components/Browesmenu';
import CustomerReviews from '../components/CustomerReviw';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/EventServices';
import DeliverySection from '../components/Fooddlvry';
import BlogSection from '../components/BlogSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Browesmenu></Browesmenu>
            <AboutSection></AboutSection>
            <ServicesSection></ServicesSection>
            <DeliverySection></DeliverySection>
            <CustomerReviews></CustomerReviews>
            <BlogSection></BlogSection>

        </div>
    );
};

export default Home;