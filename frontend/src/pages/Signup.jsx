import { useState } from 'react';
import axios from 'axios';
import BottomWarning from '../components/BottomWarning';
import Button from '../components/Button';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import SubHeading from '../components/SubHeading';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onClickHandler = async () => {
    const response = await axios.post(
      'http://localhost:3000/api/v1/user/signup',
      {
        username: email,
        firstName,
        lastName,
        password,
      }
    );
    localStorage.setItem('token', response.data.token);
    navigate('/dashboard');
  };
  return (
    <div className='bg-slate-300 h-screen flex justify-center items-center'>
      <div className=' rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
        <div>
          <Heading title={'Sign up'} />
          <SubHeading label='Enter your infromation to create an account' />
          <InputBox
            label={'First Name'}
            placeholder={'karan'}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputBox
            label={'Last Name'}
            placeholder={'rawat'}
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputBox
            label={'Email'}
            placeholder={'test@gmail.com'}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBox
            label={'password'}
            placeholder={'012345'}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='pt-3'>
            <Button label={'Sign up'} onClick={onClickHandler} />
          </div>
          <BottomWarning
            label={'Already have an account?'}
            to='/signin'
            buttonText={'Singin'}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
