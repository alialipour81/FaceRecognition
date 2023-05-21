import React from 'react';
import './Logo.css';
import {Tilt} from "react-tilt";

const Logo = () =>{
    return (
        <div className='ma4 mt10'>
            <Tilt option={{max:100}} style={{ height: 100, width: 150 }} className='br-2 shadow-2 Tilt'>
                <div >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtqnCwHThenv3eIO8PVXDscWsZxbTzOhlEw&usqp=CAU" alt="image"/>
                </div>
            </Tilt>
        </div>
    )

}


export default Logo;