import React from 'react';
import { Link } from 'react-router-dom';
import {ListGroup, ListGroupItem, Button} from 'reactstrap';

export const BadgeList = () => {
    return (
        <ListGroup>
            <ListGroupItem className="d-flex">
                <strong>Badge 1</strong>
            <div className="ml-auto">
                <Link className="btn btn-warning" to="/edit/1">Edit</Link>
                <Button color="danger">X</Button>
            </div>
            </ListGroupItem>
        </ListGroup>
    )
}
