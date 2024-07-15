import React, { useState } from "react";
import Image from "next/image";
import IndialImg from "../assets/ind2.png";
import { Formik } from "formik";
import loginperson from "../assets/image.png";
import { FaAngleDown, FaSpinner } from "react-icons/fa"; // Import loading spinner
import { useRouter } from "next/router";
import { useFormData } from "../Context/FormContext";

const CreateAcc03 = () => {
  const router = useRouter();
  const { formData, updateFormData } = useFormData();
  const [isLoading, setIsLoading] = useState(false); // State for loading

  const handleSubmit = async (values) => {
    setIsLoading(true); // Start loading
    updateFormData(values);
    const completeData = { ...formData, ...values };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completeData),
      });

      if (response.ok) {
        router.push("/accCreatedsucc");
        setTimeout(() => {
          router.push("/HeroPageLoginsucc");
        }, 2000);
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handlePage2Click = () => {
    router.push("/personalDetails");
  };

  return (
    <div className="flex h-screen overflow-hidden -mb-6">
      <div className="w-1/2 bg-[#151280] relative flex items-center justify-center">
        <div className="absolute top-0 text-white mt-20 ml-8 mr-8">
          <h1 className="text-purple-400 font-inter italic font-bold text-3xl mb-4 w-[500px]">
            “For the Indians by the Indians”
          </h1>
          <p className="text-white font-inter text-[22px] text-base font-medium w-[500px]">
            Find all the details about government schemes, scholarships, and job
            openings for all states in one place.
          </p>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            className="z-10 image-opacity transform -scale-x-100"
            src={loginperson}
            alt="Login Person Image"
            width={400}
            height={200}
          />
        </div>
        <div className="absolute bottom-8">
          <Image
            className="z-0 image-opacity opacity-20"
            src={IndialImg}
            alt="India Image"
            width={600}
            height={200}
          />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Formik
          initialValues={{
            qualification: formData.qualification || "",
            occupation: formData.occupation || "",
            income: formData.income || "",
          }}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <form
              className="w-full h-full ml-20 mr-24 relative mt-60"
              onSubmit={formik.handleSubmit}
            >
              <h1 className="text-2xl font-bold">
                Tell us a little about yourself
              </h1>
              <p>Knowing about you will help us find the right schemes for you.</p>
              <div className="mt-12">
                <div className="flex mb-4">
                  <div className="w-1/2 mr-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="qualification"
                    >
                      Highest education qualification
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                        id="qualification"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.qualification}
                      >
                        <option value="">Education qualification</option>
                        <option value="option01">option01</option>
                        <option value="option02">option02</option>
                        <option value="option03">option03</option>
                        <option value="option04">option04</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <FaAngleDown />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="occupation"
                    >
                      Occupation
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                        id="occupation"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.occupation}
                      >
                        <option value="">Select your occupation</option>
                        <option value="occupation01">occupation01</option>
                        <option value="occupation02">occupation02</option>
                        <option value="occupation03">occupation03</option>
                        <option value="occupation04">occupation04</option>
                        <option value="occupation05">occupation05</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <FaAngleDown />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/2 mr-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="income"
                    >
                      Annual income
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                        id="income"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.income}
                      >
                        <option value="">Select your income range</option>
                        <option value="income01">Income01</option>
                        <option value="income02">Income02</option>
                        <option value="income03">Income03</option>
                        <option value="income04">Income04</option>
                        <option value="income05">Income05</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <FaAngleDown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[200px]">
                <span className="mr-2 mr-[250px]">3/3</span>
                <button
                  className="pr-8 text-[#3431BB]"
                  onClick={handlePage2Click}
                  type="button"
                >
                  Previous
                </button>
                <button
                  className="bg-[#3431BB] hover:bg text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={formik.isSubmitting || isLoading}
                >
                  {isLoading ? (
                    <FaSpinner className="animate-spin h-5 w-5 mr-3 inline" />
                  ) : (
                    "Next"
                  )}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateAcc03;
