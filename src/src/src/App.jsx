import React from 'react';
import UsersTable from './UsersTable';
import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем стили Bootstrap

function App() {
  return (
    <div className="container">
      <h1>User List</h1>
      <UsersTable />
    </div>
  );
}

export default App;
