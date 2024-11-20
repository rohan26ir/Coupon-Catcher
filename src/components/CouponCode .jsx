import React, { useState } from "react";

const CouponCode = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-md w-64">
      <div className="relative group cursor-pointer text-lg font-medium">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {code}
        </span>
        <span className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          XXXX
        </span>
      </div>
      <button
        className="ml-4 px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        onClick={handleCopy}
      >
        { isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default CouponCode;