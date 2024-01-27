import React, { useEffect, useState } from 'react'
import Spinner from "../Components/Spinner";
import Product from "../Components/Product";

export const Home = () => {
  /*API for fetching out the data.*/
  const API_URL = "https://fakestoreapi.com/products";
  const [items,setItems]=useState([]);
  const [loading,setLoading]=useState(false);

  /*Fetching out the data.*/
  async function fetchProductData(){
    setLoading(true);
    try{
      const res=await fetch(API_URL);
      const out=await res.json();
      console.log(out);
      setItems(out);
    }
    catch(error){
      console.log("Error during fetching out the data.");
      setItems([]); //In the case of Error everything in the items will become an empty array,
    } 
    setLoading(false);
  }
  
  //One time data fetching at the first render
  useEffect(()=>{
    fetchProductData()
  },[])



  return (
    /*Here we have showed that of the value of loading is true then show the spinner otherwise
    check if the items array has some item in it then map each item otherwise show No Data Found
    text inside a div.*/
    <div>
      {
        loading?
        (<Spinner></Spinner>) : 
        items.length > 0 ? 
        (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            items.map((item)=>{
              return <Product key={item.id} item={item}></Product>
            })
          }
        </div>) :
        (<div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>)
      }
     
    </div>
  )
}
