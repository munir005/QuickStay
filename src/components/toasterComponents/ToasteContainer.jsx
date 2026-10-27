import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToast } from "../../redux-store/toasteSlice/toastSlice";

const ToastContainer = () => {
  const dispatch = useDispatch();

  const toasts = useSelector((state) => state.tost.toasts);

  return (
    <div className="fixed top-5 right-5 z-75 flex flex-col gap-3">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => dispatch(removeToast(toast.id))}
        />
      ))}
    </div>
  );
};

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const toastStyle = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-400 text-black",
    info: "bg-blue-500 text-white",
  };

  return (
    <div
      className={`w-80 px-5 py-4 rounded-lg shadow-lg flex justify-between items-center ${toastStyle[type]}`}
    >
      <p>{message}</p>

      <button
        onClick={onClose}
        className="text-xl font-bold hover:opacity-70"
      >
        ×
      </button>
    </div>
  );
};

export default ToastContainer;