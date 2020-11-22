import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import Counter from '../counter/counter_container';



class SideBar extends React.Component {
    

    constructor(props){
        super(props)
        this.state={
            date: new Date().toDateString()
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(date){
    
        this.setState({date: date.toDateString()})
    }

    //  66 + (6.3 x body weight in lbs.) + (12.9 x height in inches) - (6.8 x age in years) = BMR
    calculateCal(){
        let BMR;
        BMR = (66 + (6.3*this.props.user.weight) + (12.9*this.props.user.height) - (6.8 * this.props.user.age))
        return BMR * 1.55;
    }

    logOut(){
        this.props.logOut().then(res => {

            window.location.reload(false)
        })
    }


    render() {
        let {user, logOut} = this.props;

        return(
        <div className='mainpage-container'>
            <div className='sidebar-container'>
                <div className='user-info'>
                    Welcome back {user.fname}!
                    <button onClick={() => this.logOut()} className='btn logOut'>Log Out</button>
                </div>

                <div className='calendar'>
                    <Calendar 
                    onChange={this.onChange}
                    />
                </div>

                <div className='user-stats'>
                    <h3 className='stats-title'>
                    Today
                    </h3> 
                    
                    <p>
                        Weight: <br></br>
                        <span className='stats'>{user.weight} lb</span>
                    </p> 
                
                    <p>
                    Goal : <br></br>
                    <span className='stats'>{this.calculateCal()} kCal</span>
                       <br></br>
                        <p className='italic'>this is calculated based on your BMR, and assumes that you exercise 3-5 times a week :)</p>
                    </p> 
                </div>

                <div className='links-container sidebar'>
                <hr className='line sidebar'></hr>

                    <a href="https://johnrobertmcc.com" className='links footer' target='_blank'> by J.R.</a>
                    <br></br>
                    <a href="https://github.com/johnrobertmcc?tab=repositories" className='links footer' target='_blank'>GitHub</a>
                    <a href="https://www.linkedin.com/in/jrmcc/" className='links footer' target='_blank'>LinkedIn</a>
                    <a href='https://angel.co/u/john-robert-mccann' className='links footer' target='_blank'>AngelList</a>
                </div>
                </div>
                <div>
                    <Counter date={this.state.date} allotted={this.calculateCal()} user={this.props.user}/>
                </div>
            </div>)
    }
};

export default SideBar;