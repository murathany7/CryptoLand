
import React from 'react';
import PaymentSc from './PaymentSc';

export default function CardDetail(props) {

  return (
    <div style={{textAlign: 'center'}} >
      <h1 style={{textAlign:'center',marginTop:45,fontFamily:'Yusei Magic',color:'blueviolet'}}  >{props.location.state.id.name}</h1>

      <img  src={props.location.state.id.image} />
      <h3 style={{fontFamily:'Yusei Magic',marginTop:25}}>{props.location.state.id.description}</h3 >
      <PaymentSc price={props.location.state.id.price} />
    </div>
  )
}

