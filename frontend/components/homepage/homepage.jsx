import React from 'react';

class HomePage extends React.Component {


    render() {
    
        return(
            <div>
               <div>
                   This is the homepage
               </div>


                <hr className='footer-line'></hr>

                <footer className='footer-home'>
                    <p className='name'>John Robert McCann</p>
                    <a href="https://github.com/johnrobertmcc?tab=repositories">GitHub</a>
                    <a href="https://www.linkedin.com/in/jrmcc/">LinkedIn</a>
                    <a href='https://angel.co/u/john-robert-mccann'>AngelList</a>
                    
                </footer>
            </div>
        )
    }
}

export default HomePage;
