import React from "react"
import './App.css'
import Navigation from "./components/Navigation/Navigation"
import Logo from './components/Logo/Logo'
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm"
import Rank from './components/Rank/Rank'
import Facerecogition from './components/Facerecogition/Facerecogition'
import Signin from './Signin/Signin';
import Signup from "./Signup/Signup";
import Clarifai from 'clarifai'

window.process = {};


const app = new Clarifai.App({
    apiKey: 'eb772eae73df4655b76cc789c97a7179'
});

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            input : '',
            imageUrl : '',
            box : {},
            route : 'signin'
        }
    }
    calculateFaceLocation = (data) =>{
      const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      return {
          leftCol : clarifaiFace.left_col * width,
          topRow : clarifaiFace.top_row * height,
          rightCol : width - (clarifaiFace.right_col * width),
          bottomRow : height - (clarifaiFace.bottom_row * height)

       }
    }

    displayFaceBox = (box) =>{
        this.setState({box : box});
    }

    inputSearched = (event) =>{
        this.setState({input : event.target.value})
    }
    onButtonSubmit = () =>{
        this.setState({imageUrl : this.state.input})
        app.models
            .predict(
                {
                    id: "a403429f2ddf4b49b307e318f00e528b",
                    version: "34ce21a40cc24b6b96ffee54aabff139",
                },
                // URL
                this.state.input
            )
            .then(response =>  this.displayFaceBox(this.calculateFaceLocation(response)))
            .catch(err => console.log('error :',err));
    }
    onRouteChange = (route) =>{
        this.setState({route : route})
    }

  render() {
     let {input,imageUrl,box,route} = this.state;
    return (
        <div className='App'>

          <Navigation onRouteChange={this.onRouteChange} isSignedIn={route}/>
            { route === 'home' ?
                <div>
                    <Logo/>
                    <Rank/>
                    <ImageLinkForm searched={this.inputSearched} onButtonSubmit={this.onButtonSubmit}/>
                    <Facerecogition image={imageUrl} box={box}/>
                </div>
                :(
                    route === 'signin'
                    ?
                        <Signin onRouteChange={this.onRouteChange}/>
                     :
                        <Signup onRouteChange={this.onRouteChange}/>

                )

            }
        </div>
    )
  }
}


export default App;
