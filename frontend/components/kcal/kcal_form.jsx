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
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
      
            <input
              placeholder='How many kCal?'
              type='number'
              value={this.state.count}
              onChange={this.update('count')}
            />
   
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

          <button type='submit' value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default KcalForm;
