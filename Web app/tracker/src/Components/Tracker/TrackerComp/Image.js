import React, { Component } from 'react';
import './Image.css';
import { CameraFeed } from './Camera/camera';
import med from '../../Assets/meds.jpg';

// Upload to local seaweedFS instance
const uploadImage = async file => {
    const formData = new FormData();
    formData.append('file', file);
    console.log(file);
    console.log(formData);
    // Connect to a seaweedfs instance
};



export class Image extends Component {
    sendImage = () =>{
        const sendImage=new FormData();
        sendImage.append('file',med)
        // console.log()
    };
render() {
    return (
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
    )
}
}

export default Image