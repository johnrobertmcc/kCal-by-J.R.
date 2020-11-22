import React from 'react';

class KcalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.kcal;

    this.handleSubmit = this.handleSubmit.bind(this);
    debugger
  }

  componentDidUpdate(prevProps){
    if(prevProps.date !== this.props.date){
      let {date} = this.props;
      this.setState({
        date

      })
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.action(this.state);

  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {

    return (
       <div className='kcal-form'>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
      
            <input
              placeholder='How many kCal?'
              type='number'
              value={this.state.count}
              onChange={this.update('count')}
            />
            <br></br>
   
            <select
              value={this.state.meal}
              onChange={this.update('meal')}
            >
              <option value="default"> --Pick One-- </option>
              <option value="Breakfast"> Breakfast </option>
              <option value="Lunch"> Lunch </option>
              <option value="Dinner"> Dinner </option>
              <option value="Snacks"> Snacks </option>
            </select>
            <br></br>

          <button type='btn submit' value={this.props.formType}>Submit</button>
        </form>
      </div>
    );
  }
}

export default KcalForm;
