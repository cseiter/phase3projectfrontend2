import React from 'react';
import { Link } from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

export const EditBadge = () => {
    return (
    <div className="text-center" style={{maxWidth: "90%", margin: "10px auto", border: "2px solid green"}}>
    <h1>Edit Badge</h1>
    <Form>
        <FormGroup>
            <Label>Name</Label>
            <Input type="text" placeholder="enter badge name, with underscore replacing a space"></Input>
        </FormGroup>
        <Button type="submit">Update</Button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
    </Form>
    </div>
    )
}
