import React, {useEffect} from 'react';
import {connect} from "react-redux";
import * as actions from '../actions';
import PeopleList from "./PeopleList";

const Male = (props) => {
    useEffect(() => {
        props.getMale()
    }, [])

    return (
        <div>
            <PeopleList people={props.male}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actions)(Male);
