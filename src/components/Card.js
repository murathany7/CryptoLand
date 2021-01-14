
import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listListingss,getListings } from '../graphql/queries';
import { createListings as createListingMutation, deleteListings as deleteListingMutation } from '../graphql/mutations';
import {Link} from 'react-router-dom';

const initialFormState = { name: '', description: '' }

function Card() {
  const [Listings, setListings] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

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

  async function createListing() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createListingMutation, variables: { input: formData } });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setListings([...Listings, formData]);
    setFormData(initialFormState);
  }

  async function deleteListing({ id }) {
    console.log(id);
    const apiDataa = await API.graphql({ query: getListings,variables:{id:id}});
    console.log(apiDataa);
    // const newListingsArray = Listings.filter(Listing => Listing.id !== id);
    // setListings(newListingsArray);
    // await API.graphql({ query: deleteListingMutation, variables: { input: { id } } });
  }

  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchListings();
  }

  return (
    <div className="asd">
      <h1>My Listings App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value })}
        placeholder="Listing name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value })}
        placeholder="Listing description"
        value={formData.description}
      />
      <input
        type="file"
        onChange={onChange}
      />
      <button onClick={createListing}>Create Listing</button>
      <div className="row row-cols-2 row-cols-md-2 g-4" style={{ marginBottom: 30,margin:10,padding:10 }}>
        
        {
          Listings.map(Listing => (
            <div className="col" style={{ marginBottom:10 }}>
            <div className="card text-center" style={{ width: "32rem" }} key={Listing.id || Listing.name}>
              
              {
                Listing.image && <img class="card-img-top center" src={Listing.image} />
              }
              <div className="card-body">
              <h2 className="card-title">{Listing.name}</h2>
                <p className="card-text">{Listing.description}</p>
                <Link to={{pathname: "/lists/"+Listing.id,state: {id:Listing}}} className="btn btn-primary">Buum</Link>
                {/* <button className="btn btn-primary" onClick={() => deleteListing(Listing)}>Get Details</button> */}

              </div>

              </div>
            </div>
          ))
        }
        
      </div>
    
    </div>
  );
}

export default withAuthenticator(Card);