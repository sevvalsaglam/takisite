import { useLocation } from "react-router-dom";

function MainLayout({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`main-wrapper ${isHomePage ? "no-padding" : ""}`}
    >
      {children}
    </div>
  );
}

export default MainLayout;
