import { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const AddTshirt = (props) => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productSize, setProductSize] = useState("Medium");
  const sizes = ["Small", "Medium", "Large"];
  const submitHandler = (event) => {
    event.preventDefault();
    const tshirt = {
      id: { productName, productPrice, productSize },
      name: productName,
      desc: description,
      price: productPrice,
      size: productSize,
    };
    props.onAddTshirt(tshirt);
    setProductName("");
    setDescription("");
    setProductPrice("");
    setProductSize("Medium");
  };
  return (
    <Container
      className="d-flex justify-content-center"
      style={{ marginTop: "15px" }}
    >
      <Form onSubmit={submitHandler}>
        <Row className="mx-0">
          <Col xs={12} sm={3} className="pr-0">
            <Form.Group controlId="productName" className="mb-0">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={productName}
                required
                onChange={(event) => setProductName(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={3} className="pr-0">
            <Form.Group controlId="productCategory" className="mb-0">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product description"
                value={description}
                required
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={3} className="pr-0">
            <Form.Group controlId="productPrice" className="mb-0">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product price"
                value={productPrice}
                required
                onChange={(event) => setProductPrice(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={3} className="pr-0">
            <Form.Group controlId="productSize" className="mb-0">
              <Form.Label>Size Available</Form.Label>
              <Form.Control
                as="select"
                value={productSize}
                onChange={(event) => setProductSize(event.target.value)}
              >
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} sm={3} className="d-flex align-items-end">
            <Button
              variant="success"
              type="submit"
              style={{ marginTop: "15px" }}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddTshirt;
