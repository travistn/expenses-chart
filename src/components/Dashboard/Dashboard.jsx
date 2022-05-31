import './Dashboard.css';
import BalanceHeader from '../BalanceHeader/BalanceHeader';
import Expenses from '../../containers/Expenses/Expenses';

const Dashboard = () => {
  return (
    <div className='dashboard__container'>
      <div>
        <BalanceHeader />
        <Expenses />
      </div>
    </div>
  );
};

export default Dashboard;
