import './Tracker.css';
import React, { Component } from 'react';
import Details from './TrackerComp/Details.js';
import Image from './TrackerComp/Image.js';
import { CameraFeed } from './TrackerComp/Camera/camera';


const uploadImage = async file => {
  const formData = new FormData();
  formData.append('file', file);
  console.log(file);
  console.log(formData);
  // Connect to a seaweedfs instance
};
let click= true
export default class Tracker extends Component {
  sendImage = () =>{
    let click = true;
    // console.log()
  };
  render() {
    return (
    <div className='tracker'>
        <div className='image'>
            <div className='image-upload'>
            <div className="App">
            <CameraFeed sendFile={uploadImage} />
        </div>
                </div>
            <div className='send-button-cont'>
                <button className='send-button' onClick={this.sendImage}>Send</button>
            </div>
        </div>
        <Details clicks={click}/>
    </div>
    )
  }
}
