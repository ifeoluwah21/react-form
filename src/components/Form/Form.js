import React, { useState } from 'react'

import FormInput from './FormInput';
import Button from './Button';

import styles from "./Form.module.css";
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

function Form(props) {

    const [error, setError] = useState();
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    function changeUsernameHandler(event) {
        setUsername(event.target.value);
    }
    function changeAgeHandler(event) {
        setAge(event.target.value);
    }
    function submitHandler(event) {
        event.preventDefault();
        if (age.trim().length === 0 || username.trim().length === 0) {
            setError({ title: "Invalid Input", message: "Please enter a valid name and age (non empty values)." })
            return;
        }
        if (+age < 0) {
            setError({ title: "Invalid Age", message: "Please enter a valid age (>0)." })
            return;
        }
        const user = { username: username, age: age, id: Math.random().toString() };
        setAge(``);
        setUsername(``);
        props.onAddUser(user);
    }
    const errorHandler = () => {
        setError(null)
    }

    return (
        <Card>
            {error && <ErrorModal message={error.message} onErrorClose={errorHandler} title={error.title}></ErrorModal>}
            <form onSubmit={submitHandler} className={styles.form}>
                <FormInput label="name" title="Username" type="text" onChange={changeUsernameHandler} value={username} ></FormInput>
                <FormInput label="age" title="Age (Years)" type="number" onChange={changeAgeHandler} value={age} ></FormInput>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default Form