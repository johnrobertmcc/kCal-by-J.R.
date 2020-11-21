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
            height:{
                ft: '',
                in: '',
            },
            age: ''
            }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.calculateHeight = this.calculateHeight.bind(this);
    }

    componentWillUnmount(){
        this.props.removeErrors();
    }


    renderErrors(str) {

        let {errors} = this.props;

        if(errors.length > 0){
            for(let i = 0; i < errors[0].length; i++){
                debugger
                if(errors[0][i].toLowerCase().includes(str)){
                    debugger
                return (
                    <div className='errors active'> {`invalid :(`}</div>
                )
                }    
            }
        }else{
            return(
                <div className='errors inactive'></div>
            )
        }
    }
    
    calculateHeight(){
        let num = 0;
        num += parseInt(this.state.height.ft * 12);
        num += parseInt(this.state.height.in);

        return num > 0 ? num : '';
    }

    handleSubmit(e) {

        e.preventDefault();

        this.props.signUp(
            {
                password: this.state.password,
                email: this.state.email,
                fname: this.state.fname,
                lname: this.state.lname,
                weight: this.state.weight,
                age: this.state.age,
                height: this.calculateHeight(),

            }
        )
    }

    update(str) {
        if(!str.includes('height')){
            return e => { 
            this.setState( 
                    { [str] : e.target.value}
                )
            };
        }else{
            if(str == 'height1'){
                
                return e =>{
                    this.setState(
                        { height : {ft: e.target.value, in: this.state.height.in}}
                    )
                }
            }else if(str == 'height2'){
                   return e =>{
                    this.setState(
                        { height : {in : e.target.value, ft: this.state.height.ft}}
                    )
                }

            }
        }
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
                                    <input
                                        className='signup-input'
                                        type='text'
                                        placeholder='    Email'
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                    />
                            {this.renderErrors('email')}
                            <br></br>
                                    <input
                                        className='signup-input'
                                        type='password'
                                        value={this.state.password}
                                        placeholder='    Password'
                                        onChange={this.update('password')}
                                    />
                            {this.renderErrors('password')}
                              <br></br>
                                    <input
                                        className='signup-input'
                                        type='fname'
                                        value={this.state.fname}
                                        placeholder='    First Name'
                                        onChange={this.update('fname')}
                                    />
                            {this.renderErrors('fname')}
                              <br></br>
                                    <input
                                        className='signup-input'
                                        type='lname'
                                        value={this.state.lname}
                                        placeholder='    Last Name'
                                        onChange={this.update('lname')}
                                    />
                            {this.renderErrors('lname')}
                              <br></br>
                              <div className='height-params'>
                                    <input
                                        className='signup-input height'
                                        type='number'
                                        value={this.state.height.ft}
                                        size='4'
                                        placeholder='    Ft.'
                                        onChange={this.update('height1')}
                                    />
                                <br></br>
                                    <input
                                        className='signup-input height'
                                        type='number'
                                        size='4'
                                        value={this.state.height.in}
                                        placeholder='    In.'
                                        onChange={this.update('height2')}
                                    />
                                </div>
                                    {this.renderErrors('height')}
                                <input
                                    className='signup-input'
                                    type='weight'
                                    value={this.state.weight}
                                    placeholder='    Weight'
                                    onChange={this.update('weight')}
                                />
                                {this.renderErrors('weight')}
                              <br></br>
                            <input
                                className='signup-input'
                                type='age'
                                value={this.state.age}
                                placeholder='    Age'
                                onChange={this.update('age')}
                            />
                            {this.renderErrors('age')}
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