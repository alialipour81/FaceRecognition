import React from "react";

const Navigation = ({onRouteChange,isSignedIn}) =>{
    if (isSignedIn === 'home'){
        return (
            <nav style={{display :'flex',justifyContent:'end'}}>
                <p onClick={ () => onRouteChange('signin')} className='fe dim black underline pa3 pointer'>sign out</p>
            </nav>
        )
    }else{
        return (
            <nav style={{display :'flex',justifyContent:'end'}}>
                <p onClick={ () => onRouteChange('signin')} className='fe dim black underline pa3 pointer'>sign in</p>
                <p onClick={ () => onRouteChange('register')} className='fe dim black underline pa3 pointer'>sign up</p>
            </nav>
        )
    }

}

export default Navigation;