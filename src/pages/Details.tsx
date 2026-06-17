import React from "react";
import EachCountry from "../components/EachCountry";
import type { Country } from "../App";
import { useLocation, useParams } from "react-router-dom";

interface DetailsProps {
  details: Country[];
}
// interface CountryParams {
//   countryName: string;
// }
const Details: React.FC<DetailsProps> = ({ details }) => {
  const { countryName } = useParams<{countryName: string }>();
  const { state } = useLocation();

  const findCountry: Country =
    state?.country ||
    details.find((country) => {
      return country.name === decodeURIComponent(countryName ?? "");
    });
  return (
    <div>
      <EachCountry detail={findCountry} />
    </div>
  );
};

export default Details;
