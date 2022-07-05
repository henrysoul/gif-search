import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import Layout from "../layout/Layout";
export default function SearchGif() {
  return (
    <Layout>
      <Container className="mt-5">
        <Card>
          <Card.Body>
            {" "}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter search parameter"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
}
