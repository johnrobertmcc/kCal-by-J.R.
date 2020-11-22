import React from 'react';
import { Link } from 'react-router-dom';
import CreateKcal from '../../kcal/create_kcal_container'


class Counter extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            breakfast : this.filterkCal("Breakfast"),
            lunch : this.filterkCal("Lunch"),
            dinner : this.filterkCal("Dinner"),
            snacks : this.filterkCal("Snacks"),
        }

        this.sumDaily = this.sumDaily.bind(this);
        this.filterkCal = this.filterkCal.bind(this);
    }


    componentDidUpdate(prevProps){
        if(prevProps.date !== this.props.date || prevProps.calories.length !== this.props.calories.length){
            this.setState({
                breakfast : this.filterkCal("Breakfast"),
                lunch : this.filterkCal("Lunch"),
                dinner : this.filterkCal("Dinner"),
                snacks : this.filterkCal("Snacks"),
            })
        }

        if(prevProps.allKCal.length !== this.props.allKCal.length){
            this.props.fetchCalories(this.props.userId)
        }
    }


    filterkCal(meal){

        let list = {[meal] : 0};
        let {date} = this.props;

        this.props.calories.map(entity => {
            let temp = new Date(entity.date).toLocaleDateString();
            if(entity.meal == meal && date == temp){
                list[meal] = list[meal] + entity.count;
            }
        })

    
       if(list[meal] !== 0){
               return(
                list[meal]
               )
        }else{
            return(
                0
            )
        }
    }

    sumDaily(){
        return(
            this.props.allotted - this.state.breakfast - this.state.lunch - this.state.dinner - this.state.snacks
        )

    }

    sumClass(){
        if((this.sumDaily() - this.props.allotted)*-1 > this.props.allotted){
            return 'red'
        }else{
            return 'green'
        }
    }


    render() {
        return(
        <div className='counter-container'>
            <div className='dashboard'>
                <div className='date'>
                    {this.props.date}
                </div>

                <div className='remaining-kcal'>
                    <span className='remain' >Remaining kCal :<p className={this.sumClass()}>{this.sumDaily()}</p></span> 
                </div>
            </div>

            <div className='flex-counter'>

                <div className='eats'>
                    <div className='total'>
                        <h3>Total kCal</h3>
                        <p className={this.sumClass()}>{(this.sumDaily() - this.props.allotted)*-1}</p>
                    </div>

                    <hr className='line total'>
                    </hr>
        
                    <div>
                    <h3>Breakfast</h3>
                    {this.state.breakfast}

                    </div>
                    <div>
                    <h3>Lunch</h3>
                    {this.state.lunch}

                    </div>
                    <div>
                    <h3>Dinner</h3>
                    {this.state.dinner}

                    </div>
                    <div>
                    <h3>Snacks</h3>
                    {this.state.snacks}

                    </div>
                
                </div>

               
                    <CreateKcal date={this.props.date}/>
            </div>

        </div>
        )
    }
};

export default Counter;