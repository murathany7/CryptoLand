import React, {useState} from 'react'
import { createListings as createListingMutation, deleteListings as deleteListingMutation } from '../graphql/mutations';
import { API, Storage } from 'aws-amplify';
import './App.css'
function Create() {
  const initialFormState = { name: '', description: '',location:'',price:null }
  const [formData, setFormData] = useState(initialFormState);

  async function createListing() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createListingMutation, variables: { input: formData } });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }

    setFormData(initialFormState);
  }

  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);

  }

  return (
    <div className="container-fluid mt-5">
      
    <div className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }} >
    <div className="content mr-auto ml-auto" style={{textAlign:'center'}}>
      <div style={{fontFamily:'Yusei Magic'}}>
    <h1>Sell Your House</h1>
    </div>
      <div className="form-group">

      <input className="form-control"
        onChange={e => setFormData({ ...formData, 'name': e.target.value })}
        placeholder="Title"
        value={formData.name}
      />
      </div>
      <div className="form-group">

      <input className="form-control"
        onChange={e => setFormData({ ...formData, 'description': e.target.value })}
        placeholder="House description"
        value={formData.description}
      />
      </div>
      <div className="form-group">

      <input className="form-control"
        onChange={e => setFormData({ ...formData, 'price': e.target.value })}
        placeholder="Price"
        value={formData.price}
      />
      </div>
      <div className="form-group">

      <input className="form-control"
        onChange={e => setFormData({ ...formData, 'location': e.target.value })}
        placeholder="Location"
        value={formData.location}
      />
      </div>
      <input
        type="file"
        onChange={onChange}
      />
      <button onClick={createListing} className="btn btn-primary">Create Listing</button>

    </div>
    </div>
    </div>
  )
}

export default Create
