import React from "react";
import { IoMdSearch } from "react-icons/io";

interface SearchBarProps {
  searchFn: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchFn }) => {
  return (
    <div className="relative w-full md:w-auto text-color">
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          searchFn(e.target.value);
        }}
        type="text"
        placeholder="Search for a country..."
        className="py-3 ps-16 pe-3 w-full md:w-112.5 rounded-md shadow-md bg-element place-holder:text-[14px]"
      />
      <IoMdSearch className="absolute top-3.5 left-5 text-2xl" />
    </div>
  );
};

export default SearchBar;
