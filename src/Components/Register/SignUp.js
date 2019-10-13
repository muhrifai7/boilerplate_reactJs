import React from 'react';
import {Link} from 'react-router-dom'
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';



const SignUp = ()=> (
    <Grid centered columns={2}>
        <Grid.Column>
        <Header as="h2" textAlign="center">
            SignUp
        </Header>
        <Segment>
            <Form size="large">
            <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="User Name"
            />
            <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Email "
            />
            <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
            />
            <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Confirm Password"
                type="password"
            />
            <Button color="blue" fluid size="large">
                SingUp
            </Button>
            </Form>
        </Segment>
        <Message>
            Have ready an account? <Link to="/login">Login</Link>
        </Message>
        </Grid.Column>
    </Grid>
)
export default SignUp