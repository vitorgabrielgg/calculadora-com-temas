import styled from "styled-components";

export const CalculatorKeyboardContainer = styled.section`
  background-color: ${(props) => props.theme.colors?.bg_togglebox_and_keypad};
  border-radius: 0.6rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.9rem;
  padding: 1.5rem;
  width: 100%;

  @media screen and (min-width: 500px) {
    gap: 1.4rem;
    padding: 1.8rem;
  }
`;
