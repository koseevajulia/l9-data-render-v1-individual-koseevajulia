import React, { useState, useEffect } from 'react';
import SortUsers from './SortUsers';
import { Container } from 'react-bootstrap';

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/users');
        const data = await response.json();
        const sortedUsers = [...data].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setUsers(sortedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSortClick = () => {
    setSortAscending(!sortAscending);
  };

  const sortedUsers = [...users].sort((a, b) => {
    const comparison = a.name.localeCompare(b.name);
    return sortAscending ? comparison : -comparison;
  });

  const headers = users.length > 0 ? Object.keys(users[0]) : [];

  return (
    <Container className="m-3">
      <table>
        <thead>
          <tr>
            {headers.map(header => (
              <td key={header}>{header}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(user => (
            <tr key={user.id}>
              {headers.map(header => (
                <td key={`${user.id}-${header}`}>{user[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <SortUsers onSortClick={handleSortClick} />
    </Container>
  );
};

export default UsersTable;
