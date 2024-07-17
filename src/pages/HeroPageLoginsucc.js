import NavBar from "@/components/NavBarLoginsucc";
import Image from "next/image";
import MainPageImage from ".././assets/backgroundimg.png";
import BackButton from "@/components/BackButton";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Tabs from "@/components/Tabs";
import { useEffect, useRef, useState } from "react";
import DropdownMenu from "../components/DropdownMenu";
import DepartmentDropdownMenu from "../components/DepartmentDropDown";
import BeneficiaryDropdownMenu from "../components/BeneficiariesDropdown";
import AgeDropdownMenu from "../components/AgeDropdown";
import IncomeDropdownMenu from "../components/IncomeDropdown";
import FundingByDropdownMenu from "../components/FundingBy";


const HeroPageAfterLogin = () => {
  const [data, setData] = useState(null);
  const [stateName, setStateName] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [funderName, setFunderName] = useState("");

  const [selectedState, setSelectedState] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedBeneficiaries, setSelectedBeneficiaries] = useState([]);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedIncomes, setSelectedIncomes] = useState([]);
  const [selectedFunders, setSelectedFunders] = useState([]);

  const dropdownRef = useRef();
  const departmentDropdownRef = useRef();
  const beneficiaryDropdownRef = useRef();
  const ageDropdownRef = useRef();
  const incomeDropdownRef = useRef();
  const funderDropdownRef = useRef();

  const [dropDownStates, setDropDownStates] = useState({
    dropDownOpen: false,
    departmentOpen: false,
    beneficiaryOpen: false,
    ageOpen: false,
    incomeOpen: false,
    fundersOpen: false,
  });

  useEffect(() => {
    setStateName('');
    setDepartmentName('');
    setBeneficiaryName('');
    setFunderName('');
    setSelectedDepartments([]);
    setSelectedBeneficiaries([]);
    setSelectedAges([]);
    setSelectedIncomes([]);
    setSelectedFunders([]);
  },[data])

  const toggleDropdown = (key) => {
      setDropDownStates((prevState) => {
      const newState = { ...prevState, [key]: !prevState[key] };
      if (!prevState[key]) {
        // Close other dropdowns when opening a new one
        Object.keys(dropDownStates).forEach((dropdownKey) => {
          if (dropdownKey !== key) {
            newState[dropdownKey] = false;
          }
        });
      }
      return newState;
    });
  };


  return (
    <>
      <NavBar/>
      <BackButton />
      <div
        className="relative w-80vw mx-auto mb-8 flex justify-center items-center "
        style={{ maxWidth: "80%", margin: "0 auto" }}
      >
        <div className="h-60 w-full relative brightness-50 mb-4">
          <Image
            src={MainPageImage}
            alt="Loading Image..."
            layout="fill"
            objectFit="cover"
            objectPosition="center bottom"
            className="rounded-[15px]"
          />
        </div>
      </div>

      <div style={{ maxWidth: "80%", margin: "0 auto" }}>
        <div style={{ display: "flex" }}>
        <div style={{ flex: "1 0 25%", maxWidth: "25%", padding: "1rem" }}
          className="mr-2">
            <div
            className="flex justify-between items-center mb-4"
            >
              <h1 style={{ margin: 0 }}>Filter by</h1>
              {/* <button className="text-[#3431BB]" style={{ margin: 0 }}>
                Clear all filters
              </button> */}
            </div>
            <hr />

            {/* filter categories */}
            <div className="mt-2">
              {/* Each filter category */}
              <div className="flex justify-between items-center mb-4" onClick={() => toggleDropdown("dropDownOpen")} id="stateBtn">
                <span>{stateName != "" ? (<span> State <span className = "w-[20px] h-[20px] bg-dropdown-blue text-onclick-btnblue text-[12px] text-semibold rounded-[50%]">{stateName}</span></span>) : "State"}</span>
                {dropDownStates.dropDownOpen ? <IoIosArrowUp className="text-[#000]"/> : <IoIosArrowDown className="text-[#000]" /> }
              </div>
              {dropDownStates.dropDownOpen && <DropdownMenu 
              ref={dropdownRef} 
              selectedState = {selectedState}
              setStateName = {setStateName}
              setSelectedState = {setSelectedState}
              data = {data}/>}
              <div className="flex justify-between items-center mb-4" onClick={() => toggleDropdown("departmentOpen")} id="departmentBtn">
              <span>{departmentName != "" ? (<span> Department <span className = "w-[20px] h-[20px] bg-dropdown-blue text-onclick-btnblue text-[12px] text-semibold rounded-[50%]">{departmentName}</span></span>) : "Department"}</span>
                {dropDownStates.departmentOpen? <IoIosArrowUp className="text-[#000]" />:<IoIosArrowDown className="text-[#000]" /> }
              </div>
              {dropDownStates.departmentOpen && (
                  <DepartmentDropdownMenu
                    ref={departmentDropdownRef}
                    selectedDepartments={selectedDepartments}
                    setSelectedDepartments={setSelectedDepartments}
                    setDepartmentName={setDepartmentName}
                    data = {data}
                  />
                )}
              <div className="flex justify-between items-center mb-4" onClick={() => toggleDropdown("fundersOpen")} id="fundingbyBtn">
                <span>{funderName? `Funding by ${funderName}` : "Funding by"}</span>
                {dropDownStates.fundersOpen? <IoIosArrowUp className="text-[#000]"/> : <IoIosArrowDown className="text-[#000]" /> }
              </div>
              {dropDownStates.fundersOpen && (
                  <FundingByDropdownMenu
                    ref={funderDropdownRef}
                    selectedFunders={selectedFunders}
                    setSelectedFunders={setSelectedFunders}
                    setFunderName={setFunderName}
                    data = {data}
                  />
                )}
              <div className="flex justify-between items-center mb-4" onClick={() => toggleDropdown("beneficiaryOpen")} id="beneficiaryBtn">
                <span>{beneficiaryName?`Beneficiaries ${beneficiaryName}` :"Beneficiaries"}</span>
                {dropDownStates.beneficiaryOpen ? <IoIosArrowUp className="text-[#000]"/> : <IoIosArrowDown className="text-[#000]" /> }
              </div>
              {dropDownStates.beneficiaryOpen && (
                  <BeneficiaryDropdownMenu
                    ref={beneficiaryDropdownRef}
                    selectedBeneficiaries={selectedBeneficiaries}
                    setSelectedBeneficiaries={setSelectedBeneficiaries}
                    setBeneficiaryName={setBeneficiaryName}
                    data = {data}
                  />
                )}
              <div className="flex justify-between items-center mb-4">
                <span>Eligibility criteria</span>
                <IoIosArrowDown className="text-[#000]" /> 
              </div>
              <div className="flex justify-between items-center mb-4">
                <span>Sponsorship</span>
                <IoIosArrowDown className="text-[#000]" /> 
              </div>
              <div className="flex justify-between items-center mb-4">
                <span>Scheme type</span>
                <IoIosArrowDown className="text-[#000]" /> 
              </div>
            </div>
          </div>
          {/* </div> */}

          <div style={{ flex: "1 0 75%", maxWidth: "75%" }}>
            <div>
              <Tabs 
              data = {data}
              setData = {setData}
              tateName = {stateName}
              setStateName = {setStateName}
              departmentName = {departmentName}
              setDepartmentName = {setDepartmentName}
              beneficiaryName = {beneficiaryName}
              setBeneficiaryName = {setBeneficiaryName}
              funderName = {funderName}
              setFunderName = {setFunderName}
              selectedDepartments = {selectedDepartments}
              setSelectedDepartments = {setSelectedDepartments}
              selectedBeneficiaries = {selectedBeneficiaries}
              setSelectedBeneficiaries = {setSelectedBeneficiaries}
              selectedState = {selectedState}
              selectedAges = {selectedAges}
              setSelectedAges = {setSelectedAges}
              selectedIncomes = {selectedIncomes}
              setSelectedIncomes = {setSelectedIncomes}
              selectedFunders = {selectedFunders}
              setSelectedFunders = {setSelectedFunders}
              dropDownStates = {dropDownStates}
              setDropDownStates = {setDropDownStates}
              dropdownRef = {dropdownRef}
              departmentDropdownRef = {departmentDropdownRef}
              beneficiaryDropdownRef = {beneficiaryDropdownRef}
              ageDropdownRef = {ageDropdownRef}
              incomeDropdownRef = {incomeDropdownRef}
              funderDropdownRef = {funderDropdownRef}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPageAfterLogin;
