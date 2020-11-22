import { connect } from 'react-redux';
import KcalForm from './kcal_form';
import { createCalory } from '../../actions/calory_actions';


const mapStateToProps = (state, ownProps) => {

  return(
  {kcal: {
    count: '',
    date: new Date(ownProps.date),
    user_id: state.entities.users[state.session.id].id,
    meal: ''
  },
  formType: 'Add New'}
)};

const mapDispatchToProps = dispatch => ({
  action: calory => dispatch(createCalory(calory))
});

export default connect(mapStateToProps, mapDispatchToProps)(KcalForm);