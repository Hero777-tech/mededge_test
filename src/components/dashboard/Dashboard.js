import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from '../../actions/userActions';
import { Typography, Container, Paper } from '@mui/material';

const Dashboard = ({ userData, fetchUserData }) => {
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {userData.name}</p>
      <p>Role: {userData.role}</p>
      <p>Specialization: {userData.specialization}</p>
      <p>Number of Patients: {userData.patients}</p>
      <p>Research Projects: {userData.researchProjects}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.user.userData
});

export default connect(mapStateToProps, { fetchUserData })(Dashboard);