import styled from "styled-components";

export const ThemeToggleItemContainer = styled.button`
  height: 1.15rem;
  width: 1.15rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors?.bg_toggle_and_keyequal};
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 400ms;

  ${(props) => {
    const className =
      props.className?.split(" ")[props.className.split(" ").length - 1];
    switch (className) {
      case "btn_theme1":
        return `
          left: 0.35rem;
        `;
      case "btn_theme2":
        return `
          left: 50%;
          transform: translate(-50%, -50%);
        `;
      case "btn_theme3":
        return `
          right: 0.35rem;
        `;
    }
  }}

  &:hover {
    background-color: ${(props) =>
      props.theme.colors?.hover_bg_toggle_and_keyequal};
  }
`;
