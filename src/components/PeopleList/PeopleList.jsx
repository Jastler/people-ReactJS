import React from 'react';
import PropTypes from 'prop-types';
import { CommentForm } from '../CommentForm';

export const PeopleList = ({ people }) => (
  <div className="people-list">
    <p>people list</p>
    <div className="people-list__cards">
      {people.map((person) => (
        <div
          className="people-list__card card"
          key={person.id}
        >
          <h2 className="card__name">
            {person.name}
          </h2>
          <p>{person.birth_year}</p>
          <CommentForm />
        </div>
      ))}
    </div>
  </div>
);

PeopleList.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      birth_year: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
