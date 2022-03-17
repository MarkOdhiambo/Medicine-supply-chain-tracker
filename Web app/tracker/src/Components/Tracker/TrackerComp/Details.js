import React, { Component } from 'react';
import './Details.css';
import {useState,useEffect} from 'react';

// import React from 'react'

export default function Details(clicks) {
  const [name,setName]=useState("");
  const [valid,setValid]=useState("");
  const [date,setDate]=useState("");

    
  useEffect(()=>{
      setName('Panadol');
      setValid('True');
      setDate('06-2024')
  })

  return (
    <div className='details'>
            <div className='detail-list'>
                <h1>Medicine Details</h1>
                <ul>
                    <li className="item-list">Name:<p>{name}</p> </li>
                    <li className="item-list">Valid:<p>{valid}</p>  </li>
                    <li className="item-list">Expiry Date:<p>{date}</p>  </li>
                </ul>
                <button className='detail-button' onClick={useEffect(()=>{
      setName('Panadol');
      setValid('True');
      setDate('06-2024')
  })}></button>
            </div>
        </div>
  )
}
