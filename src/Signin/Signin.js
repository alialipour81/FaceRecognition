import React from 'react';




const Signin = ({onRouteChange}) =>{
    return (
        <div className='card bg-light rounded col-sm-7 mx-auto shadow-sm'>
            <div className="card-header">
                <h3>Login form</h3>
            </div>
            <div className="card-body">
                <img src="https://www.mydoorsign.com/img/lg/S/Please-Sign-In-Tent-Sign-SE-5333.png" alt="image sign in" className='w-100 rounded' height='200px'/>
                <form action="" method='post'>
                    <input type="text" className="form-control my-2" placeholder='username'/>
                    <input type="password" className="form-control my-2" placeholder='password'/>
                    <button className='btn btn-outline-primary  my-2 w-25' onClick={() => onRouteChange('home')}>Sign in</button>
                    <a className='d-block mt-2 small text-decoration-none pointer text-black-50' onClick={()=> onRouteChange('register')}>Sign up</a>
                </form>
            </div>
        </div>
    )
}


export default Signin;