import { useRouter } from 'next/router';
import { FaAngleRight } from "react-icons/fa6";

const SavedModal = ({ isOpen, onRequestClose }) => {
    const router = useRouter();

    const handleRoutetologin = () => {
        router.push("/login");
    };

    const handleRoutetoCreateacco1 = () => {
        router.push("/Signup");
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
            
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full sm:w-96 max-w-sm sm:max-w-md z-10">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-xl">Saved</h2>
                    <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={onRequestClose}
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.414 10l5.293 5.293a1 1 0 01-1.414 1.414L12 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 10 5.293 4.707a1 1 0 011.414-1.414L12 8.586l5.293-5.293a1 1 0 011.414 1.414L13.414 10z"
                            />
                        </svg>
                    </button>
                </div>
                <hr className="my-4 w-full border-gray-300" />
                <div>
                    <h1 className="text-lg mb-4 text-center">
                        To save, please login to your account.
                    </h1>
                    <button
                        className="bg-[#3431BB] text-white px-4 py-2 rounded-lg mb-4 w-full flex justify-center items-center"
                        onClick={handleRoutetologin}
                    >
                        Login
                    </button>
                    <p className="text-sm text-center">
                        Don't have an account?
                        <span
                            className="underline text-sm text-[#3431BB] inline-flex items-center ml-2 transition duration-300 hover:text-blue-600 cursor-pointer"
                            onClick={handleRoutetoCreateacco1}
                        >
                            Create new account
                            <FaAngleRight className="ml-1" />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SavedModal;
