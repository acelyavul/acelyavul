export const getImage = (ImageKey: string): string => {
  if (process.env.TSNODE === "true") {
    return "";
  }

  switch (ImageKey) {
    case "brain":
      return require("../assets/blog/google-deepmind.jpg");
    case "thinker":
      return require("../assets/blog/the-thinker.jpg");
    case "brain-mechanism":
      return require("../assets/blog/brain_mechanism_800x433.png");
    case "heart":
      return require("../assets/blog/heart.png");
    case "time-passing":
      return require("../assets/blog/time-passing.jpg");
    default:
      return "";
  }
};
