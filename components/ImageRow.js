import React from "react";

function ImageRow({ variant, children }) {
  return (
    <div className={`${variant && variant} bg-cover bg-white widest`}>
      <div className="px-4 py-6 md:py-0 md:px-24 lg:px-8">{children}</div>
    </div>
  );
}

export default ImageRow;
