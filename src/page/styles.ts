import styled from "styled-components";

export const CalculatorContainer = styled.div`
  background: ${(props) => props.theme.colors.bg_main};
  min-height: 100vh;
  width: 100%;

  .container_box {
    padding: 2.2rem 1.5rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;
