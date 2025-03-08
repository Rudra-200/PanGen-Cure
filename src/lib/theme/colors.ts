export const colors = {
  primary: {
    light: "hsl(221.2, 83.2%, 53.3%)",
    dark: "hsl(217.2, 91.2%, 59.8%)",
  },
  secondary: {
    light: "hsl(215, 20.2%, 65.1%)",
    dark: "hsl(215.4, 16.3%, 46.9%)",
  },
  accent: {
    blue: {
      light: "hsl(206, 100%, 50%)",
      dark: "hsl(201, 96%, 32%)",
    },
    purple: {
      light: "hsl(262, 83%, 58%)",
      dark: "hsl(263, 70%, 50%)",
    },
    green: {
      light: "hsl(142, 76%, 36%)",
      dark: "hsl(143, 64%, 24%)",
    },
  },
  gradient: {
    primary: "linear-gradient(135deg, hsl(221.2, 83.2%, 53.3%), hsl(262, 83%, 58%))",
    secondary: "linear-gradient(135deg, hsl(206, 100%, 50%), hsl(142, 76%, 36%))",
    accent: "linear-gradient(135deg, hsl(262, 83%, 58%), hsl(142, 76%, 36%))",
  },
}

export const shadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
}

export const animations = {
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  },
}

