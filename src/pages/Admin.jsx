import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  PlusCircle,
  Users,
  Package,
  Calendar,
  Search,
  Edit,
  Trash2,
  Reply,
} from "lucide-react";
import getData from "../hooks/getData";
import axios from "axios";
import deletePostData from "../hooks/deleteData";
import updatePostData from "../hooks/updateData";
import Switch from "../components/Switch";
import ImageUpload from "../components/imageUpload";

const mockEvents = [
  {
    id: 1,
    name: "Summer Music Festival",
    date: "2024-07-15",
    ticketsAvailable: 5000,
  },
  {
    id: 2,
    name: "Tech Conference 2024",
    date: "2024-09-22",
    ticketsAvailable: 2000,
  },
  {
    id: 3,
    name: "Food & Wine Expo",
    date: "2024-10-05",
    ticketsAvailable: 3000,
  },
];

const mockCustomers = [
  { id: 1, name: "John Doe", email: "john@example.com", totalPurchases: 3 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", totalPurchases: 5 },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", totalPurchases: 2 },
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [events] = getData(
    "https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );

  let Photography = events.filter(event => event.category === "Photography");
  let Nature = events.filter(event => event.category === "Nature");
  let food = events.filter(event => event.category === "Food");
  let sports = events.filter(event => event.category === "Sports");
  let wellness = events.filter(event => event.category === "Wellness");
  // let culture = events.filter(event => event.category === "tech");

  const salesData = [
    { name: "Photography", count: Photography.length },
    { name: "Nature", count: Nature.length },
    { name: "food", count: food.length },
    { name: "sports", count: sports.length },
    { name: "wellness", count: wellness.length },
  ];
  const [messages, setMessage] = getData(
    "https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/messages.json"
  );
  let [customers] = getData(
    "https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/users/customers.json"
  );
  let activeCustomers = customers.filter(customer => customer.active === true);
  let inactiveCustomers = customers.filter(
    customer => customer.active === false
  );
  const customerActivityData = [
    { name: "active", count: activeCustomers.length },
    { name: "inactive", count: inactiveCustomers.length },
  ];

  const [newEventName, setNewEventName] = useState("");
  const [id, setId] = useState("");

  const [newEventDate, setNewEventDate] = useState("");
  const [newEventdescription, setNewEventdescription] = useState("");
  const [newEventTickets, setNewEventTickets] = useState("");
  const [newImage, setNewImage] = useState("");
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [showUpdateEventForm, setshowUpdateEventForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddEvent = async e => {
    e.preventDefault();
    const newEvent = {
      id: events.length + 1,
      title: newEventName,
      date: newEventDate,
      description: newEventdescription,
      image: newImage,
      ticketsAvailable: parseInt(newEventTickets),
      isDeleted: false,
    };
    try {
      const response = await axios.post(
        "https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/events.json",
        newEvent
      );
      if (response.status === 200) {
        alert("Data saved successfully");
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
    console.log(newEvent.name);
    console.log(newEvent.ticketsAvailable);
  };

  const [data, postData] = updatePostData();
  const [updateData, updateEvent] = updatePostData();

  const showUpdateForm = id => {
    setshowUpdateEventForm(!showUpdateEventForm);
    setId(id);
    console.log(showUpdateEventForm);
  };

  const handleUpdate = (id, url, e) => {
    e.preventDefault();
    const upEvent = {
      id: id,
      title: newEventName,
      date: newEventDate,
      description: newEventdescription,
      ticketsAvailable: parseInt(newEventTickets),
      isDeleted: false,
      image: newImage,
    };
    const urlVar = `${url}/${id}.json`;

    updateEvent(urlVar, upEvent);
  };

  const activeToggle = (id, status) => {
    const url = `https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${id}.json`;

    if (status) {
      postData(url, { active: false });
    } else {
      postData(url, { active: true });
    }
  };

  const [deleteData, deleteDataFun] = deletePostData();

  const handleDeleteEvent = (id, url) => {
    const urlVar = `${url}/${id}.json`;
    deleteDataFun(urlVar);
  };

  const filteredCustomers = customers.filter(
    customer =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-4 items-center text-red1">
      <img src="./src/assets/img/Logo11.png" alt="" width="80px" />
      <h1 className="text-3xl font-bold mb-6">Event Management Dashboard</h1>
      </div>
      <br />
      {/* <img src="./src/assets/img/Logo11.png" alt="" />
      <h1 className="text-3xl font-bold mb-6">Event Management Dashboard</h1>
    */}
      
      <nav className="flex mb-6">
        <button
          onClick={() => setActiveTab("overview")}
          className={`mr-4 px-4 py-2 rounded ${
            activeTab === "overview"
              ? "bg-red1 hover:bg-red2 text-white "
              : "bg-gray-200"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("events")}
          className={`mr-4 px-4 py-2 rounded ${
            activeTab === "events"
              ? "bg-red1 hover:bg-red2 text-white"
              : "bg-gray-200"
          }`}
        >
          Event Management
        </button>
        <button
          onClick={() => setActiveTab("customers")}
          className={`mr-4 px-4 py-2 rounded ${
            activeTab === "customers"
              ? "bg-red1 hover:bg-red2 text-white"
              : "bg-gray-200"
          }`}
        >
          Users Management
        </button>
        <button
          onClick={() => setActiveTab("inventory")}
          className={`px-4 py-2 rounded ${
            activeTab === "inventory"
              ? "bg-red1 hover:bg-red2 text-white"
              : "bg-gray-200"
          }`}
        >
          Messages
        </button>
      </nav>

      {/* Content */}
      <div className="bg-white shadow rounded-lg p-6">
        {activeTab === "overview" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red2 p-4 rounded">
                <h3 className="font-semibold">Total Sales</h3>
                <p className="text-2xl">$250</p>
              </div>
              <div className="bg-page1 p-4 rounded text-white">
                <h3 className="font-semibold">Active users</h3>
                <p className="text-2xl">{activeCustomers.length}</p>
              </div>
              <div className="bg-red1 p-4 rounded">
                <h3 className="font-semibold">Upcoming Events</h3>
                <p className="text-2xl">3</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Categories</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#ff8e7a" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Users Activity</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={customerActivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#ff8e7a" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === "events" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Event Management</h2>
            <button
              onClick={() => setShowAddEventForm(!showAddEventForm)}
              className="bg-red1 text-white px-4 py-2 rounded flex items-center mb-4"
            >
              {showAddEventForm ? "Cancel" : "Add New Event"}
            </button>

            {showAddEventForm && (
              <form onSubmit={handleAddEvent} className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Event Name"
                    value={newEventName}
                    onChange={e => setNewEventName(e.target.value)}
                    className="border p-2 rounded"
                    required
                  />
                  <input
                    type="date"
                    value={newEventDate}
                    onChange={e => setNewEventDate(e.target.value)}
                    className="border p-2 rounded"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Available Tickets"
                    onChange={e => setNewEventTickets(e.target.value)}
                    className="border p-2 rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="description"
                    value={newEventdescription}
                    onChange={e => setNewEventdescription(e.target.value)}
                    className="border p-2 rounded"
                    required
                  />

                  <ImageUpload onUpload={setNewImage} />
                </div>
                <button
                  type="submit"
                  className="mt-2 bg-red1 text-white px-4 py-2 rounded"
                >
                  Add Event
                </button>
              </form>
            )}

            {showUpdateEventForm && (
              <form
                onSubmit={e =>
                  handleUpdate(
                    id,
                    "https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/events",
                    e
                  )
                }
                className="mb-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Event Name"
                    value={newEventName}
                    onChange={e => setNewEventName(e.target.value)}
                    className="border p-2 rounded"
                    required
                  />
                  <input
                    type="date"
                    value={newEventDate}
                    onChange={e => setNewEventDate(e.target.value)}
                    className="border p-2 rounded"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Available Tickets"
                    value={newEventTickets}
                    onChange={e => setNewEventTickets(e.target.value)}
                    className="border p-2 rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="description"
                    value={newEventdescription}
                    onChange={e => setNewEventdescription(e.target.value)}
                    className="border p-2 rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="image url"
                    value={newImage}
                    onChange={e => setNewImage(e.target.value)}
                    className="border p-2 rounded"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Update Event
                </button>
              </form>
            )}

            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left  w-20">Event Name</th>
                  <th className="p-2 text-left  w-20">Date</th>
                  <th className=" p-2 text-left w-20">description</th>
                  <th className="p-2 text-left  w-20">Event image</th>
                  <th className="p-2 text-left  w-20">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map(event => (
                  <tr key={event.id} className="border-b even:bg-page">
                    <td className="p-2">{event.title}</td>
                    <td className="p-2">{event.date}</td>
                    <td className="p-2">{event.description}</td>

                    <td>
                      <img
                        src={event.image}
                        style={{ width: "100px", height: "auto" }}
                      />
                    </td>
                    <td className="p-2">
                      <button className="mr-2 text-blue-500">
                        <Edit
                          size={18}
                          onClick={() => showUpdateForm(event.key)}
                        />
                      </button>
                      <button
                        onClick={() =>
                          handleDeleteEvent(
                            event.key,
                            `https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/events/`
                          )
                        }
                        className="text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "customers" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Users Management</h2>
            <div className="flex items-center mb-4">
              <Users className="mr-2" />
              <span>Total users: {customers.length}</span>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full border p-2 pl-10 rounded"
                />
                <Search
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Email</th>

                  <th className="p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer, index) => (
                  <tr key={customer.id} className="border-b even:bg-page">
                    <td className="p-2">{customer.name}</td>
                    <td className="p-2">{customer.email}</td>

                    <td className="p-2 grid grid-cols-[30px_40px_50px] gap-6">
                      <h1
                        className={`${
                          customer.active ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {customer.active ? "Active" : "Inactive"}
                      </h1>
                      <button className="mr-4 text-blue-500">
                        <Switch
                          id={index}
                          checked={customer.active}
                          onClick={() =>
                            activeToggle(customer.key, customer.active)
                          }
                        />
                      </button>
                      {/* <button className="text-red-500">
                        <Trash2
                          size={18}
                          onClick={() =>
                            handleDeleteEvent(
                              customer.key,
                              "https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/users/customers"
                            )
                          }
                        />
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "inventory" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Message</h2>
            <div className="flex items-center mb-4"></div>

            <table className="w-full mt-4 ">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Email</th>

                  <th className="p-2 text-left">Message</th>
                </tr>
              </thead>
              <tbody>
                {messages.map(message => (
                  <tr key={message.id} className="border-b even:bg-page ">
                    <td className="p-2">{message.name}</td>
                    <td className="p-2">{message.message}</td>
                    <td>{message.email}</td>
                    <td className="p-2">
                      <button className="bg-red1 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center">
                        <a
                          href={"mailto:" + message.email}
                          className="flex items-center"
                        >
                          Reply
                          <Reply className="ml-2" />
                        </a>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
