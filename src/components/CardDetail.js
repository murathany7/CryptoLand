import { API, Storage } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { listListingss,getListings } from '../graphql/queries';
export default function CardDetail(props) {
  const [info, setapidataa] = useState({});
  useEffect(() => {
    fetchData();
  },[])
  async function fetchData() {
    const apiData = await API.graphql({ query: getListings,variables:{id:props.match.params.id}});
    console.log(apiData);
    setapidataa(apiData.data.getListings);
    
  }
 
  
  return (
    <div>
      <h1>{info.description}</h1>
    </div>
  )
}

