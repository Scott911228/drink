import { theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#1677ff",
    colorBgBase	: "#222222",
    colorTextBase: "#ffffff",
    colorTextFooter: "#ffffff",
    colorBgFooter: "#000000",
  },
  components: {
    Button: {
      colorPrimary: "#6366f2;",
      colorPrimaryHover: "#9192f5",
    }
  },
};
const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#dcfffb",
    colorBgBase	: "#dcfffb",
    colorTextBase: "#dcfffb",
    colorTextFooter: "#dcfffb",
    colorBgFooter: "#000000",
  },
  components: {
    Button: {
      colorPrimary: '#53FF53',
      colorPrimaryHover: "#A6FFA6",
    },
  },
};

export { lightTheme, darkTheme };
