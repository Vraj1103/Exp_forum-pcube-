import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    description: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  return (
    <div>
    <h5 className="text-blue p-6 w-[90%] ml-[10%] text-4xl ">Experience Sharing Forum</h5>


    <form onSubmit={handleSubmit} className="bg-grey p-6 rounded-3xl w-[80%] m-auto ">
        <div className="flex justify-between max-[1010px]:flex-col ">
      <div className="mb-4">
        <label
          className=" text-blue font-medium mb-2 text-xl "
          htmlFor="firstName"
        >
          First Name
        </label>
        <input
          className="bg-white w-full min-[1010px]:w-[110%] appearance-none border-2 border-gray-200 rounded-lg  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          className=" text-blue font-medium mb-2 text-xl"
          htmlFor="lastName"
        >
          Last Name
        </label>
        <input
          className="bg-white appearance-none border-2 border-gray-200 rounded-lg w-full mr-16 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange"
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      </div>


      <div className="mb-4">
        <label
          className=" text-blue font-medium mb-2 text-xl"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="bg-white appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange h-32"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>


        <div className="flex">
    <button
        className=" bg-orange justify-end hover:bg-white text-xl text-white w-28 min-[750px]:w-[20%] hover:text-orange font-medium py-2 px-4 rounded-xl h-10 min-[1010px]:h-14 focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
      </div>
    </form>
    </div>
  );
}

export default Form;
