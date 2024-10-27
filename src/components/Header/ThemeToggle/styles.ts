import styled from "styled-components";

export const ThemeToggleContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 1.8rem;

  > span {
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.15rem;
    margin-bottom: 0.4rem;
  }

  .toggle_box {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    .toggle_index {
      display: flex;
      justify-content: space-between;
      padding: 0 0.75rem;
      font-size: 0.8rem;
    }

    .toggle {
      width: 5.5rem;
      height: 1.9rem;
      border-radius: 1rem;
      background-color: ${(props) =>
        props.theme.colors.bg_togglebox_and_keypad};
      display: flex;
      align-items: center;
      position: relative;
    }
  }
`;
