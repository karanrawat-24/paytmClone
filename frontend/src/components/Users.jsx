import { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import User from './User';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/v1/user/bulk?filter=' + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);
  return (
    <div>
      <div className='ml-4 font-bold text-lg mt-4'>Users</div>
      <SearchBox onChange={(e) => setFilter(e.target.value)} />
      <div>
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
