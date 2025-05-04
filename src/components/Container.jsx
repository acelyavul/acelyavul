import { useLocation } from "react-router-dom";

export default function Container({ children }) {
  const location = useLocation();
  const isBlogPage = location.pathname.includes("blog");
  return (
    <div
    // style={{
    //   backgroundImage: isBlogPage ? "none" : `url(${room})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat",
    //   minHeight: "100vh",
    //   width: "100%",
    //   backdropFilter: "blur(6px)",
    // }}
    >
      <div className="container">{children}</div>
    </div>
  );
}
