import styled from "styled-components";

export const CalculatorScreenContainer = styled.section`
  background-color: ${(props) => props.theme.colors?.bg_screen};
  color: ${(props) => props.theme.colors?.text_screen_and_header};
  height: 7rem;
  border-radius: 0.6rem;
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  align-items: end;
  justify-content: start;
  padding: 1.2rem 1.5rem;
  margin: 2rem 0;

  > div {
    font-size: 0.9rem;
    display: flex;
    gap: 0.5rem;
    height: 1rem;
  }

  .current_value {
    font-size: 3.5rem;
    height: 3rem;
  }
`;
