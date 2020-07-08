import React from 'react';
import '../styles/components/Main.css';
import FeaturedEntry from './FeaturedEntry';
import Entries from './Entries';
import { entries } from '../manifest/manifest.json';
import Content from './Content';

const Main = () => {
  return (
    <div className="Main">
      <FeaturedEntry />
      <Entries entries={entries} />
      <Content />
    </div>
  );
};

export default Main;