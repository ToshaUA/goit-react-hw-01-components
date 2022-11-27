import PropTypes from 'prop-types';
import {
  StatisticsTitle,
  StatList,
  StatisticsData,
  StatisticsValue,
} from '../style/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <StatisticsTitle>{title}</StatisticsTitle>
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsData key={id}>
            <span>{label}</span>
            <StatisticsValue>{percentage}%</StatisticsValue>
          </StatisticsData>
        ))}
      </StatList>
    </>
  );
};

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
