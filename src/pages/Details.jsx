import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"; 
import { useParams } from 'react-router-dom';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import tick1 from "../assets/img/tick1.png"
import tick2 from "../assets/img/tick2.png"

const Details = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams(); // Get eventId from URL
  const [tichOrg, setTickOrg] = useState(0); 
  const [tichVip, setTickVip] = useState(0); 
  const [tichOrgCount, setTickOrgCount] = useState(0); 
  const [tichVipCount, setTickVipCount] = useState(0); 
  const [totalPrice, setTotalPrice] = useState(0); 
  const navigate = useNavigate();
 
  const id = eventId.split("_")[2];
  const ticketOrgId = id * 2 - 1;
  const ticketVipId = id * 2;

  const fetchEventDetails = async () => {
    try {
      const response = await axios.get(`https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/events/${eventId}.json`);
      setEvent(response.data);
      setTickOrg(response.data.tickets[`ticket_id_${ticketOrgId}`].availability);
      setTickVip(response.data.tickets[`ticket_id_${ticketVipId}`].availability);
    } catch (error) {
      console.error("Error fetching event details:", error);
    }
  };

  useEffect(() => {
    fetchEventDetails();
  }, [eventId]);

  useEffect(() => {
    if (event) {
      const ticketOrgPrice = event.tickets[`ticket_id_${ticketOrgId}`].price || 0;
      const ticketVipPrice = event.tickets[`ticket_id_${ticketVipId}`].price || 0;
      const total = (ticketOrgPrice * tichOrgCount) + (ticketVipPrice * tichVipCount);
      setTotalPrice(total);
    }
  }, [tichOrgCount, tichVipCount, event]);

  const plusOrg = () => {
    if (tichOrgCount < tichOrg) {
      setTickOrgCount(tichOrgCount + 1);
    } else {
      alert("No more tickets are available");
    }
  };

  const minusOrg = () => {
    if (tichOrgCount > 0) {
      setTickOrgCount(tichOrgCount - 1);
    } else {
      alert("No Tickets");
    }
  };

  const plusVip = () => {
    if (tichVipCount < tichVip) {
      setTickVipCount(tichVipCount + 1);
    } else {
      alert("No more tickets are available");
    }
  };

  const minusVip = () => {
    if (tichVipCount > 0) {
      setTickVipCount(tichVipCount - 1);
    } else {
      alert("No Tickets");
    }
  };

 
  const handlePurchase = () => {
    const totalPrice = (event.tickets[`ticket_id_${ticketOrgId}`].price * tichOrgCount) + (event.tickets[`ticket_id_${ticketVipId}`].price * tichVipCount);
    setTotalPrice(totalPrice);
    const user = JSON.parse(sessionStorage.getItem('customerId'))
    sessionStorage.setItem('totalPrice', totalPrice);
    const tPrice = JSON.parse(sessionStorage.getItem('totalPrice'))
    sessionStorage.setItem('orgCount', tichOrgCount);
    sessionStorage.setItem('vipCount', tichVipCount);
    sessionStorage.setItem('orgExist', tichOrg);
    sessionStorage.setItem('vipExist', tichVip);
    if (user) {
      navigate(tPrice > 0 ? "/checkout" : `/Details/${eventId}`);
    } else {
      navigate("/SignUp");
    }
  }; 

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      {event && (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <img src={event.image} alt="Event" className="w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-3xl font-bold">{event.title}</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:space-x-6">
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-800">Category: <span className="font-normal">{event.category}</span></p>
                  <p className="text-lg font-semibold text-gray-800">Date: <span className="font-normal">{event.date}</span></p>
                  <p className="text-lg font-semibold text-gray-800">City: <span className="font-normal">{event.city}</span></p>
                  <p className="mt-4 text-gray-700">{event.description}</p>
                </div>
                <div className="flex-1">
                  <iframe
                    className="w-full h-64 rounded-lg shadow-md"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(event.city)}+(culture)&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                    title="Event Location"
                  >
                    <a href={`https://www.google.com/maps?q=${encodeURIComponent(event.city)}+(culture)`} className="text-blue-500 hover:underline">View on Google Maps</a>
                  </iframe>
                </div>
              </div>
              <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Purchase Tickets</h3>
                <div className="space-y-4">
                

{/* -- */}
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
  <div className="flex items-center space-x-36">
    <div className="w-full">
      <p className="text-2xl font-bold text-gray-800">General Tickets</p>
      <p className="text-lg text-gray-600">Price: {event.tickets[`ticket_id_${ticketOrgId}`].price} JD</p>
      <p className="text-lg text-gray-600">Available: {tichOrg}</p>
    </div>
    <img src={tick1} alt="VIP Ticket" className="w-full h-32 object-cover rounded-lg mr-4" />
  </div>
  <div className="flex items-center space-x-4">
    <button className="bg-red-500 text-white py-2 px-4 rounded-lg text-xl" onClick={plusOrg}>+</button>
    <span className="text-xl">{tichOrgCount}</span>
    <button className="bg-red-500 text-white py-2 px-4 rounded-lg text-xl" onClick={minusOrg}>-</button>
  </div>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
  <div className="flex items-center space-x-48">
    <div className="w-full">
      <p className="text-2xl font-bold text-gray-800">VIP Tickets</p>
      <p className="text-lg text-gray-600">Price: {event.tickets[`ticket_id_${ticketVipId}`].price} JD</p>
      <p className="text-lg text-gray-600">Available: {tichVip}</p>
    </div>
    <img src={tick2} alt="VIP Ticket" className="w-full h-32 object-cover rounded-lg mr-4" />
  </div>
  <div className="flex items-center space-x-4">
    <button className="bg-red-500 text-white py-2 px-4 rounded-lg text-xl" onClick={plusVip}>+</button>
    <span className="text-xl">{tichVipCount}</span>
    <button className="bg-red-500 text-white py-2 px-4 rounded-lg text-xl" onClick={minusVip}>-</button>
  </div>
</div>
{/*  */}
{/* <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
  <div className="flex items-center space-x-8">
    <img src={tick2} alt="VIP Ticket" className="w-40 h-40 object-cover rounded-lg mr-4" />
    <div className="w-full ">
      <p className="text-2xl font-bold text-gray-800">VIP Tickets</p>
      <p className="text-lg text-gray-600">Price: {event.tickets[`ticket_id_${ticketVipId}`].price} JD</p>
      <p className="text-lg text-gray-600">Available: {tichVip}</p>
    </div>
  </div>
  <div className="flex items-center space-x-4">
    <button className="bg-red-500 text-white py-2 px-4 rounded-lg text-xl" onClick={plusVip}>+</button>
    <span className="text-xl">{tichVipCount}</span>
    <button className="bg-red-500 text-white py-2 px-4 rounded-lg text-xl" onClick={minusVip}>-</button>
  </div>
</div> */}



                  {/* <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div>
                      <img src="" alt="" />
                      <p className="text-lg font-medium text-gray-800">VIP Tickets</p>
                      <p className="text-sm text-gray-600">Price: {event.tickets[`ticket_id_${ticketVipId}`].price} JD</p>
                      <p className="text-sm text-gray-600">Available: {tichVip}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="bg-red-500 text-white py-1 px-3 rounded-lg" onClick={plusVip}>+</button>
                      <span>{tichVipCount}</span>
                      <button className="bg-red-500 text-white py-1 px-3 rounded-lg" onClick={minusVip}>-</button>
                    </div>
                  </div> */}
                </div>
                <div className="mt-6 text-center">
                  <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none" onClick={handlePurchase}>
                    Proceed to Checkout
                  </button>
                  <p className="mt-4 text-lg font-semibold text-gray-800">Total Price: {totalPrice} JD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Details;
