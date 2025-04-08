import React from "react";
import DestionationContainer from "./components/DestinationContainer";

const App = () =>{
  return(
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold my-6">Top Travel Destinations</h1>
      <DestionationContainer/>
    </div>
  )
}

export default App;