import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Register from './Components/Register/Register';
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import Clarifai from 'clarifai';
import React, { Component } from 'react';
import './App.css';
import Signin from './Components/Signin/Signin';
const app = new Clarifai.App({
  apiKey: '4f32de66aef24c04b93c6514802023ee'
 });

class App extends Component{
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:{},
      route:'signin',
      isSignedIn:false
    }
  }
  calculateFaceLocation=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifaiFace);
    const image=document.getElementById('inputimage');
    const width=Number(image.width);
    const height=Number(image.height);
    console.log(width,height);
    return {
      leftCol:clarifaiFace.left_col*width,
      topRow:clarifaiFace.top_row*height,
      rightCol:width-(clarifaiFace.right_col*width),
      bottomRow:height-(clarifaiFace.bottom_row*height), 
    }
  }
  displayFaceBox=(box)=>{
    console.log("box",box);
    this.setState({box:box});

  }
  onInputChange=(event)=>{
    console.log(event.target.value);
    this.setState({input:event.target.value});
  }
  onButtonSubmit=()=>{
    console.log('click');
    this.setState({imageUrl:this.state.input});
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
      .then(response=>this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err=>console.log("error",err));
      
  }
  onRouteChange=(route)=>{
    if(route==='signout')
    {
      this.setState({isSignedIn:'false'})
    }
    else if(route==='home'){
      this.setState({isSignedIn:'true'})
    }
    this.setState({route:route});
  }
  render(){
  return(
    <div className="App"> 
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
      {this.state.route==='home'? 
      <><Logo/>
      <Rank/>
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </>
      :
      (this.state.route==='signin'
      ?<Signin onRouteChange={this.onRouteChange}/>
      :<Register onRouteChange={this.onRouteChange}/>)  //if we click signout on app we land here
      
      
      }
    </div>
  );
  }
}


export default App;
