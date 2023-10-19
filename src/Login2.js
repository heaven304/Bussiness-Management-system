import React from "react";
import ReactDOM from "react-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

import "./styles.css";

export default function Signin2() {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            contactNumber: "",
            remember: false
        },

        validationSchema: Yup.object({
            username: Yup.string()
                .min(5, "Must be 5 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Email should be in the right format")
                .required("Required"),
            password: Yup.string()
                .min(8, "Must be 8 characters or less")
                .required("Required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Required"),
            contactNumber: Yup.string()
                .matches(/^\d{10}$/, "Contact number must be 10 digits")
                .required("Required"),
            remember: Yup.boolean().oneOf([true], "Must agree to the terms")
        }),

        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                // Send the code using the contact number (values.contactNumber)
                // You can add your code sending logic here.
                setSubmitting(false);
            }, 400);
        },

    });
    return (
        <div class="context">
            <div class="area" >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <div className="root">
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <span className="anchor" id="formLogin" />
                                    <div className="card card-outline-secondary form-card">
                                        <div className="card-header">
                                            <h3 className="mb-0">Login</h3>
                                        </div>

                                        <div className="card-body">
                                            <form className="form" onSubmit={formik.handleSubmit}>
                                                <div className="form-group">
                                                    <label for="username">Username</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        {...formik.getFieldProps("username")}
                                                    />
                                                    {formik.touched.username && formik.errors.username ? (
                                                        <div className="is-invalid">{formik.errors.username}</div>
                                                    ) : null}
                                                </div>
                                                <div className="form-group">
                                                    <label for="email">Email</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        {...formik.getFieldProps("email")}
                                                    />
                                                    {formik.touched.email && formik.errors.email ? (
                                                        <div className="is-invalid">{formik.errors.email}</div>
                                                    ) : null}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="contactNumber">Contact Number</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        {...formik.getFieldProps("contactNumber")}
                                                    />
                                                    {formik.touched.contactNumber && formik.errors.contactNumber ? (
                                                        <div className="is-invalid">{formik.errors.contactNumber}</div>
                                                    ) : null}
                                                </div>
                                                <div className="form-group">
                                                    <label for="password">Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        autocomplete="new-password"
                                                        {...formik.getFieldProps("password")}
                                                    />
                                                    {formik.touched.password && formik.errors.password ? (
                                                        <div className="is-invalid">{formik.errors.password}</div>
                                                    ) : null}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        {...formik.getFieldProps("confirmPassword")}
                                                    />
                                                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                                        <div className="is-invalid">{formik.errors.confirmPassword}</div>
                                                    ) : null}
                                                </div>


                                                <div className="form-check small">
                                                    <label className="form-check-label">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            {...formik.getFieldProps("remember")}
                                                        />{" "}
                                                        <span>Agree to login in private computer</span>
                                                        {formik.touched.remember && formik.errors.remember ? (
                                                            <div className="is-invalid">{formik.errors.remember}</div>
                                                        ) : null}
                                                    </label>
                                                </div>
                                                <div className="d-flex justify-content-center">

                                                    <button
                                                        type="submit"
                                                        className="btn btn-success btn-lg float-right"
                                                    >
                                                        Login
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul >
            </div >

        </div >
    );
}

