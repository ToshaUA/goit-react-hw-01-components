import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';

export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionHistoryItem item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
