import React from "react";
import { ImSpinner3 } from "react-icons/im";

function Submit({ value, busy }) {
  return (
    <>
      <button
        type="submit"
        className="w-full rounded dark:bg-white bg-primary dark:text-secondary text-white hover:bg-opacity-90 
        transition font-semibold text-lg cursor-pointer p-1 h-10 flex items-center justify-center"
      >
        {busy ? <ImSpinner3 className="animate-spin" /> : value}
      </button>
    </>
  );
}

export default Submit;
