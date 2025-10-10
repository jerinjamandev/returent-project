import ReviewCard from "./Reviewcard";

const reviewsData = [
  {
    quote: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    highlight: "The best restaurant",
    name: "Sophie Robson",
    location: "Los Angeles, CA",
    image: "https://m.media-amazon.com/images/M/MV5BYzE0ZmQ2NzUtMjI4NS00Mzk0LTg3NGUtNmM4NzA0ZjEwMDhmXkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg", // Replace with actual image URL
  },
  {
    quote: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    highlight: "Simply delicious",
    name: "Matt Cannon",
    location: "San Diego, CA",
    image: "https://m.media-amazon.com/images/M/MV5BYzE0ZmQ2NzUtMjI4NS00Mzk0LTg3NGUtNmM4NzA0ZjEwMDhmXkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg", // Replace with actual image URL
  },
  {
    quote: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    highlight: "One of a kind restaurant",
    name: "Andy Smith",
    location: "San Francisco, CA",
    image: "https://m.media-amazon.com/images/M/MV5BYzE0ZmQ2NzUtMjI4NS00Mzk0LTg3NGUtNmM4NzA0ZjEwMDhmXkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg", // Replace with actual image URL
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-16 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif text-gray-800 mb-12">
          What Our Customers Say
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {reviewsData.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;