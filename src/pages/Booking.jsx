

// import React from "react";
// import { Check, Download } from "lucide-react";
// import { jsPDF } from "jspdf";
// import "jspdf-autotable";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// const BookingConfirmed = () => {
//   const orderDetails = JSON.parse(sessionStorage.getItem("orderDetails")) || {};

//   const paymentMethod = sessionStorage.getItem("paymentMethod") || "N/A";
//   const cardInfo = JSON.parse(sessionStorage.getItem("cardInfo")) || {};
//   const couponCode = sessionStorage.getItem("couponCode") || "N/A";
//   const currentDate = new Date();
//   const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;


//   const handleDownloadTicket = () => {
//     const doc = new jsPDF();

//     // Title
//     doc.setFontSize(22);
//     doc.setFont("Helvetica", "bold");
//     doc.text("Reservation Confirmation", 14, 20);

//     // Subtitle
//     doc.setFontSize(16);
//     doc.setFont("Helvetica", "normal");

//     doc.text(
//       "Thank you for your purchase. Your order has been confirmed.",
//       14,
//       30
//     );

//     // Reservation details
//     doc.autoTable({
//       startY: 40,
//       head: [["Field", "Value"]],
//       body: [

//         ["Name", cardInfo.cardName || "N/A"], // Assuming cardName is the name, adjust as needed
//         ["Booking Date", formattedDate],
//         ["Total Price", `$${orderDetails.total?.toFixed(2) || "0.00"}`],
//         ["Payment Method", paymentMethod],
//         ["Coupon Code", couponCode],

//       ],
//       theme: "grid",
//       headStyles: { fillColor: [0, 100, 255] },
//       bodyStyles: { fillColor: [255, 255, 255] },
//       margin: { top: 50 },
//     });

//     // Footer
//     doc.setFontSize(10);

//     doc.text("This is an automatically generated document. Please keep it for your records.", 14, doc.internal.pageSize.height - 20);


//     // Save the PDF
//     doc.save("booking_confirmation.pdf");
//   };

//   return (
//     <>
//     <NavBar/>
//     <div className="container mx-auto p-4 my-20">
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//         <div className="p-8">
//           <div className="flex items-center justify-center mb-4">
//             <div className="bg-green-100 rounded-full p-2">
//               <Check className="h-8 w-8 text-green-500" />
//             </div>
//           </div>

//           <h1 className="text-2xl font-bold text-center mb-4">Booking Confirmed!</h1>
//           <p className="text-gray-600 text-center mb-6">Thank you for your purchase. Your order has been confirmed.</p>
//           <div className="border-t border-b border-gray-200 py-4 mb-6">
//             <div className="flex justify-between mb-2">
//               <span className="font-semibold">Order Number:</span>
//               <span>{cardInfo.cardName || "N/A"}</span> {/* Adjust as needed */}

//             </div>
//             <div className="flex justify-between mb-2">
//               <span className="font-semibold">Date:</span>
//               <span>{formattedDate}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="font-semibold">Total:</span>

//               <span>${orderDetails.total?.toFixed(2) || "0.00"}</span>

//             </div>
//           </div>
//           <button
//             onClick={handleDownloadTicket}
//             className="w-full bg-red1 hover:bg-red2 text-white px-4 py-2 rounded flex items-center justify-center"
//           >
//             <Download className="mr-2" />
//             Download Ticket (PDF)
//           </button>
//         </div>
//       </div>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default BookingConfirmed;


import React from "react";
import { Check, Download } from "lucide-react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const BookingConfirmed = () => {
  const orderDetails = JSON.parse(sessionStorage.getItem("orderDetails")) || {};

  const paymentMethod = sessionStorage.getItem("paymentMethod") || "N/A";
  const cardInfo = JSON.parse(sessionStorage.getItem("cardInfo")) || {};
  const couponCode = sessionStorage.getItem("couponCode") || "N/A";
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  const handleDownloadTicket = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(22);
    doc.setFont("Helvetica", "bold");
    doc.text("Reservation Confirmation", 14, 20);

    // Subtitle
    doc.setFontSize(16);
    doc.setFont("Helvetica", "normal");

    doc.text(
      "Thank you for your purchase. Your order has been confirmed.",
      14,
      30
    );

    // Reservation details
    doc.autoTable({
      startY: 40,
      head: [["Field", "Value"]],
      body: [
        // ["Name", cardInfo.cardName || "N/A"],
        ["Booking Date", formattedDate],
        ["Total Price", `${orderDetails.total?.toFixed(2) || "0.00"}JOD`],
        ["Payment Method", paymentMethod],
        ["Coupon Code", couponCode],
      ],
      theme: "grid",
      headStyles: { fillColor: [0, 100, 255] },
      bodyStyles: { fillColor: [255, 255, 255] },
      margin: { top: 50 },
    });

    // Footer
    doc.setFontSize(10);

    doc.text(
      "This is an automatically generated document. Please keep it for your records.",
      14,
      doc.internal.pageSize.height - 20
    );

    // Save the PDF
    doc.save("booking_confirmation.pdf");
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4 my-20">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 rounded-full p-2">
                <Check className="h-8 w-8 text-green-500" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-center mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-gray-600 text-center mb-6">
              Thank you for your purchase. Your order has been confirmed.
            </p>
            <div className="border-t border-b border-gray-200 py-4 mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">payment Method :</span>
                <span>
                  {sessionStorage.getItem("paymentMethod") || "N/A"}
                </span>{" "}
                {/* Adjust as needed */}
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Date:</span>
                <span>{formattedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Total:</span>

                <span>{orderDetails.total?.toFixed(2) || "0.00"}JOD</span>
              </div>
            </div>
            <button
              onClick={handleDownloadTicket}
              className="w-full bg-red1 text-white px-4 py-2 rounded flex items-center justify-center"
            >
              <Download className="mr-2" />
              Download Ticket (PDF)
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingConfirmed;