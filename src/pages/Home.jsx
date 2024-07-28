import React, { useState,useEffect,useRef } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(10); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  



  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };


  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      image: "./src/assets/img/slide-1.png",
      title: "Welcome to the Jordan Culture Festival",
      description:
        "Experience the vibrant culture and traditions of Jordan through our exciting festival events.",
      btn: "Learn More",
    },
    {
      id: 2,
      image: "./src/assets/img/image-3.png",
      title: "Get Your Tickets Now",
      description:
        "Don’t miss out on our exclusive performances, workshops, and more. Buy your tickets today!",
      btn: "Buy Tickets",
    },
    {
      id: 3,
      image: "./src/assets/img/image-2.png",
      title: "Join Us for an Unforgettable Experience",
      description:
        "Celebrate with us and immerse yourself in the rich heritage of Jordan.",
      btn: "Explore Events",
    },
  ];

  const festivalData = {
    festivals: 
    [
      {
        id: 1,
        name: "Jordanian Cultural Festival",
        date: "August 12, 2024",
        location: "Amman",
        description: "Experience the rich cultural heritage of Jordan with traditional music, dance, and food.",
        link: "/festivals/jordanian-cultural-festival",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu7ZbpIUKssliRyVF6liJqLJXPwyymOCIhvw&s"
      },
      {
        id: 2,
        name: "Petra Arts Festival",
        date: "September 5, 2024",
        location: "Petra",
        description: "Join us for a celebration of arts and crafts amidst the ancient ruins of Petra.",
        link: "/festivals/petra-arts-festival",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk16XWSAWcCfIDJU36FzSFiGGVYQwi1nx96Q&s"
      },
      {
        id: 3,
        name: "Jerash Music Fest",
        date: "October 10, 2024",
        location: "Jerash",
        description: "Enjoy a weekend of music performances in the historical city of Jerash.",
        link: "/festivals/jerash-music-fest",
        image: "data:image/jpeg;base64,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"
      }
    ],
    categories: [
      {
        id: 1,
        name: "Culture",
        description:
          "Explore the rich tapestry of Jordanian culture through a series of events celebrating traditional music, dance, and crafts.",
        link: "/categories/music",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Jerash_Festival_2018_15.jpg/1200px-Jerash_Festival_2018_15.jpg",
      },
      {
        id: 2,
        name: "Food",
        description:
          "Discover food festivals showcasing Jordanian and international cuisines.",
        link: "/categories/food",
        imageUrl: "https://www.fvw.de/news/media/24/Jordanien-As-Salt-238069.jpeg",
      },
      {
        id: 3,
        name: "Sport",
        description:
          "Immerse yourself in art festivals with exhibitions, workshops, and live performances.",
        link: "/categories/art",
        imageUrl: "https://cdn.getyourguide.com/img/tour/1bf55693b34cfa95.png/145.jpg",
      },
    ],
    featuredFestivals: [
      {
        id: 1,
        name: "Jerash Festival of Culture and Arts",
        date: "August 20 - August 30, 2024",
        location: "Jerash",
        description:
          "One of the most famous festivals in Jordan, featuring a mix of music, dance, and cultural performances in the ancient city of Jerash.",
        imageUrl: "https://via.placeholder.com/600x400?text=Jerash+Festival",
        ticketLink: "/tickets/jerash-festival",
      },
      {
        id: 2,
        name: "Amman Summer Festival",
        date: "July 15 - August 5, 2024",
        location: "Amman",
        description:
          "A vibrant festival held in Amman showcasing local and international artists, street performances, and food stalls.",
        imageUrl:
          "https://via.placeholder.com/600x400?text=Amman+Summer+Festival",
        ticketLink: "/tickets/amman-summer-festival",
      },
      {
        id: 3,
        name: "Petra International Music Festival",
        date: "September 10 - September 15, 2024",
        location: "Petra",
        description:
          "Enjoy classical and contemporary music performances in the stunning setting of Petra, one of the world’s wonders.",
        imageUrl:
          "https://via.placeholder.com/600x400?text=Petra+Music+Festival",
        ticketLink: "/tickets/petra-music-festival",
      },
    ],
    specialOffers: [
      {
        id: 1,
        title: "Early-Bird Discount",
        description:
          "Get 20% off on tickets purchased before July 31, 2024. Limited time offer!",
        imageUrl:
          "https://via.placeholder.com/600x400?text=Early-Bird+Discount",
        link: "/specials/early-bird-discount",
      },
      {
        id: 2,
        title: "Family Package",
        description:
          "Buy 4 tickets and get 1 free! Perfect for a family outing to the Amman Summer Festival.",
        imageUrl: "https://via.placeholder.com/600x400?text=Family+Package",
        link: "/specials/family-package",
      },
      {
        id: 3,
        title: "VIP Experience",
        description:
          "Upgrade to a VIP pass for exclusive access to backstage areas and premium seating.",
        imageUrl: "https://via.placeholder.com/600x400?text=VIP+Experience",
        link: "/specials/vip-experience",
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "Omar Ahmed",
      role: "CEO at Company",
      image: "https://i.etsystatic.com/22964628/r/il/97184e/3402270775/il_570xN.3402270775_hnkz.jpg",
      testimonial:
        "This is an amazing service! It has greatly improved our productivity and efficiency. Highly recommend!",
    },
    {
      id: 2,
      name: "Rami AbdAlrahim",
      role: "Marketing Manager",
      image: "https://media.istockphoto.com/id/1390994387/photo/headshot-of-bearded-saudi-man-in-traditional-attire.jpg?s=612x612&w=0&k=20&c=4fp7roSaxOP1oSq3ighOiyyYbhwSoy1tDvyZRjDhUeo=",
      testimonial:
        "Incredible experience. The support team is fantastic, and the results speak for themselves.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Product Designer",
      image: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
      testimonial:
        "A game-changer for our business. Easy to use and integrates seamlessly with our workflow.",
    },
  ];

  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Check for "customerId" in sessionStorage to determine if the user is logged in
    const customerId = sessionStorage.getItem("customerId");
    setIsLoggedIn(!!customerId); // Set isLoggedIn to true if customerId exists
    
    const popupClosed = sessionStorage.getItem("popupClosed");
    
    if (popupClosed) {
      setShowPopup(false);
    }else {
      if (countdown === 0) {
      setShowPopup(false);}
      else{
    // Start countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowPopup(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearInterval(timer);}}
  }, [countdown,showPopup]);

  useEffect(() => {
    // Handle scroll event for showing popup
    const handleScroll = () => {
    


      const section = sectionRef.current;
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const scrollPosition = window.scrollY + window.innerHeight;

      // Check if the section is in view and if user has scrolled past a certain point
      if (scrollPosition > sectionRect.top + sectionRect.height / 2 && !isLoggedIn) {
        setShowPopup(false);
      } else {
        setShowPopup(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoggedIn]);
  const handleClosePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem("popupClosed", "true"); // Mark the popup as closed
  };
  useEffect(() => {
    // Check session storage to determine if popup should be shown
    const popupClosed = sessionStorage.getItem("popupClosed");
    if (popupClosed === "true") {
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
  }, []);
  
  return (

    <div className=" mx-auto bg-page ">
        <Navbar/>
      <div className="slider-hero  mb-8 ">
        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative rounded-xl overflow-hidden" 
            style={{ backgroundImage: `url(${slide.imageUrl})`, height: '300px' }}
            
            >
            <div className="relative h-3/4 overflow-hidden">
  <img
    src={slide.image}
    alt={slide.title}
    className="w-full h-h1 object-cover"
  />
</div>
              <div className="  absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white p-6 ">
                <h2 className="mt-38 text-2xl sm:text-3xl font-bold mb-2 text-red1">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-lg mb-6 mt-2">{slide.description}</p>
             
                <Link
               to='/catalog'
               className="bg-red1 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-xl hover:bg-red2 transition duration-300 transform hover:scale-105 hover:shadow-lg"                 >
              {slide.btn}
                 </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-lg mb-10   md:text-4xl font-bold text-red1 mb-6 md:mb-8">
                Why Festivals Matter
              </h2>
              <p className="text-2xl text-gray-600 mb-6">
                Festivals bring people together, celebrating the diverse and
                rich cultural heritage of Jordan. They offer a unique
                opportunity to experience the country's traditions, music,
                dance, and food. Join us in celebrating and preserving these
                traditions for future generations.
              </p>
              <Link
               to='/OurStory'
               className="bg-red1 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-xl hover:bg-red2 transition duration-300 transform hover:scale-105 hover:shadow-lg"                 >
              Learn More
                 </Link>

            </div>
            <div className="md:w-1/2 hover:transition">
      <img
        src="/src/assets/img/joflag.png"
        alt="Festival Image"
        className="rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
      />
    </div>
          </div>
        </div>
      </section>

      <section className=" py-12 my-20">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red1 mb-20">
            Explore Festivals by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {festivalData.categories.map((category) => (
              <div
                key={category.id}
                className="relative group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm mb-4">{category.description}</p>
                 
                  <Link to="/Catalog">
                 <a
                    className="bg-red1 py-2 px-4 rounded-lg hover:bg-red2 transition duration-300"
                  >
                    View Category
                  </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="py-12 my-28">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red1 mb-12">
            Upcoming Festivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {festivalData.festivals.map((festival) => (
              <div
                key={festival.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col"
              >
                <img
                  src={festival.image}
                  alt={festival.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between">
                  <p className="text-gray-600 mb-2">{festival.date}</p>
                  <p className="text-gray-600 mb-4">{festival.location}</p>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-page1">
                    {festival.name}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">{festival.description}</p>
                  <Link
                    to={`/festivals/${festival.id}`}
                    state={{ festival }}
                    className="bg-red1 text-white py-2 px-4 rounded-lg hover:bg-red2 transition duration-300 text-center"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section  id="offers" className="">
  <div className="container mx-auto px-4">
    {showPopup && !isLoggedIn && countdown > 0 && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-sm w-full relative">
          <button 
            onClick={() => {
              setShowPopup(false);
              // handleClosePopup();
            }}
            className="absolute top-2 right-2 text-gray-600 hover:text-red1 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <h3 className="text-xl font-bold mb-4 text-red1">Exclusive Offer!</h3>
          <p className="text-gray-700 mb-6">Sign up now to get special discounts on upcoming events!</p>
          <p className="mb-4 text-xl font-semibold">Time left: {countdown}s</p>
          <div className="flex justify-center">
            <a href="/SignUp" className="bg-red1 text-white py-2 px-4 rounded-lg hover:bg-red2 transition duration-300">
              Go to SignUp
            </a>
          </div>
        </div>
      </div>
    )}
  </div>
</section>
<section ref={sectionRef} className="py-12 bg-page mx-4 md:mx-8 lg:mx-20">
  <div className="container mx-auto  md:px-8 lg:px-12 flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-bold text-red1 mb-8 text-center">
      Testimonials
    </h2>
    <p className="text-center mb-8 max-w-3xl text-gray-700">
      Explore the experiences of those who attended our cultural festivals. Hear from attendees about how these events have enriched their understanding of diverse cultures and provided unforgettable experiences.
    </p>
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="min-w-full flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 p-6 text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-red1"
            />
            <h3 className="text-xl font-semibold mb-2 text-red1">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2 italic">
              {testimonial.role}
            </p>
            <p className="text-gray-700">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 md:left-4 lg:left-8 transform -translate-y-1/2 bg-red1 text-white p-3 rounded-full shadow-lg hover:bg-red2 focus:outline-none focus:ring-2 focus:ring-red-600"
        onClick={handlePrevClick}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-2 md:right-4 lg:right-8 transform -translate-y-1/2 bg-red1 text-white p-3 rounded-full shadow-lg hover:bg-red2 focus:outline-none focus:ring-2 focus:ring-red-600"
        onClick={handleNextClick}
      >
        &gt;
      </button>
    </div>
  </div>
</section>

<Footer />
    
    </div>
  );
}


