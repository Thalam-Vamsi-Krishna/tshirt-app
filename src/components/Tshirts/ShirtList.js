import { useContext } from "react";
import { Table, Button, Container } from "react-bootstrap";
import CartContext from "../Store/CartContext";

const ShirtList = (props) => {
  const { tshirts } = props;
  const cartCtx = useContext(CartContext);
  return (
    <Container className="mx-auto my-4">
      <Table hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Size</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tshirts.map((tshirt, index) => (
            <tr key={index}>
              <td>{tshirt.name}</td>
              <td>{tshirt.desc}</td>
              <td>{tshirt.price}</td>
              <td>{tshirt.size}</td>
              <td>
                <Button
                  variant="danger"
                  style={{ marginRight: "15px" }}
                  onClick={() => cartCtx.addItem(tshirt, 3)}
                >
                  Buy Large
                </Button>
                <Button
                  variant="danger"
                  style={{ marginRight: "15px" }}
                  onClick={() => cartCtx.addItem(tshirt, 2)}
                >
                  Buy Medium
                </Button>
                <Button
                  variant="danger"
                  onClick={() => cartCtx.addItem(tshirt, 1)}
                >
                  Buy Small
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ShirtList;
