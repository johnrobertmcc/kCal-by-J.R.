import React from 'react';

class KcalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.kcal;
    debugger

    this.handleSubmit = this.handleSubmit.bind(this);
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
          <label>
            Count
            <input
              type='text'
              value={this.state.count}
              onChange={this.update('count')}
            />
          </label>
          <label>
            Meal
            <input
              type='text'
              value={this.state.meal}
              onChange={this.update('meal')}
            />
          </label>
          <label>
            Date
            <textarea
              value={this.state.date}
              onChange={this.update('date')}
            />
          </label>
          <button type='submit' value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default KcalForm;
