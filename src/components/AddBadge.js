import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

export const AddBadge = () => {
    return (
        <div>
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
