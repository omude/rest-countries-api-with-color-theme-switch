import React from "react";
import SearchBar from "../components/SearchBar";
import DropDown from "../components/DropDown";
import type { Country } from "../App";
import Countries from "../components/Countries";

interface HomeProps {
  theWorld: Country[];
  searchFn: (value: string) => void;
  dropDownFn: (value: string) => void;
}

const Home: React.FC<HomeProps> = ({ theWorld, searchFn, dropDownFn }) => {
  return (
    <div className="px-5 md:px-20 py-8 md:py-12 bg-body">
      <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center">
        <SearchBar searchFn={searchFn} />
        <DropDown dropDownFn={dropDownFn} />
      </div>
      <Countries theWorld={theWorld} />
    </div>
  );
};

export default Home;
