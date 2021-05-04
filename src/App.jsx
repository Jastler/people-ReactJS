import './App.scss';
import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import { getPeople, getMorePeople } from './api/people';
import { PeopleList } from './components/PeopleList';

export const App = () => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    getPeople()
      .then((result) => {
        const peopleWithId = result.map((person) => ({
          id: uniqid(),
          ...person,
        }));
        setPeople(peopleWithId);
      });
  }, []);

  const addPeople = () => {
    getMorePeople(page + 1)
      .then((result) => {
        const newPeople = result.map((person) => ({
          id: uniqid(),
          ...person,
        }));
        setPeople([...people, ...newPeople]);
      })
      .catch(() => {
        setLoadMore(false);
      });
  };

  return (
    <div className="App">
      <h1>Star wars:</h1>
      {people.length ? (
        <>
          <PeopleList people={people} />
          {loadMore && (
          <button
            type="button"
            onClick={() => {
              setPage((prevState) => prevState + 1);
              addPeople();
            }}
          >
            Load more
          </button>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
