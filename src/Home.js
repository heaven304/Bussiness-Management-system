import Layout from './Layout';
import Sidebar from './Sidebar';
import './Sidebar.css';
import './App.css';
import { Modal, Button, Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
    const [newItem, setNewItem] = useState({ description: '', quantity: 1, price: 0 });

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
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
    };

    const handleSaveEdit = () => {
        const updatedItems = invoiceItems.map(item => {
            if (item.id === editItem.id) {
                return editItem;
            }
            return item;
        });
        setInvoiceItems(updatedItems);
        setShowModal(false);
    };

    const handleCancelEdit = () => {
        setShowModal(false);
    };

    const handleAddItem = () => {
        setInvoiceItems([...invoiceItems, { ...newItem, id: Date.now() }]);
        setNewItem({ description: '', quantity: 1, price: 0 });
        setShowModal(false);
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
                            <Form>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Description"
                                        value={editItem ? editItem.description : newItem.description}
                                        onChange={(e) =>
                                            editItem
                                                ? setEditItem({ ...editItem, description: e.target.value })
                                                : setNewItem({ ...newItem, description: e.target.value })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Quantity"
                                        value={editItem ? editItem.quantity : newItem.quantity}
                                        onChange={(e) =>
                                            editItem
                                                ? setEditItem({ ...editItem, quantity: parseInt(e.target.value) })
                                                : setNewItem({ ...newItem, quantity: parseInt(e.target.value) })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Price"
                                        value={editItem ? editItem.price : newItem.price}
                                        onChange={(e) =>
                                            editItem
                                                ? setEditItem({ ...editItem, price: parseFloat(e.target.value) })
                                                : setNewItem({ ...newItem, price: parseFloat(e.target.value) })
                                        }
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={editItem ? handleCancelEdit : handleCloseModal}>
                                Cancel
                            </Button>
                            <Button
                                variant="primary"
                                onClick={editItem ? handleSaveEdit : handleAddItem}
                            >
                                {editItem ? 'Save Changes' : 'Add Item'}
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <div className="total">
                        <h2>Total: {calculateTotal()}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
