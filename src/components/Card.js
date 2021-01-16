
import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listListingss } from '../graphql/queries';
import {Link} from 'react-router-dom';
import './App.css'

function Card() {
  const [Listings, setListings] = useState([]);


  useEffect(() => {
    fetchListings();
  }, []);

  async function fetchListings() {
    const apiData = await API.graphql({ query: listListingss });
    console.log(apiData);
    const notesFromAPI = apiData.data.listListingss.items;
    await Promise.all(notesFromAPI.map(async note => {
      if (note.image) {
        const image = await Storage.get(note.image);
        note.image = image;
      }
      return note;
    }))
    setListings(apiData.data.listListingss.items);
  }



  return (
    <div className="asd" style={{textAlign:'center'}}>
      <div className="asd" style={{textAlign:'center',margin:25,fontFamily:'Yusei Magic',color:'purple'}}>
      <h1>Find Your Dream House</h1>
      </div>
      <div className="row row-cols-2 row-cols-md-2 g-4" style={{ marginBottom: 30,margin:10,padding:10,alignContent:'center' }}>
        {
          Listings.map(Listing => (
            <div className="col" style={{ marginBottom:10, display:'flex',justifyContent:'center'}} key={Listing.id || Listing.name}>
            <div className="card text-center" style={{ width: "32rem" }} >
              {
                Listing.image && <img className="card-img-top center" src={Listing.image} />
              }
              <div className="card-body" >
              <h2 className="card-title" >{Listing.name}</h2>
                <p className="card-text">{Listing.description}</p>
                <Link to={{pathname: "/lists/"+Listing.id,state: {id:Listing}}} className="btn btn-primary">Get Details</Link>
                
              </div>

              </div>
            </div>
          ))
        }
        
      </div>
    <AmplifySignOut className="btn "/>
    </div>
  );
}

export default withAuthenticator(Card);