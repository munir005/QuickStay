import React, { useEffect } from "react";
import { assets } from "../../assets/assets";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-500 text-white",
  };

  return (
    <div
      className={`w-80 px-5 py-4 rounded-lg shadow-lg flex items-center justify-between ${styles[type]}`}
    >
      <p>{message}</p>

      <button
        onClick={onClose}
        className="ml-4 text-lg font-bold hover:opacity-70"
      >
        {assets.closeIcon}
      </button>
    </div>
  );
};

export default Toast;