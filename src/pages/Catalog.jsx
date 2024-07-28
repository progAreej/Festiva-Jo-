import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import getData from '../hooks/getData';
import './Catalog.css' ;
import '../pages/Details'
import fla from '../assets/img/fla.svg';
import Footer from "../components/Footer"
import NavBar from '../components/NavBar';


function Catalog() {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedCategory, setselectedCategory] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [itemsPerPage] = useState(8);
  const [events] = getData("https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/events.json");

  useEffect(() => {
    const filtered = events.filter((event) =>
      (event.title?.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "All" || event.category?.toLowerCase() === selectedCategory.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [events, searchTerm, selectedCity, selectedCategory]);



  const icons = {
    All:(
<svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>

</svg>
    ),
    Nature: (
      <svg width="79px" height="79px" viewBox="0 -6.11 63.999 63.999" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000">

      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
      
      <g id="SVGRepo_iconCarrier"> <g id="Group_41" data-name="Group 41" transform="translate(-621.981 -741.117)"> <g id="Group_39" data-name="Group 39"> <path id="Path_19" data-name="Path 19" d="M681.869,792.887H624.11a2.131,2.131,0,0,1-1.883-3.128l15.641-29.62a2.13,2.13,0,0,1,3.51-.382l9.287,10.975,11.891-17.688a2.132,2.132,0,0,1,3.691.266l17.544,36.524a2.132,2.132,0,0,1-1.922,3.053Zm-56.318-3h54.937L664.2,755.977l-12.152,18.076a1.5,1.5,0,0,1-2.39.132l-9.738-11.508Z" fill="#0c2c67"/> </g> <g id="Group_40" data-name="Group 40"> <path id="Path_20" data-name="Path 20" d="M676.736,759.607a9.241,9.241,0,1,1,9.244-9.245A9.255,9.255,0,0,1,676.736,759.607Zm0-15.49a6.253,6.253,0,1,0,4.413,1.832A6.252,6.252,0,0,0,676.736,744.117Z" fill="#0c2c67"/> </g> </g> </g>
      
      </svg>
    ),
    Film: (
      <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="77px" height="77px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g> <circle fill="#231F20" cx="20" cy="12" r="1"/> <path fill="#231F20" d="M63.585,29.188c-0.262-0.188-0.598-0.241-0.901-0.137L52,32.612V26c0-2.211-1.789-4-4-4h-4.372 C46.864,19.852,49,16.177,49,12c0-6.629-5.374-12-12-12c-4.923,0-9.149,2.968-11,7.211C24.149,2.968,19.923,0,15,0 C8.374,0,3,5.371,3,12c0,4.177,2.136,7.852,5.372,10H4c-2.211,0-4,1.789-4,4v34c0,2.211,1.789,4,4,4h44c2.211,0,4-1.789,4-4v-6.613 l10.684,3.562C62.787,56.983,62.894,57,63,57c0.207,0,0.412-0.064,0.585-0.188C63.846,56.623,64,56.321,64,56V30 C64,29.679,63.846,29.377,63.585,29.188z M37,49c0,0.552-0.447,1-1,1H16c-0.553,0-1-0.448-1-1V37c0-0.552,0.447-1,1-1h20 c0.553,0,1,0.448,1,1V49z M12,17c0-1.656,1.344-3,3-3s3,1.344,3,3s-1.344,3-3,3S12,18.656,12,17z M34,17c0-1.656,1.344-3,3-3 s3,1.344,3,3s-1.344,3-3,3S34,18.656,34,17z M45,12c0,1.656-1.344,3-3,3s-3-1.344-3-3s1.344-3,3-3S45,10.344,45,12z M37,4 c1.656,0,3,1.344,3,3s-1.344,3-3,3s-3-1.344-3-3S35.344,4,37,4z M32,9c1.656,0,3,1.344,3,3s-1.344,3-3,3s-3-1.344-3-3 S30.344,9,32,9z M26,16.789c0.929,2.131,2.456,3.938,4.372,5.211h-8.744C23.544,20.728,25.071,18.92,26,16.789z M23,12 c0,1.656-1.344,3-3,3s-3-1.344-3-3s1.344-3,3-3S23,10.344,23,12z M15,4c1.656,0,3,1.344,3,3s-1.344,3-3,3s-3-1.344-3-3 S13.344,4,15,4z M7,12c0-1.656,1.344-3,3-3s3,1.344,3,3s-1.344,3-3,3S7,13.656,7,12z M58,53.279l-6-2V34.72l6-1.999V53.279z M62,54.612l-2-0.667V32.055l2-0.667V54.612z"/> <circle fill="#231F20" cx="15" cy="17" r="1"/> <circle fill="#231F20" cx="10" cy="12" r="1"/> <circle fill="#231F20" cx="15" cy="7" r="1"/> <circle fill="#231F20" cx="37" cy="17" r="1"/> <circle fill="#231F20" cx="37" cy="7" r="1"/> <circle fill="#231F20" cx="32" cy="12" r="1"/> <circle fill="#231F20" cx="42" cy="12" r="1"/> <rect x="17" y="38" fill="#231F20" width="18" height="10"/> </g> </g>

</svg>
    ),
   
    Art: (
      <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70px" height="70px" viewBox="0 0 367.043 367.043" xml:space="preserve">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g> <g> <path d="M344.041,105.519h-57.267l-83.372-83.372c0.076-0.706,0.119-1.421,0.119-2.147c0-11.045-8.954-20-20-20s-20,8.955-20,20 c0,0.726,0.043,1.441,0.119,2.147l-83.372,83.372H23.001c-5.236,0-9.48,4.246-9.48,9.48v242.563c0,5.236,4.244,9.48,9.48,9.48 h321.04c5.236,0,9.48-4.244,9.48-9.48V115C353.521,109.765,349.277,105.519,344.041,105.519z M175.674,38.398 c2.41,1.029,5.061,1.602,7.847,1.602s5.438-0.572,7.848-1.602l67.12,67.121H108.554L175.674,38.398z M314.654,316.662 c0,5.236-4.244,9.48-9.479,9.48H61.869c-5.237,0-9.48-4.244-9.48-9.48v-160.76c0-5.236,4.244-9.48,9.48-9.48h243.306 c5.236,0,9.479,4.244,9.479,9.48V316.662L314.654,316.662z"/> <path d="M243.716,179.767c-1.009,0.859-2.004,1.724-2.996,2.593c0,0.001-0.001,0.001-0.001,0.001 c-10.124,8.739-20.562,17.448-31.581,25.497c-1.918-3.426-6.56-5.084-10.88-2.172c-0.129,0.088-2.102,1.432-2.775,1.836 c-1.836,1.104-3.766,2.056-5.691,2.987c-0.187,0.091-0.377,0.175-0.565,0.263c3.487-3.744,6.978-7.488,10.466-11.234 c5.084-5.456-1.447-14.574-8.105-10.504c-5.34,3.265-10.849,6.271-16.41,9.145c-8.272,4.27-18.732,9.704-27.478,10.454 c-8.527,0.729-8.599,14.112,0,13.376c5.713-0.49,11.268-2.07,16.659-4.15c-1.48,1.59-2.963,3.181-4.445,4.771 c-3.688,3.959-1.234,10.771,3.639,11.459c-14.147,5.81-29.403,9.874-46.143,11.345c-4.423,0.387-7.695,4.291-7.307,8.715 c0.367,4.186,3.879,7.34,8.002,7.34c0.235,0,0.474-0.012,0.714-0.031c8.195-0.721,16.25-2.014,24.21-3.885 c-14.797,10.369-26.087,18.336-26.335,18.512c-3.466,2.445-4.435,7.164-2.215,10.777c2.22,3.617,6.867,4.885,10.615,2.9 l85.481-45.254c-7.37,9.123-14.497,18.564-18.94,25.967c-1.715,2.862-1.486,6.488,0.578,9.111 c2.062,2.623,5.531,3.697,8.718,2.702c3.101-0.97,6.559-2.495,10.087-4.296l-2.645,4.808c-1.469,2.67-1.302,5.94,0.432,8.449 c1.515,2.19,3.998,3.469,6.613,3.469c0.377,0,0.758-0.026,1.139-0.081c0.71-0.102,17.49-2.513,26.712-5.027 c4.285-1.168,6.812-5.59,5.642-9.875c-1.167-4.285-5.588-6.812-9.874-5.643c-2.379,0.648-5.43,1.305-8.571,1.911l9.693-17.618 c1.821-3.314,1.09-7.447-1.757-9.934c-2.728-2.383-6.694-2.637-9.696-0.672c11.101-13.312,21.417-24.637,21.604-24.84 c2.636-2.889,2.814-7.254,0.42-10.347c-2.396-3.092-6.666-4.012-10.121-2.185l-13.314,7.049c2.922-2.648,5.412-5.172,8.124-7.914 c3.979-4.029,8.487-8.594,15.852-15.038c0.984-0.849,1.962-1.696,2.932-2.536c3.346-2.898,3.72-7.959,0.833-11.318 C252.145,177.289,247.087,176.896,243.716,179.767z"/> </g> </g> </g>

</svg>
    ),
   
    Sports: (
      <svg width="90px" height="90px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">

      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
      
      <g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"/> <path d="M36 15C38.7614 15 41 12.7614 41 10C41 7.23858 38.7614 5 36 5C33.2386 5 31 7.23858 31 10C31 12.7614 33.2386 15 36 15Z" fill="#2F88FF" stroke="#000000" stroke-width="4"/> <path d="M12 16.7691L20.0031 13.998L31 19.2466L20.0031 27.4442L31 34.6834L24.0083 43.998" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/> <path d="M35.3198 21.6434L38.0015 23.1018L43.9998 17.4658" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16.849 31.5454L13.8793 35.4572L4.00391 40.9964" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/> </g>
      
      </svg>
    ),
    Culture: (
      <svg width="84px" height="84px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">

      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
      
      <g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M26.995 12.046h4.258l-15.457-9.152-15.049 9.152h3.857v15.994h-2.132v1.066h26.656v-1.066h-2.133v-15.994zM4.553 10.98l11.25-6.842 11.556 6.842h-22.807zM5.67 28.040v-15.994h3.199v15.994h-3.199zM9.935 28.040v-15.994h3.199v15.994h-3.199zM14.2 28.040v-15.994h3.199v15.994h-3.199zM18.465 28.040v-15.994h3.199v15.994h-3.199zM22.73 28.040v-15.994h3.199v15.994h-3.199z" fill="#000000"> </path> </g>
      
      </svg>
    ),
    Theater: (
      <svg width="111px" height="111px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000">

      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
      
      <g id="SVGRepo_iconCarrier">
      
      <path fill="#000000" d="M18 18v94.275c28.382-12.57 52.994-35.202 71.39-59.734-4.662-3.466-8.973-7.064-12.865-10.79C68.903 34.452 62.723 26.51 58.973 18zm61.754 0c2.378 3.508 5.41 7.103 9.22 10.75 10.73 10.274 26.505 20.414 44.88 29.117C170.602 75.274 217.8 87 256 87s85.398-11.726 122.146-29.133c18.375-8.703 34.15-18.843 44.88-29.117 3.81-3.647 6.842-7.242 9.22-10.75zm373.273 0c-3.75 8.51-9.93 16.452-17.552 23.75-3.892 3.726-8.203 7.324-12.864 10.79 18.396 24.533 43.008 47.166 71.39 59.735V18zm-82.554 16.734C354.78 52.937 308.428 65.326 256 65.33c-52.242-.023-98.44-12.343-114.236-30.463C168.982 45.655 211.206 51.987 256 52c44.953-.022 87.294-6.408 114.473-17.266zM104.785 62.78C83.37 91.92 53.765 118.415 18 131.788v174.035c2.116.805 4.112 1.178 6 1.178 8.312-.646 12.295-5.132 18.324-9.984 29.568-24.024 49.255-66.27 65.053-119.094 9.187-30.72 17.136-64.91 25.34-100.78-2.216-.986-4.41-1.986-6.57-3.01-7.512-3.557-14.67-7.346-21.362-11.35zm302.43 0c-6.693 4.006-13.85 7.795-21.36 11.353-2.162 1.023-4.356 2.023-6.572 3.008 8.204 35.872 16.153 70.062 25.34 100.782 15.798 52.825 35.485 95.07 65.053 119.094 5.414 4.648 11.22 9.89 18.324 9.984 1.888 0 3.884-.373 6-1.178V131.787c-35.764-13.373-65.37-39.87-86.785-69.006zM46.13 317.34C39.233 322.193 31.793 325 24 325c-2.025 0-4.026-.197-6-.564v123.2c6.273 2.01 14.098 3.364 22 3.364 12.41 0 24.637-3.336 30.94-7.316-.04-43.556-.973-88.042-24.81-126.344zm419.74 0c-23.837 38.302-24.77 82.788-24.81 126.344 6.303 3.98 18.53 7.316 30.94 7.316 7.902 0 15.727-1.353 22-3.363v-123.2c-1.974.366-3.975.563-6 .563-7.792 0-15.232-2.807-22.13-7.66zM88.39 409c.6 13.277.61 26.37.61 39v3.73l-2.637 2.633C75.18 465.545 57.5 469 40 469c-7.475 0-14.98-.636-22-2.232V487h476v-20.232c-7.02 1.596-14.525 2.232-22 2.232-17.5 0-35.18-3.455-46.363-14.637L423 451.73V448c0-12.63.01-25.723.61-39z"/>
      
      </g>
      
      </svg>
    ),
    Food:(
      <svg fill="#000000" width="111px" height="111px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="M16.84,11.63A3,3,0,0,0,19,10.75l2.83-2.83a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L17.55,9.33a1,1,0,0,1-1.42,0h0L19.67,5.8a1,1,0,1,0-1.42-1.42L14.72,7.92a1,1,0,0,1,0-1.41l2.83-2.83a1,1,0,1,0-1.42-1.42L13.3,5.09a3,3,0,0,0,0,4.24h0L12,10.62,3.73,2.32l-.1-.06a.71.71,0,0,0-.17-.11l-.18-.07L3.16,2H3.09l-.2,0a.57.57,0,0,0-.18,0,.7.7,0,0,0-.17.09l-.16.1-.07,0-.06.1a1,1,0,0,0-.11.17,1.07,1.07,0,0,0-.07.19s0,.07,0,.11a11,11,0,0,0,3.11,9.34l2.64,2.63-5.41,5.4a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29L9.9,15.57h0l2.83-2.83h0l2-2A3,3,0,0,0,16.84,11.63ZM9.19,13.45,6.56,10.81A9.06,9.06,0,0,1,4,5.4L10.61,12Zm6.24.57A1,1,0,0,0,14,15.44l6.3,6.3A1,1,0,0,0,21,22a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"/>

</g>

</svg>
    )
  };



  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  console.log(events)
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <NavBar />
    <div className="p-4 md:p-6 lg:p-8">
      <div className='fla'>
        <img className="fla mb-40 mt-2 " src={fla}/></div>
      <div className="text-center mb-8 md:mb-10">
      <h1 className="textCol text-[#704638] text-4xl mt-4 mb-3"> Best Tickets for Best Events</h1>
        <p className="font-bold text-lg md:text-xl">
          "Discover Unforgettable Experiences in Jordan – Where Every Event is a Journey into History and Culture!"
        </p>
        <p className="jor text-md md:text-lg">So, welcome to Jordan</p>
      </div>
      <div className="mb-6 md:mb-8 lg:mb-10 px-4">
  <form className="relative max-w-full sm:max-w-md mx-auto">
    <input
      type="text"
      placeholder="Search events..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full border p-2 pl-10 rounded-lg"
    />
    <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
  </form>
</div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["All", "Nature", "Film", "Food", "Art", "Sports", "Culture", "Theater"].map(category => (
          <div key={category} className="flex flex-col items-center">
            <button
              onClick={() => setselectedCategory(category)}
              className="w-16 h-16  rounded-full  flex items-center justify-center  hover:bg-red2"
            >
              {icons[category] || (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
               
                >
             
                </svg>
              )}
            </button>
            <span className="mt-2 text-sm md:text-base">{category}</span>
          </div>
        ))}
      </div>
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-4 gap-y-8 max-w-[80rem] mx-auto px-4">
  {currentItems.map(event => (
    <div
      key={event.event_id}
      className="bg-white w-full sm:w-[300px] p-3 rounded-lg overflow-hidden shadow-md mx-auto transition-transform transform hover:scale-105 hover:shadow-lg flex flex-col"
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-40 object-cover transition-opacity duration-500 ease-in-out"
      />
      <div className="mt-8 flex flex-col flex-grow">
        <div className='flex items-center justify-between mb-2 text-gray-600'>
          <p>{event.city}</p>
          <p>{event.date}</p>
        </div>
        <h2 className="text-xl font-semibold mb-2 text-page1">{event.title}</h2>
        <p className="text-gray-800 flex-grow">{event.description}</p>
        <div className="mt-auto">
          <Link to={`/details/${event.key}`}>
            <button className="w-full bg-red1 hover:bg-red2 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red1">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>


      <Pagination totalPages={totalPages} paginate={paginate} />
     

    </div>
    <Footer/>
    </>
  );
  
}
function Pagination({ totalPages, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex justify-center mt-4">
        {pageNumbers.map(number => (
          <li key={number} className="page-item mx-1">
            <a onClick={() => paginate(number)} href="#!" className="page-link bg-gray-200 px-3 py-1 rounded">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>

  );
}
export default Catalog;