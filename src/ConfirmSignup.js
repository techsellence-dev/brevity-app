import React from 'react'

function ConfirmSignup(Onchange, ConfirmsignUp, resendConfirmationCode, eimg) {
    return (
        <>
            <div className='page_container'>
                <img src={eimg} alt="" className='img1' />
                <input className='inpt' name="username" onChange={Onchange} placeholder="username" />
                <input className='inpt' name="authCode" onChange={Onchange} placeholder="Confirmation Code" />
                <button onClick={() => { ConfirmsignUp() }} className='bttn'>Verify Code</button>
                <button onClick={resendConfirmationCode} className='bttn'>Didn't received code</button>
            </div>
        </>
    )
}

export default ConfirmSignup