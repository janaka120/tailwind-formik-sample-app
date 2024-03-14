import React, { useRef } from "react";
import InputForm from "./InputForm";
import SubmitButon from "./SubmitButton";

export default function App() {
  const formRef = useRef(null);

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };
  return (
    <div className="max-w-4xl mx-auto">
      <InputForm ref={formRef}/>
      <SubmitButon handleSubmit={handleSubmit} />
    </div>
  );
}
