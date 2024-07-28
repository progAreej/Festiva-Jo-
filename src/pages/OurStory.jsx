


import './OurStory.css';
import topCenterImg from '../assets/img/24.svg';
import s26Img from '../assets/img/s26.svg';
import s27Img from '../assets/img/s27.svg';
import s28Img from '../assets/img/s28.svg';
import s30Img from '../assets/img/s30.svg';
import s29Img from '../assets/img/s29.svg';
import ajlon from "../assets/img/ajlon.mp4"
import logo from '../assets/img/logo2 (1).svg'
import logo2 from '../assets/img/logo2 (2).svg'
import areag from '../assets/img/WhatsApp_Image_2024-07-22_at_10.37.21_AM.jpeg'
import forat from '../assets/img/forat2.svg'
import duaa from '../assets/img/duaa.svg'
import rami from '../assets/img/rami.svg'
import malek from '../assets/img/malek.svg'
import rafah from '../assets/img/rafah.jpg'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const OurStory = () => {
  return (
    <div>
      <NavBar />
      <div className='pg-page'>
        <div className="top-center mb-12">
          {/* <img src={topCenterImg} alt="Top Center Image" className="w-full" /> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-red1 mb-12">
            Our Story
          </h1>
        </div>
        <div className="hero-section mb-12">
          <div className="video-container">
            <video controls className="w-full">
              <source src={ajlon} type="video/mp4" />
              متصفحك لا يدعم عرض الفيديو.
            </video>
          </div>
        </div>
        <div className="px-4 py-5 my-5 text-center" style={{ backgroundImage: `url(${s26Img})` }}>
          <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight font-bold text-red1 dark:text-white mt-8 lg:mt-16">
            Festiva Jordan
          </h1>
          <div className="mx-auto lg:w-3/4" style={{ backgroundImage: `url(${s27Img})` }}>
            <p className="mb-4 text-xl sm:text-2xl lg:text-3xl tracking-tight text-gray-600 dark:text-white mt-4 lg:mt-8" style={{ color: '#704638' }}>
              Your Gateway to Jordan's Festivals
            </p>
          </div>
        </div>

        <div className="container mx-auto mt-8 lg:mt-12">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-12 py-6">
            <div className="w-full lg:w-1/2">
              <img 
                src={s28Img} 
                className="w-full h-auto object-cover" 
                alt="Festiva Jordan" 
                loading="lazy" 
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8">
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3 text-red1">At Festiva Jordan</h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-[#704638] lg:leading-relaxed">
                Our mission is to provide the best festival experiences in Jordan. We are dedicated to making ticket booking for a wide range of events and festivals easy and enjoyable. We strive for the highest levels of quality and service to ensure that every event is an unforgettable experience.
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 py-8">
          <h2 className="mb-4 text-red1 text-3xl sm:text-4xl tracking-tight font-extrabold dark:text-white text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="text-center">
              <img src={s30Img} alt="Integrity Icon" className="mx-auto" />
            </div>
            <div className="text-center">
              <img src={s29Img} alt="..." className="mx-auto" />
            </div>
          </div>
        </div>

        <section className="bg-customBackground dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-red1 dark:text-white">
              Our Partners
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="./">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={logo2}
                  alt="Jordanian Ministry of Culture"
                />
              </a>
              <div className="p-4">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Jordanian Ministry of Culture
                </h3>
                <p>The government body responsible for organizing and supporting cultural and artistic events in Jordan.</p>
              </div>
            </div>
            <div className="flex items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={logo}
                  alt="Jordan Tourism Board"
                />
              </a>
              <div className="p-4">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Jordan Tourism Board
                </h3>
                <p>Promotes tourism in Jordan and organizes events that highlight the country's cultural and natural heritage.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-custom-bg dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-red1 dark:text-white">
              Our Team
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Our dedicated team is the heart of our success
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <div className="text-center">
              <img
                className="mx-auto mb-4 w-24 h-24 sm:w-36 sm:h-36 rounded-full"
                src={areag} 
                alt="Areej Abumuhfouz"
              />
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Areej Abumuhfouz</a>
              </h3>
              <p>Scrum Master</p>
            </div>
            <div className="text-center">
              <img
                className="mx-auto mb-4 w-24 h-24 sm:w-36 sm:h-36 rounded-full"
                src={rafah}
                alt="Rafah Mahmoud"
              />
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Rafah Mahmoud</a>
              </h3>
              <p>Product Owner</p>
            </div>
            <div className="text-center">
              <img
                className="mx-auto mb-4 w-24 h-24 sm:w-36 sm:h-36 rounded-full"
                src={malek}
                alt="Malek Shehadeh"
              />
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Malek Shehadeh</a>
              </h3>
              <p>QA</p>
            </div>
            <div className="text-center">
              <img
                className="mx-auto mb-4 w-24 h-24 sm:w-36 sm:h-36 rounded-full"
                src={rami}
                alt="Rami Ghazzawi"
              />
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Rami Ghazzawi</a>
              </h3>
              <p>Programmer</p>
            </div>
            <div className="text-center">
              <img
                className="mx-auto mb-4 w-24 h-24 sm:w-36 sm:h-36 rounded-full"
                src={forat}
                alt="Forat"
              />
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Forat</a>
              </h3>
              <p>Programmer</p>
            </div>
            <div className="text-center">
              <img
                className="mx-auto mb-4 w-24 h-24 sm:w-36 sm:h-36 rounded-full"
                src={duaa}
                alt="Dua'a Khamis"
              />
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Dua'a Khamis</a>
              </h3>
              <p>Programmer</p>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default OurStory;
