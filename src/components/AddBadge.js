import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

export const AddBadge = () => {
    return (
        <div className="text-center" style={{maxWidth: "90%", margin: "10px auto", border: "2px solid green"}}>
            <h1> Add Badge</h1>
            <Form>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" placeholder="enter badge name, with underscore replacing a space"></Input>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}
