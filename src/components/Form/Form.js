import React from 'react'

import FormInput from './FormInput';
import Button from './Button';

import styles from "./Form.module.css";
import Card from '../UI/Card';

function Form() {
    return (
        <Card>
            <form action="" className={styles.form}>
                <FormInput label="name" title="Username" type="text"></FormInput>
                <FormInput label="age" title="Age (Years)"></FormInput>
                <Button></Button>
            </form>
        </Card>
    )
}

export default Form