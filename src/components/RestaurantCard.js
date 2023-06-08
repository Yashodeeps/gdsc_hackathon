import { IMG_CDN_URL } from "../constants";

const RestaurantCard =({name,cuisines, cloudinaryImageId, deliveryTime}) =>{
    return(
       <div className="w-56 p-2 m-2 shadow-lg bg-gray-100">
          <img className="image" alt="image" src={IMG_CDN_URL + cloudinaryImageId}/>
          <h2 className="font-bold text-xl">{name}</h2>
          <h3>{cuisines?.join(", ")}</h3>
          <h4>{deliveryTime} minutes</h4>
 
       </div>
    );
 };

 export default RestaurantCard;