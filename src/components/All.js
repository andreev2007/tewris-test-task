import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as actions from '../actions';
import PeopleList from "./PeopleList";

const All = (props) => {
    useEffect(() => {
        props.getAll()
    }, [])

    return (
        <div>
            <PeopleList people={[...props.female, ...props.male]}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actions)(All);
