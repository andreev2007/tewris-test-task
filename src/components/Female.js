import React, {useEffect} from 'react';
import {connect} from "react-redux";
import * as actions from '../actions';
import PeopleList from "./PeopleList";

const Female = (props) => {
    useEffect(() => {
        props.getFemale()
      }, [])
    return (
        <div>
            <PeopleList people={props.female}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actions)(Female);
