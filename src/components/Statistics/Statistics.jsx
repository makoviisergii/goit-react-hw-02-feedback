import styled from 'styled-components';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  message,
}) => {
  return (
    <div>
      <p> Good: {good}</p>
      <p> Neutral: {neutral}</p>
      <p> Bad: {bad}</p>
      <p> Total: {total}</p>
      <p> PositivePerentage: {positivePercentage}% </p>
    </div>
  );
};

const Notification = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
`;
