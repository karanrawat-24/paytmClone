import BottomWarning from '../components/BottomWarning';
import Button from '../components/Button';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import SubHeading from '../components/SubHeading';

const Signup = () => {
  return (
    <div className='bg-slate-300 h-screen flex justify-center items-center'>
      <div className=' rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
        <div>
          <Heading title={'Sign up'} />
          <SubHeading label='Enter your infromation to create an account' />
          <InputBox label={'First Name'} placeholder={'karan'} />
          <InputBox label={'Last Name'} placeholder={'rawat'} />
          <InputBox label={'Email'} placeholder={'test@gmail.com'} />
          <InputBox label={'password'} placeholder={'012345'} />
          <div className='pt-3'>
            <Button label={'Sign up'} />
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
