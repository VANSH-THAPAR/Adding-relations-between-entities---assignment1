import React from "react";
import DestionationContainer from "./DestinationContainer";

const DestinationCard = ({name, location, image, description, price}) =>{
    return(
        <div className="ng-white shadow-md rounded-lg overflow-hidden">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold"> {name} </h2>
                <p className="text-gray-600"> {location} </p>
                <p className="text-sm text-gray-700 mt-2"> {description} </p>
                <p className="text-lg font-semibold text-blue-500 mt-3"> {price} </p>
            </div>
        </div>
    )
}

export default DestionationCard;