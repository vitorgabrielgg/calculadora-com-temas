// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      bg_main: string;
      bg_togglebox_and_keypad: string;
      bg_screen: string;
      bg_key: string;
      bg_toggle_and_keyequal: string;
      bg_del_and_reset: string;
      hover_bg_del_and_reset: string;
      hover_bg_key: string;
      hover_bg_toggle_and_keyequal: string;
      shadow_key: string;
      shadow_keyequal: string;
      shadow_del_and_reset: string;
      text_keyequal: string;
      text_del_and_reset: string;
      text_key: string;
      text_screen_and_header: string;
    };
  }
}
