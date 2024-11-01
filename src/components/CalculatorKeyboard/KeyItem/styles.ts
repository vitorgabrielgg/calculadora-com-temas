import styled from "styled-components";

export const KeyItemContainer = styled.div`
  cursor: pointer;
  height: 4rem;
  border-radius: 0.3rem;
  grid-column: ${(props) =>
    props.className?.includes("equal") || props.className?.includes("reset")
      ? "span 2"
      : ""};

  > p {
    height: 3.75rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 0.5rem;
  }

  @media screen and (min-width: 500px) {
    border-radius: 0.7rem;

    > p {
      border-radius: 0.7rem;
    }
  }

  ${(props) => {
    const className = props.className?.replace("color_transition ", "");
    switch (className) {
      case "operator":
      case "number":
        return `
          background-color: ${props.theme.colors?.shadow_key};

          > p {
            font-size: 2rem;
            background-color: ${props.theme.colors?.bg_key};
            color: ${props.theme.colors?.text_key};

            &:hover {
              background-color: ${props.theme.colors?.hover_bg_key};
            }
          }

          @media screen and (min-width: 500px) {
            > p {
              font-size: 2.3rem;
            }
          }
        `;
      case "delete":
      case "reset":
        return `
          background-color: ${props.theme.colors?.shadow_del_and_reset};

          > p {
            font-size: 1.2rem;
            background-color: ${props.theme.colors?.bg_del_and_reset};
            color: ${props.theme.colors?.text_del_and_reset};

            &:hover {
              background-color: ${props.theme.colors?.hover_bg_del_and_reset};
            }
          }
            
          @media screen and (min-width: 500px) {
            > p {
              font-size: 1.7rem;
            }
          } 
        `;
      case "equal":
        return ` 
          background-color: ${props.theme.colors?.shadow_keyequal};

          > p {
            font-size: 1.2rem;
            background-color: ${props.theme.colors?.bg_toggle_and_keyequal};
            color: ${props.theme.colors?.text_keyequal};

            &:hover {
              background-color: ${props.theme.colors?.hover_bg_toggle_and_keyequal};
            }
          }

          @media screen and (min-width: 500px) {
            > p {
              font-size: 1.7rem;
            }
          }
        `;
    }
  }}
`;
