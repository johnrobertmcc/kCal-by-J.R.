import React from 'react';
import { Link } from 'react-router-dom';
import CreateKcal from '../../kcal/create_kcal_container'


class Counter extends React.Component {


    render() {
        return(
        <div className='counter-container'>
            <div className='dashboard'>
                Selected Date
            </div>

            <div className='flex-counter'>

                <div className='eats'>
        
                    <div>
                    <h3>Breakfast</h3>

                    </div>
                    <div>
                    <h3>Lunch</h3>

                    </div>
                    <div>
                    <h3>Dinner</h3>

                    </div>
                    <div>
                    <h3>Snacks</h3>

                    </div>
                
                </div>

                <div className='kcal-form'>
                    <CreateKcal />
                </div>
            </div>

        </div>
        )
    }
};

export default Counter;