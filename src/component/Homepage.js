import React, { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

const Homepage = () => {
  const [moviedata, setmoviedata] = useState([]);
  const [loading, setloading] = useState(true);
  const [search, setsearch] = useState(false);
  const [searchdata, setsearchdata] = useState("");
  const [Fullname, setFullname] = useState("")
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 w-fit px-4  md:px-16 mt-4 mx-auto">
        {moviedata
          ?.filter((movie) => {
            if (searchdata === "") {
              return movie;
            } else if (
              movie.name.first.toLowerCase().includes(searchdata.toLowerCase()) || movie.name.last.includes(searchdata.toLowerCase()) || movie.email.toLowerCase().includes(searchdata.toLowerCase()) || movie.nat.toLowerCase().includes(searchdata.toLowerCase()) || movie.name.title.toLowerCase().includes(searchdata.toLowerCase())
            ) {
              return movie;
            }
          })
          .map((movie) => {
            
            
            return <Card key={movie.cell} image={movie.picture.medium} pro={movie.nat} name={movie.name.title + " " + movie.name.first + " " + movie.name.last} mail={movie.email} address={movie.location.street.number + movie.location.street.name + movie.location.city + "," + movie.location.state + "," + movie.location.country } age={movie.dob.age}/>;
          })}
      </div>
    </> 
  );
};

export default Homepage;
