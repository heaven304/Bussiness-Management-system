import React from 'react';
import Layout from './Layout';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import './Header.css'



export default function Signin() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, 'Minimum 2 characters')
        .max(15, 'Maximum 15 characters')
        .required('Required!'),
      lastName: Yup.string()
        .min(2, 'Minimum 2 characters')
        .max(15, 'Maximum 15 characters')
        .required('Required!'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Required!'),
      password: Yup.string()
        .min(8, 'Minimum 8 characters')
        .required('Required!'),
      confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match')
        .required('Required!'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout>
      <div className="Mitesh container text-center">

        <form onSubmit={formik.handleSubmit}>
          <h1>Signin</h1>
          <div className='row d-flex justify-content-center'>
            <div className="col-lg-4 mt-4">
              {/* <label>First Name</label> */}
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="form-contorl"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <p>{formik.errors.firstName}</p>
              )}
            </div> <br />

            <div className="col-lg-4 mt-4">
              {/* <label>Last Name</label> */}
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="form-contorl"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <p>{formik.errors.lastName}</p>
              )}
            </div><br />

            <div className="col-lg-4 mt-4">
              {/* <label>Email</label> */}
              <input
                type="email"
                name="email"
                placeholder='Email'
                className="form-contorl"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <p>{formik.errors.email}</p>
              )}
            </div><br />

            <div className="col-lg-4 mt-4">
              {/* <label>Password</label> */}
              <input
                type="password"
                name="password"
                placeholder='Password'
                className="form-contorl"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password && (
                <p>{formik.errors.password}</p>
              )}
            </div><br />

            <div className="col-lg-4 mt-4">
              {/* <label>Confirm Password</label> */}
              <input
                type="password"
                name="confirm_password"
                placeholder='Confirm Password'
                className="form-contorl"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
              />
              {formik.errors.confirm_password &&
                formik.touched.confirm_password && (
                  <p>{formik.errors.confirm_password}</p>
                )}
            </div><br />

            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
