import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = <div>Hola Mundo</div>;

    const guestLinks = <div>No autenticado</div>;

    return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
