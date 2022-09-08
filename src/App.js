import React, { useState } from 'react';

import Form from './components/Form/Form';
import FormDetails from './components/Details/FormDetails';

import styles from './App.module.css';

const FORM_DATA = [];

function App() {
  const [formData, setFormData] = useState(FORM_DATA)
  function addUserHandler(user) {
    setFormData(prevState => [user, ...prevState]);
  }
  function deleteUserHandler(id) {
    setFormData(prevState => prevState.filter(user => user.id !== id));
  }
  return (
    <div className={styles.app}>
      <Form onAddUser={addUserHandler}></Form>
      <FormDetails onDeleteUser={deleteUserHandler} users={formData}></FormDetails>
    </div>
  );
}

export default App;
