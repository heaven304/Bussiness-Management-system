import React from 'react'

import { useFormik } from "formik";
import * as Yup from "yup";
import './login.css'

export default function Login() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",

        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Mininum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),

        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <>

            <div class="container  divv">
                <div class="card">
                    <h2>Login Form</h2>

                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" />

                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" />

                    <button type="submit">Login</button>

                </div>
            </div>


        </>

    )
}
