import React, { useState } from 'react';
// import PhoneInput from 'react-phone-number-input'
// import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';


function SignUP(Onchange, signUp, updatedFormState, formState, eimg) {
    // const [value, setValue] = useState()
    return (
        <>
            <div className='page_container'>
                <h2 className='H2'>Hey! Welcome</h2>
                <h2 className='H2'>Manage tasks effortlessly</h2>
                <h3 className='H3'>Sign Up</h3>
                <img src={eimg} alt="" className='img1' />
                <div className='div3'>
                    <div className='div2'>
                        <input name="email" onChange={Onchange} placeholder="email" className='inpt' />
                        <input name="password" type="password" onChange={Onchange} placeholder="password" className='inpt' />
                        <input name="confirmpassword" type="password" onChange={Onchange} placeholder="confirm password" className='inpt' />
                    </div>
                    <div className='div2'>
                        <input name="name" onChange={Onchange} placeholder="name" className='inpt' />
                        {/* <input name="lastname" onChange={Onchange} placeholder="Last name" className='inpt' />
                        <input name="employID" onChange={Onchange} placeholder="employ ID" className='inpt' /> */}
                        <input name="phone_number" onChange={Onchange} placeholder="phone_number" className='inpt' />
                        {/* <PhoneInput
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue} /> */}
                    </div>
                </div>

                <div className='div1'>
                    <input id="checkbox" type="checkbox" /> <h3 className='H3'>i agree to all terms , privacy policy and conditions</h3>
                </div>
                <button onClick={signUp} className='bttn'>Create Account</button>
                <div className='div1'>
                    Already have an account?
                    <div onClick={() => {
                        updatedFormState(() => ({ ...formState, formType: "signIn" }))
                    }} className='hoverbttn'>Login</div>
                </div>
            </div>
        </>
    )
}

export default SignUP