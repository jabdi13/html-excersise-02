import React, { Fragment } from 'react';
import '../styles/components/Entries.css';
import Entry from './Entry';

const Entries = ({ entries }) => {
  return (
    <div className="Entries">
      {
        entries.map((entry, index) => {
          const isLast = index !== entries.length - 1;
          return <Fragment key={index}>
            <Entry {...entry} /> {isLast && <hr />}
          </Fragment>
        })
      }
    </div>
  );
};

export default Entries;