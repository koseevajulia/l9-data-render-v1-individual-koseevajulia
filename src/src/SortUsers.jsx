import React from 'react';
import { Button } from 'react-bootstrap';

const SortUsers = ({ onSortClick }) => {
  return (
    <Button onClick={onSortClick}>Sort</Button>
  );
};

export default SortUsers;
