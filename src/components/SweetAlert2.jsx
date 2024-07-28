// Import SweetAlert2
import Swal from 'sweetalert2';
import React from 'react';

function DiscountAlert() {
  const showDiscountAlert = () => {
    Swal.fire({
      title: 'Congratulations!',
      text: 'You get a 10% discount. Your code for DISCOUNT is: DISCOUNT10',
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: {
        title: 'text-lg font-bold',
        content: 'text-base',
        confirmButton: 'bg-blue-500 text-white hover:bg-blue-600'
      }
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={showDiscountAlert}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
      >
        Show Discount Alert
      </button>
    </div>
  );
}

export default DiscountAlert;
