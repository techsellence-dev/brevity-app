import React from 'react';

function ConfirmForgotPass(Onchange, ConfirmForgotPas, updatedFormState, formState, eimg) {
    return (
        <>
            <div className='page_container'>
                <img src={eimg} alt="" className='img1' />
                <h3 className='H2'>Confirm Forgot password</h3>
                <h3 className='H3'>Enter your email address and we'll send you <br /> a code to reset your password</h3>
                <input type="text" onChange={Onchange} name="username" id="" className='inpt' placeholder='Enter your email Id' />
                <input type="text" onChange={Onchange} name="authCode" id="" className='inpt' placeholder='Enter Confirmation Code' />
                <input type="text" onChange={Onchange} name="new_password" id="" className='inpt' placeholder='New password' />
                <div onClick={ConfirmForgotPas} className='bttn'>Reset Password</div>
                {/* onClick={() => {

                    updatedFormState(() => ({ ...formState, formType: "signIn" }))
                    ConfirmForgotPass()

                }} */}
                <div onClick={() => {
                    updatedFormState(() => ({ ...formState, formType: "signIn" }))

                }} className='hoverbttn'>Back to Sign In Page</div>

            </div>

        </>
    )
}

export default ConfirmForgotPass