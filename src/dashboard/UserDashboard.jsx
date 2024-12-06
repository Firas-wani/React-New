import React, { useState, useEffect } from "react";
import { Card, Table, Spinner, Row, Col } from "react-bootstrap";
import api from "../utils/AxiosInstance";
import Authorized from "../authorized/Authorized";

const UserDashboard = () => {
  Authorized();
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await api.get("/user/getuser");
      setUser(res.data.userDetails);
      setOrders(res.data.userDetails.orders);
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []); // Fetch user data on mount

  // Function to format date as DD-MM-YYYY
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="container pt-5 pb-5" style={{ minHeight: "80vh" }}>
      {/* Page Header */}
      <Row className="mb-4">
        <Col>
          <h2>User Dashboard</h2>
          <p>Manage your account and order history</p>
        </Col>
      </Row>

      {/* User Details Section */}
      <Row className="mb-4">
        <Col md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>User Details</Card.Title>
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                <>
                  <p>
                    <strong>Name:</strong> {user.username || "N/A"}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email || "N/A"}
                  </p>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Order History Section */}
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Order History</Card.Title>
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : orders.length > 0 ? (
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>#Order Id</th>
                      <th>Order Date</th>
                      <th>Status</th>
                      <th>Order Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{formatDate(order.orderDate)}</td>
                        <td>{order.status}</td>
                        <td>₹{order.totalAmount} INR</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <p>No orders available.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserDashboard;
