import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function App() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Two Column Form</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
        }}
        onSubmit={(values, actions) => {
          // Handle form submission
          console.log(values);
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First column inputs */}
            <div>
              <label
                htmlFor="input1"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Input 1
              </label>
              <Field
                type="text"
                name="input1"
                placeholder="Input 1"
                className={`block w-full px-4 py-2 border rounded-md `}
              />
              <ErrorMessage
                name="input1"
                component="div"
                className="text-red-500 text-sm"
              />
              {/* More fields */}
            </div>

            {/* Second column inputs */}
            <div>
              <label
                htmlFor="input2"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Input 2
              </label>
              <Field
                type="text"
                name="input2"
                placeholder="Input 2"
                className={`block w-full px-4 py-2 border rounded-md`}
              />
              <ErrorMessage
                name="input2"
                component="div"
                className="text-red-500 text-sm"
              />
              {/* More fields */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
