import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import {ListGroup, ListGroupItem, Button} from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

export const BadgeList = () => {
    const { badges } = useContext(GlobalContext);
    console.log(badges);
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
