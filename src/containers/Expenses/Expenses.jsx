import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import './Expenses.css';
import expensesData from '../../data.json';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const data = {
  labels: expensesData.map((expense) => expense.day),
  datasets: [
    {
      data: expensesData.map((expense) => expense.amount),
      backgroundColor: 'hsl(10, 79%, 65%)',
      borderRadius: 5,
    },
  ],
};

const options = {
  scales: {
    yAxis: {
      display: false,
    },
    xAxis: {
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
};

const Expenses = () => {
  return (
    <div className='expenses__container'>
      <div className='expenses-header'>
        <h3>Spending - Last 7 Days</h3>
        <div className='expenses-chart'>
          <Bar data={data} options={options} />
        </div>
        <div className='expenses-footer'>
          <h5>Total This Month</h5>
          <div className='expenses-footer-content'>
            <h3>$478.33</h3>
            <div className='expenses-footer-content-right'>
              <p>+2.4%</p>
              <h4>from last month</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
