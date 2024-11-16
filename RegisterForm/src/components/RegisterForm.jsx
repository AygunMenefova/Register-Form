import React from 'react'
import { useFormik } from 'formik';
import { RegisterFormSchemas } from '../schemas/RegisterForm.Shemas';

function RegisterForm() {

    const submit = (values, action) => {
        setTimeout(() => {
            action.resetForm();
        }, 2000)
    }

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            term: ''
        },
        validationSchema: RegisterFormSchemas,
        onSubmit: submit
    });
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div style={{textAlign:'center',marginLeft:'200px',fontStyle:'italic',textDecoration:'underline'}}>
                    <h3>Registration Form</h3>
                </div>

                <div className='inputDiv'>
                    <label>Email</label>
                    <input type="text" id='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange} />
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>

                <div className='inputDiv'>
                    <label>Age</label>
                    <input type="number" id='age'
                        placeholder='Enter your age'
                        value={values.age}
                        onChange={handleChange} />
                    {errors.age && <p className='error'>{errors.age}</p>}
                </div>

                <div className='inputDiv'>
                    <label >Password</label>
                    <input type="password" id='password'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange} />
                    {errors.password && <p className='error'>{errors.password}</p>}
                </div>

                <div className='inputDiv'>
                    <label> Repeat password</label>
                    <input type="password" id='confirmPassword'
                        placeholder='Repeat password'
                        value={values.confirmPassword}
                        onChange={handleChange} />
                    {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
                </div>

                <div className='inputDiv'>
                    <div className='check'>
                        <input style={{ width: '20px', height: '12px' }} type="checkbox" id='term'
                            value={values.term}
                            onChange={handleChange} />
                        <label>I accept the user agreement</label>
                    </div>
                    {errors.term && <p className='error'>{errors.term}</p>}
                </div>

                <button type='submit' className='btn'>Save</button>
            </form>
        </div>
    )
}

export default RegisterForm