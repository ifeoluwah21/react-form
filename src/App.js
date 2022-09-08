import React, { useState } from 'react';

import Form from './components/Form/Form';
import FormDetails from './components/Details/FormDetails';

import styles from './App.module.css';

const FORM_DATA = [
  { username: "Ifeoluwa", age: 20 },
  { username: "Motunrayo", age: 20 },
  { username: "Doyin", age: 19 },
  { username: "Favour", age: 30 }
]

function App() {
  const [formData, setFormData] = useState(FORM_DATA)
  return (
    <div className={styles.app}>
      <Form></Form>
      <FormDetails users={formData}></FormDetails>
    </div>
  );
}

export default App;
