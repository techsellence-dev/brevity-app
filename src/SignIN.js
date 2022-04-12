import React, { useState } from 'react';
import immg from "./Components/images/new  jump man.png";
import eimg from "./Components/images/Ellipse4eclips.png";
import google from "./Components/images/flat-color-icons_google.png";
import facebook from "./Components/images/simple-icons_facebook.png";
import { Auth } from "aws-amplify";
import { Spinner } from './Spinner';

function SIgnIN(Onchange, SignIN, updatedFormState, formState, GoogleSignIn, USer) {
    console.log('entered sign in');
    console.log('Form State: ' + JSON.stringify(formState));

    return (
        <>
            {/* <div>
                <input name="username" onChange={Onchange} placeholder="username" />
                <input name="password" type="password" onChange={Onchange} placeholder="password" />
                
                <button onClick={SignIN}>signIn</button>
                <button onClick={() => {
                    updatedFormState(() => ({ ...formState, formType: "signUp" }))
                }}>Go to Signup page</button>

            </div> */}

            <div className='page_container'>
                <Spinner />
                <h2 className='H2'>Login</h2>
                <img src={eimg} alt="" className='img1' />
                <div className='div3'>
                    <div className='div22'>
                        <h3 className='H3'>Login with Social media</h3>
                        <div className='socialbutton hoverpointer' onClick={GoogleSignIn}>
                            <img src={google} alt="" className='socialimg' /> Sign in with Google
                        </div>
                        <div className='socialbutton hoverpointer'>
                            <img src={facebook} alt="" className='socialimg' /> Sign in with Facebook
                        </div>
                        <h3 className='H3'>Login with username</h3>
                        <input name="username" onChange={Onchange} placeholder="email" className='inpt' />
                        <input name="password" type="password" onChange={Onchange} placeholder="password" className='inpt' />
                        <button className='bttn' onClick={SignIN}>Login</button>
                        {/* <h3 className='H3 bttn2'>Forgot password?</h3> */}
                        <div className='div1'>

                            <div onClick={() => {
                                updatedFormState(() => ({ ...formState, formType: "Forgotpass" }))

                            }} className='hoverbttn'>Forgot password?</div>
                        </div>

                    </div>
                    <div className='div22'>
                        <img src={immg} alt="" className='immg' />
                    </div>

                </div>

                <div className='div1'>
                    Don't have an account?
                    <div onClick={() => {
                        updatedFormState(() => ({ ...formState, formType: "signUp" }))

                    }} className='hoverbttn'>Sign Up</div>

                    {/* <button onClick={() => Auth.signOut()}>Sign Out</button> */}
                </div>
                {/* Code to check if user is logged in or not */}
                {/* <div>
                    <p>User: {USer ? JSON.stringify(USer.attributes) : 'None'}</p>
                    {USer ? (
                        <button className='bttn hoverpointer' onClick={() => Auth.signOut()}>Sign Out</button>
                    ) : (
                        <button className='bttn hoverpointer' onClick={() => Auth.federatedSignIn({ provider: "Google" })}>Federated Sign In</button>
                    )}
                </div> */}

            </div>
        </>
    )
}

export default SIgnIN