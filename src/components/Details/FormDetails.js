import React from 'react';
import Card from '../UI/Card';
import FormDetail from './FormDetail';

import styles from "./FormDetails.module.css";

function FormDetails(props) {
    return (
        <div className={styles.wrapper}>
            <Card>
                {props.users.map(user => <FormDetail username={user.username} age={user.age} />)}
            </Card>
        </div>
    )
}

export default FormDetails