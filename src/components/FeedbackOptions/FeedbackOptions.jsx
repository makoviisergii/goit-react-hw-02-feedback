import styled from 'styled-components';

export const FeedbackOptions = props => {
  const onHandeleClick = event => {
    props.onLeaveFeedback(event.target.name);
  };

  return (
    <div>
      <Button type="button" name="neutral" onClick={onHandeleClick}>
        Neutral
      </Button>
      <Button type="button" name="bad" onClick={onHandeleClick}>
        Bad
      </Button>
      <Button type="button" name="good" onClick={onHandeleClick}>
        Good
      </Button>
    </div>
  );
};

const Button = styled.button`
  border-radius: 3px;
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;
  box-shadow: 3px 5px 5px -2px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 3px 5px 5px -2px rgba(0, 0, 0, 0.4);
  }
  &:focus {
    scale: 0.95;
  }
`;
