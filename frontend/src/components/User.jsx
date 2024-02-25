import { useNavigate } from 'react-router-dom';
import Button from './Button';
const User = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between'>
      <div className='flex items-center'>
        <div className=' rounded-full h-10 w-10 bg-slate-400 flex justify-center mt-1 mr-2'>
          <div className='flex flex-col justify-center h-full text-xl'>
            {user.firstName[0]}
          </div>
        </div>
        <div>
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div>
        <Button
          onClick={() =>
            navigate('/send', {
              state: {
                firstName: user.firstName,
                lastName: user.lastName,
                id: user._id,
              },
            })
          }
          label={'Send Money'}
        />
      </div>
    </div>
  );
};

export default User;
