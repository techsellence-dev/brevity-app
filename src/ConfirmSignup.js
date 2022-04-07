import React from 'react'

function ConfirmSignup(Onchange, ConfirmsignUp, resendConfirmationCode) {
    return (
        <>
            <div>
                <input name="username" onChange={Onchange} placeholder="username" />
                <input name="authCode" onChange={Onchange} placeholder="Confirmation Code" />
                <button onClick={() => { ConfirmsignUp() }}>Verify COde</button>
                <button onClick={resendConfirmationCode}>Didn't received code</button>
            </div>
        </>
    )
}

export default ConfirmSignup