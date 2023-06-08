import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";

function filterData(searchTxt, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant)=>
  restaurant.data.name.includes(searchTxt));
  return filterData;
}
 
  
const Body = () =>{
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(()=> { 
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5807719&lng=73.9787063&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

    if(!allRestaurants) return null;

    

     return (allRestaurants?.length === 0)? <Shimmer/> :(

    
      <>
      <div className="search-container p-5">
        <input 
        type="text" 
        className="p-2  border-gray-500 rounded-l-full" 
        placeholder="Search" 
        value={searchTxt} 
        onChange={(e)=> 
        {setSearchTxt(e.target.value);}}/>

        <button  className="p-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md rounded-r-full" onClick={()=>{
          const data = filterData(searchTxt, allRestaurants);
          setFilteredRestaurants(data);

        }}>Search</button>
      </div> 

      
      <div className="flex flex-wrap">
        {

          (filteredRestaurants.length === 0)?
          <h1>No restaurants match your filter!!!</h1> :
        
        filteredRestaurants?.map((restaurant)=>{
          return(
            <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
          );
        }) 
        
        }
        </div>
        </>
     );
  };

export default Body;

