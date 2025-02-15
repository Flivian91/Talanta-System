import React from "react";

function Overlay({ onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
    ></div>
  );
}

export default Overlay;
