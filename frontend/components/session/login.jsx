import React from 'react';
import { Link } from 'react-router-dom';


class LogInForm extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            password: '',
            email: '',
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
        
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.logIn(user)
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
                        <h1 className='form-title'>Log In</h1>
                            {this.renderErrors()}
                            <input
                                className='signup-input'
                                type='text'
                                placeholder='    Email'
                                value={this.state.email}
                                onChange={this.update('email')}
                                />

                            <br></br>
                            <br></br>
                            <input
                                className='signup-input'
                                type='password'
                                value={this.state.password}
                                placeholder='    Password'
                                onChange={this.update('password')}
                                />
                              <br></br>
                              <br></br>
                          
                            <button type='submit' className='signup-button'> Continue </button>
                        <p className='redirect'>Want to sign up?</p>
                   <Link to={{
                                pathname:`/`,
                                state: 
                                {
                                    toLogIn: true
                                }
                            }}
                            >
                                Sign Up

                    </Link>  
                    </form>
                <div className='modal-background'>
                </div>
            </div>
            </div>

        )
    }
};

export default LogInForm;