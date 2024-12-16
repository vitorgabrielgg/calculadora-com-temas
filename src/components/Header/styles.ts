import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors?.text_screen_and_header};

  h1 {
    font-size: 2.3rem;
  }
`;
