import { useAuth } from "@/Context/AuthContext";
import { Formik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import * as Yup from "yup";
import { useFormData } from "../Context/FormContext";
import loginperson from "../assets/image.png";
import { useEffect } from "react";

const CreateAcc01 = () => {
  const router = useRouter();
  const { updateFormData } = useFormData();
  const { login } = useAuth();
  const [apiErrors, setApiErrors] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  useEffect (() =>{
    const token = localStorage.getItem("token");
    if (token){
      router.push("/homepage");
    }
  },[])

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getErrorMessage = (formikErrors, apiErrors) => {
    const formikErrorMessages = Object.values(formikErrors).filter(Boolean);
    const apiErrorMessages = Object.values(apiErrors).filter(Boolean);
    return [...formikErrorMessages, ...apiErrorMessages].join(" ");
  };

  const handleAfterLogin = async (values) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email: values.email,
        password: values.password,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(`http://65.0.103.91:80/api/login/`, requestOptions);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || `HTTP error! status: ${response.status}`);
      }

      console.log("Login successful. Token received:", result.access);

      if (result.access) {
        const user = { token: result.access, email: values.email };
        localStorage.setItem("token", result.access);
        login(result.access, user); // Save token and user information to the context
        router.push("/accCreatedsucc");
          setTimeout(() => {
            router.push("/HeroPage");
        }, 2000);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden -mb-6">
      <div className="w-1/2 bg-[#FEF6F0] relative flex items-center justify-center">
        <div className="absolute top-0 text-[#000] mt-20 ml-8 mr-8">
          <h1 className="text-purple-400 font-inter italic font-bold text-3xl mb-4 w-[500px]">
            “For the Indians by the Indians”
          </h1>
          <p className="text-[#000] font-inter text-[22px] text-base font-medium w-[500px] opacity-0.4">
            Find all the details about government schemes, scholarships, and job
            openings for all states in one place.
          </p>

          {/* bg div images */}
          <div className="absolute w-[446.08px] h-[446.08px] rotate-[-51.369deg] flex-shrink-0 opacity-5 bg-[#DF8317] ml-[530px] mt-[-150px] z-0"></div>

          <div className="absolute w-[446.08px] h-[446.08px] rotate-[-51.369deg] flex-shrink-0 rounded-[55px] bg-[rgba(223,131,23,0.2)] ml-[230px] mt-[300px] z-0"></div>

          <div className="absolute w-[446.08px] h-[446.08px] rotate-[-51.369deg] flex-shrink-0 opacity-5 bg-[#DF8317] rounded-[55px] ml-[-340px] mt-[500px] z-0"></div>

          {/* <div className="absolute w-[446.08px] h-[446.08px] rotate-[-51.369deg] flex-shrink-0 rounded-[55px] bg-[#DF8317]  ml-[-340px] mt-[500px] z-0"></div> */}




          <div class="absolute w-[266px] h-auto p-[10.8px] items-center rounded-[8.102px] border border-[#EEF] bg-[#FFF] shadow-[0px_0px_9.791px_rgba(5,2,160,0.08)] top-[305px] ml-[35px] ">
            <p class="self-stretch text-[#000] mb-[5px] font-inter text-[9.452px] font-semibold leading-normal">
              Opening for bank staff
            </p>
            <p class="self-stretch text-[#616161] font-inter text-[6.751px]  font-normal leading-normal underline">
              Welfare Department
            </p>
          </div>
        </div>

        <div className="absolute w-[326px] p-[10.802px] items-center gap-[8.102px] rounded-[8.102px] border border-[#EEF] bg-[#FFF] shadow-[0px_0px_9.791px_rgba(5,2,160,0.08)] top-[450px] mr-[295px] ">
          <div className="flex ">
            <p className=" text-[10.584px] mb-[10px] font-semibold mr-12">
              Adi Dravidar and Tribal Welfare Department
            </p>
            <CiBookmark/>
          </div>
          <p className="self-stretch text-[#616161] font-inter text-[8.274px] font-semibold leading-normal opacity-60 mb-[9.93px] line-clamp-2">
            <span className="font-bold">Description:</span> Free education up to
            12th Std. to all i.e. tuition fee will not be collected and the
            amount will be reimbursed by the government
          </p>
          <p className="self-stretch text-[#616161] font-inter text-[8.274px] font-normal leading-normal opacity-60 mb-[10px] line-clamp-2 underline">
            Welfare Department
          </p>

          <div className="flex mt-[-7px]">
            <div className="flex items-center justify-center pr-2 pl-2 py-[5px] ml-[-15px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-xs font-medium scale-[.6]">
              TamilNadu
            </div>

            <div className="flex items-center justify-center pr-2 pl-2 py-[5px] ml-[-20px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-xs font-medium scale-[.6]">
              Student
            </div>
            <div className="flex items-center justify-center pr-2 pl-2 py-[5px] ml-[-15px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-xs font-medium scale-[.6]">
              SC/ ST
            </div>
          </div>
        </div>

        <div class="absolute w-[266px] p-[7.919px] items-center rounded-[8.102px] border border-[#EEF] bg-[#FFF] shadow-[0px_0px_9.791px_rgba(5,2,160,0.08)] bottom-[175px] mr-[270px] scale-[.8]">
          <p class="self-stretch text-[#000] font-inter text-[8.929px] font-semibold leading-normal mb-[5.939px]">
            Scholarships for female student
          </p>
          <p className="self-stretch text-[#616161] font-inter text-[6.649px] font-semibold leading-normal opacity-60 line-clamp-2">
            <span className="font-bold">Description:</span> Free education upto
            12th Std. to all i.e. tution fee will not be collected and the
            amount will be reimbursed by government
          </p>
        </div>

        <div className="absolute bottom-0 right-4 ">
          <Image
            className="z-10 image-opacity transform -scale-x-100"
            src={loginperson}
            alt="Login Person Image"
            // width={360}
            height={477}
          />
        </div>
      </div>
      <div className="relative w-1/2 flex items-center justify-center z-80 bg-white">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setIsLoading(true); // Start loading
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
              email: values.email,
              password: values.password,
            });

            const requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: raw,
              redirect: "follow",
            };

            fetch(`http://65.0.103.91:80/api/register/`, requestOptions)
              .then((response) => response.json())
              .then((result) => {
                console.log("API Response:", result); // Log the entire result object for debugging
                if (result.user) {
                  setApiErrors({ email: "", password: "" });
                  updateFormData(values);
                  login(result.token, result.user); // Update authState
                  console.log(`auth token login succ auth token: ${result.token}`); // Log the auth token for debugging
                  handleAfterLogin(values); // Call handleAfterLogin with the form values
                } else {
                  console.error(result);
                  setApiErrors({
                    email: result.email ? result.email[0] : "",
                    password: result.password ? result.password[0] : "",
                  });
                  setTimeout(() => {
                    setApiErrors({ email: "", password: "" });
                  }, 15000);
                }
              })
              .catch((error) => {
                console.error(error);
              })
              .finally(() => {
                setSubmitting(false);
                setIsLoading(false); // Stop loading
              });
          }}
        >
          {(formik) => {
            let errorMessage = getErrorMessage(formik.errors, apiErrors);

            // Check for specific error messages and modify them
            if (errorMessage.includes("This password is too common.") && errorMessage.includes("This password is entirely numeric.")) {
              errorMessage = "This password is too common. This password is entirely numeric.";
            }

            return (
              <form
                className="w-full h-full ml-20 mr-24 relative mt-60"
                onSubmit={formik.handleSubmit}
              >
                <button type="button" className="flex gap-[8px] mb-[24px]" onClick={() => router.back()}>
                  <FaArrowLeftLong className="mt-1"/>
                  Back
                </button>
                <h1 className="text-2xl font-bold mb-[32px]">Create an Account</h1>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Id
                  </label>
                  <input
                    className="shadow appearance-none border rounded rounded-[8px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                </div>
                <div className="relative mt-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded rounded-[8px] w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer mt-4" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>

                {errorMessage && (
                  <div className="mb-4 mt-4">
                    <div className="bg-[#FFE6E6] text-[#DC0000] py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                      {errorMessage}
                    </div>
                  </div>
                )}

                <div>
                  <button
                    className="bg-[#3431BB] hover:bg-purple-700 text-white font-bold py-3 px-4 rounded  rounded-[8px] focus:outline-none focus:shadow-outline w-full mt-[35px]"
                    type="submit"
                    disabled={formik.isSubmitting}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <FaSpinner className="animate-spin mr-2" />
                        Loading...
                      </div>
                    ) : (
                      "Continue"
                    )}
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default CreateAcc01;
