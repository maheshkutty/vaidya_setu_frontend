import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

function RequireAuth({ children, auth }) {
  if (auth.id === "" || auth.id === undefined) return <Navigate to="/login" />;
  return children;
}

const mapStateToProps = (state) => {
  return { auth: state.userSession };
};

export default connect(mapStateToProps)(RequireAuth);
