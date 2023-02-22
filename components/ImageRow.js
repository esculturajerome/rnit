import React from "react";

function ImageRow({ variant, children }) {
  return (
    <div className={`${variant && variant} bg-cover bg-white widest`}>
      <div className="py-6 md:py-0 inside">{children}</div>
    </div>
  );
}

export default ImageRow;
