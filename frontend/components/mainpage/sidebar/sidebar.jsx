import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';


class SideBar extends React.Component {

    constructor(props){
        super(props)

    }


    render() {
        let {user, logOut} = this.props;
        return(
        <div className='sidebar-container'>
            <div className='user-info'>
                Welcome back {user.fname}!
                <button onClick={logOut} className='btn logOut'>Log Out</button>
            </div>

            <div className='calendar'>
                <Calendar />
            </div>

            <div className='user-stats'>
                <h3 className='stats-title'>
                   Today
                </h3> 
                
                <p>
                    Weight: <br></br>
                    <span className='stats'>{user.weight}</span>
                </p> 
               
                <p>
                Remaining kCal : <br></br>
                <span className='stats'>{user.allotted}</span>
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
        </div>)
    }
};

export default SideBar;