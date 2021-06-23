import React from 'react';

const PeopleList = (props) => {
    const renderList = props.people.map(person => {
        return <div className="people-list__item" key={person.name.first + person.name.last}>
            <img src={person.picture.medium} className="picture" alt=""/>
            <h3>{person.name.title + ". " + person.name.first + " " + person.name.last}</h3>
            <h4>Gender: {person.gender}</h4>
        </div>
    })

    return (
        <div className="people-list">
            {renderList}
        </div>
    );
};

export default PeopleList;
