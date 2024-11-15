import { forwardRef } from 'react';

const states = ["Jammu and Kashmir", "Maharashtra", "Meghalaya", "Puducherry", "Tamil Nadu"];

const DropdownOccupation = forwardRef((props, ref) => {
  return (
    <div className="absolute mt-[-30px] ml-[270px] bg-[rgb(251,251,251)] rounded-[12px] max-w-[600px] flex flex-col z-50" ref={ref}>
      <ul className="flex flex-col font-sans list-none px-[23px] text-[14px]">
        {states.map(item => (
          <li key={item} className="flex items-center my-[14px]">
            <input type="checkbox" className="relative top-[1.5px] mr-[7px]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default DropdownOccupation;