export const getImage = (ImageKey: string): string => {
  if (process.env.TSNODE === "true") {
    return "";
  }

  switch (ImageKey) {
    case "brain":
      return require("../assets/blog/google-deepmind.jpg");
    case "thinker":
      return require("../assets/blog/the-thinker.jpg");
    default:
      return "";
  }
};
