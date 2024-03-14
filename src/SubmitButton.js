import { useFormikContext } from "formik";
import React, { useRef } from 'react';

const SubmitButon = (props) => {
    const handleClick = () => {
        if (props.handleSubmit) {
            props.handleSubmit();
        } else {
          console.error("Submit handler is not available");
        }
      };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
    >
      Submit
    </button>
  );
};

export default SubmitButon;
