import React from 'react'
import { useState } from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from '../Pages/TextError'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import { useAuth } from '../Pages/Protected2'
import '../Auth.css';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import signUpAut from '../BackEnd/SignupAut'
Amplify.configure(awsconfig);

const initialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirm: ''
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid Email').required('Required!'),
})

const validate = values => {
    let errors = {}
    if (!values.password) {
        errors.password = 'Required'
    }
    if (!values.confirm) {
        errors.confirm = 'Required'
    }
    else if (values.confirm !== values.password) {
        errors.confirm = 'Must match'
    }
    return errors
}

function SignUp() {
    const [showPwd, Setshown] = useState(false)
    const [icon, setIcon] = useState(<VisibilityOffIcon />)
    const TogglePassword = () => {
        setIcon(<VisibilityIcon />)
        Setshown(!showPwd)
    }
    const navigate = useNavigate()
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    const handleSubmit = async (values, onSubmitProps) => {
        await sleep(1000)
        alert('Submitted')
        onSubmitProps.setSubmitting(false)
        // onSubmitProps.resetForm()
        try {
            await signUpAut(values.email, values.password, values.name)
            console.log(values.email)
            console.log(values.password)
            console.log(values.name)
            navigate('/confirmsignup')
        } catch (error) {
            switch (error) {
                case "UsernameExistsException":
                    console.log("USerName Exists")
                    navigate("/signin")
            }
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            validate={validate}>

            {formik => {
                return (
                    <div className='Box'>
                        <Form>
                            <h1>Sign Up </h1><br></br><br></br>
                            <div>
                                <label>Name:</label>
                                <TextField
                                    variant='outlined'
                                    label='name'
                                    type='text'
                                    id='name'
                                    name='name'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                    helperText='Enter your full name' />
                                <ErrorMessage name='name' component={TextError} />
                            </div>
                            <br></br>

                            <div>
                                <label>Email:</label>
                                <TextField
                                    variant='outlined'
                                    label='enter your email'
                                    size='small'
                                    type='text'
                                    id='email'
                                    name='email'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    helperText='This is your registered email' />
                                <ErrorMessage name='email' component={TextError} />
                            </div>
                            <br></br>
                            <div>
                                <label>Password:</label>
                                <TextField
                                    variant='outlined'
                                    type={showPwd ? "text" : "password"}
                                    id='password'
                                    name='password'
                                    label='password'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    helperText='minimum 8 charecters recommended' />
                                <ErrorMessage name='password' component={TextError} />
                            </div>
                            <br></br>
                            <div>
                                <label>Confirm Password:</label>
                                <TextField
                                    variant='outlined'
                                    type={showPwd ? "text" : "password"}
                                    id='confirm'
                                    name='confirm'
                                    label='confirm'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.confirm}
                                    helperText='Enter same as above field' />
                                <ErrorMessage name='confirm' component={TextError} />
                            </div>
                            <div className='toggle'> <Button color='secondary' size='small' type='button' onClick={TogglePassword} startIcon={icon}>Show Password</Button></div>
                            <br></br>
                            <br></br>
                            <div>
                                <Button color='primary' variant='contained' disabled={formik.isSubmitting || !(formik.dirty && formik.isValid)} type='submit'>Submit</Button>|
                                <Button color='primary' variant='contained' type='reset' disabled={!formik.dirty}>Reset</Button>
                            </div>

                            <p>Already have an account? |
                                <Link style={{ textDecoration: 'none' }} to='/'> Sign In</Link>
                            </p>
                        </Form>
                    </div>
                )
            }}
        </Formik>
    )
}
export default SignUp