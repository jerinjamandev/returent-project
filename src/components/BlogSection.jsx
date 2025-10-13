
import React from 'react';
import GridArticleCard from './GridArticleCard';
import FeaturedArticleCard from './FeaturedArticleCard ';
import img1 from '../assets/images/burgur.png'
import img2 from '../assets/images/potatto.png'
import img3 from '../assets/images/kfc.png'
import img4 from '../assets/images/cupcake.png'
import img5 from '../assets/images/pizza.png'


const blogPosts = [
  {
    type: 'featured',
    image:`${img1}`,
    date: "January 3, 2023",
    title: "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elitminm semper adipiscing massa gravida nisi cras enim nibhholm varius amet gravida ut facilisibu neque egestas.",
  },
  {
    type: 'grid',
    image:`${img2}`,
    date: "January 3, 2023",
    title: "How to prepare the perfect french fries in an air fryer",
  },
  {
    type: 'grid',
    image:`${img3}`,
    date: "January 3, 2023",
    title: "How to prepare delicious chicken tenders",
  },
  {
    type: 'grid',
    image:`${img4}`,
    title: "7 delicious cheesecake recipes you can prepare",
  },
  {
    type: 'grid',
    image: `${img5}`,
    date: "January 3, 2023",
    title: "5 great pizza restaurants you should visit this city",
  },
];




const BlogSection = () => {
  const featuredPost = blogPosts.find(post => post.type === 'featured');
  const gridPosts = blogPosts.filter(post => post.type === 'grid');

  return (
    <section className="bg-neutral-50 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-4xl font-serif text-gray-800 mb-6 md:mb-0">
            Our Blog & Articles
          </h2>
          <button className="px-6 py-3 bg-amber-800 text-white rounded-full hover:bg-amber-700 transition duration-300 shadow-md">
            Read All Articles
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1"> 
            {featuredPost && <FeaturedArticleCard post={featuredPost} />}
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"> {/* This takes 2/3 width on large screens */}
            {gridPosts.map((post, index) => (
              <GridArticleCard key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;