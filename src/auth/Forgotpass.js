import React from 'react'

function Forgotpass(Onchange, ForgotPass, updatedFormState, formState, eimg) {
    function frgfun() {
        ForgotPass()
        updatedFormState(() => ({ ...formState, formType: "ConfirmForgotpass" }))
    }
    return (
        <>
            <div className='page_container'>
                <img src={eimg} alt="" className='img1' />
                <h3 className='H2'>Forgot password?</h3>
                <h3 className='H3'>Enter your email address and we'll send you <br /> a code to reset your password</h3>
                <input type="text" onChange={Onchange} name="username" id="" className='inpt' placeholder='Enter your email Id' />
                <div onClick={() => { ForgotPass() }} className='bttn'>Send Reset password code</div>
                {/* onClick={() => {
                    
                    updatedFormState(() => ({ ...formState, formType: "ConfirmForgotpass" }))
                    ForgotPass()

                }} */}
                <div onClick={() => {
                    updatedFormState(() => ({ ...formState, formType: "signIn" }))

                }} className='hoverbttn'>Back to Sign In Page</div>

            </div>

        </>
    )
}

export default Forgotpass