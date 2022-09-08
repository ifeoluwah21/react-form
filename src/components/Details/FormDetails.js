import React from 'react';
import Card from '../UI/Card';
import FormDetail from './FormDetail';

import styles from "./FormDetails.module.css";

function FormDetails(props) {
    function selectUserHandler(id) {
        console.log(id);
        props.onDeleteUser(id);
    }
    return (
        <div className={styles.wrapper}>
            <Card>
                <ul>
                    {props.users.map(user => <FormDetail onSelectUser={selectUserHandler} userDetails={user} key={user.id} />)}
                </ul>
            </Card>
        </div>
    )
}

export default FormDetails;