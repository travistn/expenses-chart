import './BalanceHeader.css';
import logo from '../../assets/logo.svg';

const BalanceHeader = () => {
  return (
    <div className='balanceHeader__container'>
      <div className='balanceHeader-content'>
        <h5>My Balance</h5>
        <h3>$921.48</h3>
      </div>
      <div className='balanceHeader-logo'>
        <img src={logo} alt='logo' />
      </div>
    </div>
  );
};

export default BalanceHeader;
