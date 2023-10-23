import Layout from './Layout';
import Sidebar from './Sidebar';
import './Sidebar.css';
import './App.css';
import { Modal, Button, Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import { CacheProvider } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const muiCache = createCache({
    key: 'mui-datatables',
    prepend: true
});


export default function Home() {
    const columns = [
        {
            name: 'description',
            label: 'Description',
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: 'quantity',
            label: 'Quantity',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'owner',
            label: 'Owner',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'price',
            label: 'Price',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'total',
            label: 'Total',
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    const quantity = tableMeta.rowData[columns.findIndex(col => col.name === 'quantity')];
                    const price = tableMeta.rowData[columns.findIndex(col => col.name === 'price')];
                    const total = quantity * price;
                    return total;
                },
            },
        },
        {
            label: "Delete",
            name: 'id',
            options: {
                filter: true,
                sort: false,
                customBodyRender: (values) => {
                    return (
                        <button onClick={() => removeItem(values)}>Delete</button>
                    )
                }
            }
        },
        {
            label: 'Edit',
            name: 'id',
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => (
                    <button onClick={() => handleEdit(value)}>Edit</button>
                ),
            },
        },
    ];

    const options = {
        filterType: 'checkbox',
    };

    const [showModal, setShowModal] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [invoiceItems, setInvoiceItems] = useState([
        { id: 1, description: 'Item 1', quantity: 2, price: 10 },
        { id: 2, description: 'Item 2', quantity: 1, price: 20 },
    ]);

    const formik = useFormik({
        initialValues: {
            description: '',
            quantity: 1,
            price: 0,
            id: Date.now()
        },
        onSubmit: (values, { resetForm }) => {
            if (editItem) {
                const updatedItems = invoiceItems.map((item) =>
                    item.id === editItem.id ? { ...item, ...values } : item
                );
                setInvoiceItems(updatedItems);
                setEditItem(null);
            } else {
                setInvoiceItems([...invoiceItems, { ...values }]);
            }
            resetForm();
            setShowModal(false);
        },
    });

    const handleShowModal = () => {
        formik.resetForm();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        formik.resetForm();
        setShowModal(false);
    };

    const removeItem = (id) => {
        const updatedItems = invoiceItems.filter((item) => item.id !== id);
        setInvoiceItems(updatedItems);
    };

    const handleEdit = (id) => {
        const itemToEdit = invoiceItems.find(item => item.id === id);
        setEditItem(itemToEdit);
        setShowModal(true);
        formik.setValues({
            description: itemToEdit.description,
            quantity: itemToEdit.quantity,
            price: itemToEdit.price,
        });
    };
    const calculateTotal = () => {
        return invoiceItems.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    return (
        <div>
            <Sidebar />
            <div className="hk" id="b">
                <div className="Home" id="a">
                    <h1>Invoice Billing System</h1>
                    <button onClick={handleShowModal}>Add New Item</button>
                    <CacheProvider value={muiCache}>
                        <ThemeProvider theme={createTheme()}>
                            <MUIDataTable data={invoiceItems} columns={columns} options={options} />
                        </ThemeProvider>
                    </CacheProvider>

                    <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>{editItem ? 'Edit Item' : 'Add New Item'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Description"
                                        name="description"
                                        value={formik.values.description}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Quantity"
                                        name="quantity"
                                        value={formik.values.quantity}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Price"
                                        name="price"
                                        value={formik.values.price}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Group>
                                <Button variant="secondary" onClick={handleCloseModal}>
                                    Cancel
                                </Button>
                                <Button variant="primary" type="submit">
                                    {editItem ? 'Save Changes' : 'Add Item'}
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>

                    <div className="total">
                        <h2>Total: {calculateTotal()}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
