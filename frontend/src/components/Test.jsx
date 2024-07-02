import React, { useState } from "react";

const Test = () => {
  const [bill, setBill] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, ""); // Remove any non-numeric characters
    setBill(value);
  };

  return (
    <div className="relative w-full">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        $
      </span>
      <input
        type="text"
        value={bill}
        onChange={handleInputChange}
        className="w-full pl-7 pr-3 py-1 rounded-lg bg-gray-100 outline-none border-none text-right"
        placeholder="0"
      />
    </div>
  );
};

export default Test;
