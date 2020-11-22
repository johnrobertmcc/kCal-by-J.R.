import React from 'react';
import { connect } from 'react-redux';
import KcalForm from './kcal_form';
import {fetchCalory, updateCalory} from '../../actions/calory_actions';

class EditKcal extends React.Component {

  render() {
    const { action, formType, kcal } = this.props;

    if (!kcal) return null;
    return (
      <KcalForm
        action={action}
        formType={formType}
        kcal={kcal} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  formType: 'Update'
});

const mapDispatchToProps = dispatch => ({
  fetchCalory: calory => dispatch(fetchCalory(calory)),
  action: calory => dispatch(updateCalory(calory))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditKcal);