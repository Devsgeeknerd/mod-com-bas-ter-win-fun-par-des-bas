import styled from "styled-components";

const StarArea = styled.View`
  flex-direction: row;
`;

const StarView = styled.View``;

const StarText = styled.Text`
  color: #737373;
  margin-left: 5px;
  font-size: 12px;
  font-weight: bold;
`;

export default ({ stars, showNumber }) => {
  let s = [0, 0, 0, 0, 0];
  let floor = Math.floor(stars);
  let left = stars - floor;

  for (var i = 0; i < floor; i++) {
    s[i] = 2;
  }

  if (left > 0) {
    s[i] = 1;
  }

  return (
    <StarArea>
      {s.map((i, k) => (
        <StarView key={k}>
          {i === 0 && <StarEmpty width="18" />}
          {i}
          {i}
        </StarView>
      ))}
    </StarArea>
  );
};
