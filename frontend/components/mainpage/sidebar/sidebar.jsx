import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import Counter from '../counter/counter_container';



class SideBar extends React.Component {
    

    constructor(props){
        super(props)
        this.state={
            date: new Date().toDateString(),
            user: this.props.user,
            update: false
        }

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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


    handleSubmit(e) {
        e.preventDefault();
        debugger

        this.props.updateUser(this.state.user);
        this.setState({
        user: this.props.user,
        update: false
        })
    }

    handler(){
        this.setState({update:true})
    }

    update(field) {
        debugger
        return e => this.state.user.weight = e.currentTarget.value;
    }


    render() {
        let {user} = this.props;

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
                    
                    <div>
                        Weight: <br></br>
                        <span className='stats' onDoubleClick={() => this.handler()}>
                            {
                        this.state.update ? 
                        <form onSubmit={this.handleSubmit} >
                            <input type='number' placeholder={this.state.user.weight} onChange={this.update('weight')} className='weight-input'></input>
                            <button className='weight-btn'>Edit</button>
                        </form> 
                        
                        : user.weight
                        } 
                        
                        lb</span>
                    </div> 
                
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