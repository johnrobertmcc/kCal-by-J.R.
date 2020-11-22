import { connect } from 'react-redux';
import KcalForm from './kcal_form';
import { createCalory } from '../../actions/calory_actions';


const mapStateToProps = state => ({
  kcal: {
    count: '',
    date: '',
    user_id: state.entities.users[state.session.id].id,
    meal: ''
  },
  formType: 'Create'
});

const mapDispatchToProps = dispatch => ({
  action: calory => dispatch(createCalory(calory))
});

export default connect(mapStateToProps, mapDispatchToProps)(KcalForm);