import React, { useState } from 'react'
import Layout from './Layout'
import Sidebar from './Sidebar'
import './Sidebar.css'

import './App.css';

export default function Home() {

    const ShowData = () => {
        console.log('first')
    }

    const HandalClick = () => {

    }

    const [invoiceItems, setInvoiceItems] = useState([
        { id: 1, description: 'Item 1', quantity: 2, price: 10 },
        { id: 2, description: 'Item 2', quantity: 1, price: 20 },
    ]);

    const [newItem, setNewItem] = useState({ description: '', quantity: 1, price: 0 });

    const addNewItem = () => {
        setInvoiceItems([...invoiceItems, { ...newItem, id: invoiceItems.length + 1 }]);
        setNewItem({ description: '', quantity: 1, price: 0 });
    };

    const removeItem = (id) => {
        const updatedItems = invoiceItems.filter((item) => item.id !== id);
        setInvoiceItems(updatedItems);
    };

    const calculateTotal = () => {
        return invoiceItems.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    return (



        <>
            <Sidebar />
            <div className='hk' id='b'>



                <div className='Home' id='a'>
                    <h1>Invoice Billing System</h1>
                    <h2 onClick={HandalClick}>Add New Item</h2>
                    <div className="new-item-form">
                        <input
                            type="text"
                            placeholder="Description"
                            value={newItem.description}
                            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Quantity"
                            value={newItem.quantity}
                            onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            value={newItem.price}
                            onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
                        />
                        <button onClick={addNewItem}>Add Item</button>
                    </div>


                    <div className="App">

                        <div className="invoice">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoiceItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.description}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity * item.price}</td>
                                            <td>
                                                <button onClick={() => removeItem(item.id)}>Remove</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                        <div className="total">
                            <h2>Total: {calculateTotal()}</h2>
                        </div>


                    </div>





                </div>
            </div>
        </>


    )
}
