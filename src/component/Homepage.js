import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Homepage = () => {
  const [moviedata, setmoviedata] = useState([]);
  const [loading, setloading] = useState(true);
  const [search, setsearch] = useState(false);
  const [searchdata, setsearchdata] = useState("");
  useEffect(async () => {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=15`);
      const json = await response.json();
      setloading(false);

      setmoviedata(json.results);
    } catch (e) {
      alert(`Pls check Your Internet Connection or Refresh Page ${e}`);
    }
  }, [setsearchdata]);

  return (
    <>
      <Navbar setsearchdata={setsearchdata} setsearch={setsearch} />
      <div className="lg:grid-col-4 md:grid-col-3 sm:grid-col-2 sm:grid-cols-1">
        {moviedata
          ?.filter((movie) => {
            if (searchdata === "") {
              return movie;
            } else if (
              movie.name.first.toLowerCase().includes(searchdata.toLowerCase())
            ) {
              return movie;
            }
          })
          .map((movie) => {
            return <h1>{movie.name.first}</h1>;
          })}
      </div>
    </>
  );
};

export default Homepage;
