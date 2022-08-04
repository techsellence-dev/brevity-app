import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Frontend/SignIn'
import ForgotPassword from './Frontend/ForgotPassword'
import Confirm from './Frontend/Confirm'
import SignUp from './Frontend/SignUp';
import ConfirmSignUp from './Frontend/ConfirmSignUp';
import { AuthProvider } from './Pages/Protected2'
import Admin from './Roles/Admin'
import Editor from './Roles/Editor'
import Home from './Roles/Home'
import Lounge from './Roles/Lounge'
import RequireAuth2 from './Pages/RequireAuth2';
import Unauthorized from './Roles/Unauthorized';
import Missing from './Pages/Missing';
import LinkPage from './Pages/LinkPage';
import './index.css';

const ROLES = {
    'user': 'amidebu610@gmail.com',
    'editor': 1984,
    'admin': 5150
}

function NewAuth() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/forgot' element={<ForgotPassword />} />
            <Route path='/confirm' element={<Confirm />} />
            <Route path='/unauthorized' element={<Unauthorized />} />
            <Route path='/confirmsignup' element={<ConfirmSignUp />} />

            {/* <Route>
                <Route path="/home" element={<Home />} />
            </Route>
            <Route element={<RequireAuth2 allowedRoles={[ROLES.editor]} />}>
                <Route path="/editor" element={<Editor />} />
            </Route>
            <Route element={<RequireAuth2 allowedRoles={[ROLES.admin]} />}>
                <Route path="/admin" element={<Admin />} />
            </Route>
            <Route element={<RequireAuth2 allowedRoles={[ROLES.editor, ROLES.admin]} />}>
                <Route path="/lounge" element={<Lounge />} />
            </Route>

            <Route path="*" element={<Missing />} />
            <Route path='links' element={<LinkPage />} /> */}
        </Routes>
    )
}

export default NewAuth