import Appbar from '../components/Appbar';
import Balance from '../components/Balance';
import Users from '../components/Users';

const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <Balance value={2402} />
      <Users />
    </div>
  );
};

export default Dashboard;
