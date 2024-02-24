import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import ButtonWarning from '../components/BottomWarning';
const Signin = () => {
  return (
    <div className='bg-slate-300 h-screen flex justify-center items-center'>
      <div className=' rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
        <div>
          <Heading title={'Sign in'} />
          <SubHeading label={'Enter your credentials to access your account'} />
          <InputBox label={'Email'} placeholder={'test@gmail.com'} />
          <InputBox label={'password'} placeholder={'012345'} />
          <div className='pt-3'>
            <Button label={'Sign in'} />
          </div>
          <ButtonWarning
            label={"Don't have an account?"}
            to='/signup'
            buttonText={'Singup'}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
