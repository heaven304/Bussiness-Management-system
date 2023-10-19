import React from "react";
import ReactDOM from "react-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

import "./styles.css";

export default function Signin2() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            remember: false
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(5, "Must be 5 characters or less")
                .required("Required"),
            password: Yup.string()
                .min(8, "Must be 8 characters or less")
                .required("Required"),
            remember: Yup.boolean().oneOf([true], "Must agree the term")
        }),
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }
    });
    return (
        <>
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

                                        <div className="card card-outline-secondary">
                                            <div className="card-header">
                                                <h3 className="mb-0">Login</h3>
                                            </div>
                                            <div className="card-body">
                                                <form className="form" onSubmit={formik.handleSubmit}>
                                                    <div className="form-group">
                                                        <label for="username">username</label>
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




        </>
    );
}

