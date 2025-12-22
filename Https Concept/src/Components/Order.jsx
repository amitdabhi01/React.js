import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

const Order = ({ onHide, onShow }) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const handleOrderData = async () => {
      try {
        const res = await axios("http://localhost:5000/orders");

        const data = res.data;

        setOrder(data);

        // console.log(data);
        
      } catch (error) {
        console.log(error.message);
      }
    };

    handleOrderData();
  }, []);

  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={onShow}
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Orders
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {order.length === 0 ? (<p>Your Order Cart is Empty</p>) :(
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Order</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Total Amount</th>
                            <th className="text-center" colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>
                                    {order.cart.map((item, index) => (
                                        <ul key={index}>
                                            <li>{item.name}</li>
                                            <small>{item.quantity} ✖️ ₹{item.price}</small>
                                        </ul>
                                    ))}
                                </td>
                                <td>{order.status}</td>
                                <td>
                                    {new Date(order.createdAt).toLocaleString()}
                                </td>
                                <td>{order.totalAmount}</td>
                                <td>
                                    <Button variant="success">Update</Button>
                                </td>
                                <td>
                                    <Button variant="danger">Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Order;
