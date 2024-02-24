import React, { useState } from 'react';
import SearchBox from './SearchBox';
import User from './User';

const Users = () => {
  const [users, setUsers] = useState([
    {
      firstName: 'karan',
      lastName: 'rawat',
      _id: 1,
    },
  ]);
  return (
    <div>
      <div className='ml-4 font-bold text-lg mt-4'>Users</div>
      <SearchBox />
      <div>
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
