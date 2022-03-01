import React, { useEffect } from 'react';

const Mission = () => {
  const getMovies = async () => {
    fetch('https://api.spacexdata.com/v3/missions')
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  useEffect(() => {
    getMovies();
  }, []);

  return <h1>loading....</h1>;
};
export default Mission;
