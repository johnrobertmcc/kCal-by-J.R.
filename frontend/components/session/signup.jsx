import React from 'react';
import { Link } from 'react-router-dom';


class SignUpForm extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            password: '',
            email: '',
            fname: '',
            lname: '',
            weight: '',
            height:'',
            age: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount(){
        this.props.removeErrors();
    }


    renderErrors() {

        if(this.props.errors.length > 0){
            return (
                <ul className='errors-ul'>
                    {   this.props.errors.map((error, i) => (
                        <li className='errors-li' key={i}> {error} </li>
                    ))}
                </ul>
        )}
    }
    
    handleSubmit(e) {
        debugger
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signUp(user)
    }

    update(str) {
        return e => { 
           this.setState( 
               { [str] : e.target.value}
           )
        };
    }

    render() {

        return (
            <div id='wrapper'>


            <div className='form signup'>
                    <form 
                        className='session-form'
                        onSubmit={this.handleSubmit}
                    >
                        <h1 className='form-title'>Sign Up</h1>
                            {this.renderErrors()}
                            <input
                                className='signup-input'
                                type='text'
                                placeholder='    Email'
                                value={this.state.email}
                                onChange={this.update('email')}
                                />
                            <br></br>
                            <input
                                className='signup-input'
                                type='password'
                                value={this.state.password}
                                placeholder='    Password'
                                onChange={this.update('password')}
                                />
                              <br></br>
                            <input
                                className='signup-input'
                                type='fname'
                                value={this.state.fname}
                                placeholder='    First Name'
                                onChange={this.update('fname')}
                                />
                              <br></br>
                            <input
                                className='signup-input'
                                type='lname'
                                value={this.state.lname}
                                placeholder='    Last Name'
                                onChange={this.update('lname')}
                                />
                              <br></br>
                            <input
                                className='signup-input'
                                type='height'
                                value={this.state.height}
                                placeholder='    Height'
                                onChange={this.update('height')}
                                />
                              <br></br>
                            <input
                                className='signup-input'
                                type='weight'
                                value={this.state.weight}
                                placeholder='    Weight'
                                onChange={this.update('weight')}
                                />
                              <br></br>
                            <input
                                className='signup-input'
                                type='age'
                                value={this.state.age}
                                placeholder='    Age'
                                onChange={this.update('age')}
                                />
                              <br></br>
                              <br></br>

                            
                            <button type='submit' className='signup-button'> Continue </button>
                        <p className='redirect'>Already have an account?</p>
                    <Link to='/'className='links session'>Sign in</Link>
                    </form>
                <div className='modal-background'>
                </div>
            </div>
            </div>

        )
    }
};

export default SignUpForm;