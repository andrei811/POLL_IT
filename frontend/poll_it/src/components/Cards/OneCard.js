import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


function OneCard(props) {

    return (
        <>
            <Card style={{ width: "18rem", margin: "2rem 2rem 0 2rem" }}>
                <Card.Body>
                    <Card.Title>{props.Question}</Card.Title>
                    <Card.Text>Make a choice</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {props.Options.map((opt) => {
                        return (<ListGroup.Item>
                            <Form.Check
                                id={`default`}
                                label={opt} />
                        </ListGroup.Item>
                        );
                    })}
                </ListGroup>
                <Card.Body id="bodyParentCardLink">
                    <Button>Vote</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default OneCard;