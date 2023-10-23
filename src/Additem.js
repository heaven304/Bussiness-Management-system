import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import Sidebar from './Sidebar'
import './login.css'

export default function Additem() {


    const formik = useFormik({
        initialValues: {
            shop_name: "",
            email: "",
            contec: "",
            confirm_password: ""
        },
        validationSchema: Yup.object({
            full_name: Yup.string()
                .min(2, "Mininum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            contec: Yup.string()
                .min(8, "Minimum 8 characters")
                .required("Required!"),
            confirm_password: Yup.string()
                .oneOf([Yup.ref("password")], "Password's not match")
                .required("Required!")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <>
            <Sidebar />
            <div className='hk' id='b'>
                <div className='Home' id='a'>
                    <div className='box'>
                        <div className='box_show'>
                            <h3>bill from</h3>
                            <label> SHOP NAME </label> <br />
                            <input type='text' name='shopname' className='in_size' />
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}
