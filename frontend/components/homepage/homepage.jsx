import React from 'react';
import {Link} from 'react-router-dom';
import SignUp from '../session/session_container';
import LogIn from '../session/login_container';


class HomePage extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            openSignUp: false,
            openLogIn : false
        }
    }

    openModal(str){
        this.setState({
            [str]: true
        })
    }

    signUpModal(){

        if(this.state.openSignUp){
                 this.setState(
                {
                    openLogIn: false
                }
            )
            return (<div>
                <SignUp />
            </div>)
        }else{
            return null
        }
    }

    logInModal(){
        if(this.state.openLogIn){
            this.setState(
                {
                    openSignUp: false
                }
            )
            return (<div>
                <LogIn />
            </div>)
        }else{
            return null
        }

    }

    closeModals(){

        if(this.state.openLogIn || this.state.openSignUp){
        this.setState(
            {
                openLogIn: false,
                openSignUp: false
            }
        )}
    }
    render() {
    
        return(
            <div>
               <div className='header-homepage'>
                   <div className='logo'>
                    <p>kCal by <a href='https://johnrobertmcc.com' target='_blank' className='links header'>J.R.</a></p>
                   </div>
                   <div className='head-session'>
                        <div onClick={() => this.openModal('openSignUp')}className='links header signup'>Sign Up </div>
                        <div className='links header signup' onClick={() => this.openModal('openLogIn')}>Log In</div>
                   </div>
               </div>

               <hr className='line header'></hr>
               <div className='first-level'>

                    <div 
                    className={this.state.openSignUp ? 'home-opaque' : 'home-image'}
                    onClick={() => this.closeModals()}
                    >
                        {this.signUpModal()}
                        {this.logInModal()}
                       
                    </div> 

                   

               </div>


                <hr className='line footer'></hr>

                <footer className='footer-home'>
                    <div>

                    <p className='name'>
                        <span className='created'>created by</span>
                        <br></br>
                        <a href='https://johnrobertmcc.com' target='_blank' className='links'>J.R. McCann </a>
                    </p>
                    </div>
                    <div className='links-container'>

                        <a href="https://github.com/johnrobertmcc?tab=repositories" className='links' target='_blank'>GitHub</a>
                        <a href="https://www.linkedin.com/in/jrmcc/" className='links footer' target='_blank'>LinkedIn</a>
                        <a href='https://angel.co/u/john-robert-mccann' className='links footer' target='_blank'>AngelList</a>
                    </div>
                    
                </footer>
            </div>
        )
    }
}

export default HomePage;
