import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from '../Pages/TextError'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../Auth.css';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import forgotAut from '../BackEnd/ForgotAut'
Amplify.configure(awsconfig);

const initialValues = {
    email: ''
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


//substitute to writing validations
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Required!'),
})

function NewForm() {
    let navigate = useNavigate();
    const onSubmit = async (values, onSubmitProps) => {
        await sleep(1000);
        alert('Submitted')
        console.log('Submit Props', onSubmitProps)
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
        await forgotAut(values.email)
        navigate("/confirm");        
    }
    return (
        <div className='Box'>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
                {formik => {
                    return (
                        <Form>
                            <h1>Forgot Password:</h1>

                            <h3>A confirmation code will be sent to your email shortly.</h3><br></br>
                            <div>
                                <label className='Label'>Email:</label>
                                <TextField
                                    variant='outlined'
                                    label='email'
                                    size='small'
                                    type='text'
                                    id='email'
                                    name='email'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    helperText='Enter the email id registered to your account' />
                                <ErrorMessage name='email' component={TextError} />
                            </div>

                            <br></br>
                            <div>
                                <Button color='primary' variant='contained' disabled={formik.isSubmitting || !(formik.dirty && formik.isValid)} type='submit'>
                                    Submit
                                </Button>|
                                <Button color='primary' variant='contained' disabled={formik.isSubmitting || !(formik.dirty && formik.isValid)} type='submit'>
                                    Resend Code
                                </Button>
                            </div>
                            <br></br><br></br>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}
export default NewForm