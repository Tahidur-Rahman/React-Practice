import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const navs = [
  { part: "Home", path: "/" },
  { part: "About", path: "/about" },
  { part: "Skills", path: "/skills" },
  { part: "Works", path: "/works" },
  { part: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setopen] = useState(false);
  const [screenWidth, setscreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setscreenWidth(width);
    if (width > 600) {
      setopen(true);
    }
  };
  const handleClose = () => {
    if (screenWidth < 600) {
      setopen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);
  return (
    <nav className="navbar">
      <div className="nav_wrapper">
        <div className="logo">
          <Link to="/">
            <img
              src="https://github.com/DwinaTech/public-images/blob/main/DwinaTech-brand.png?raw=true"
              alt="Brand"
            />
          </Link>
        </div>

        <div className="list_wrapper">
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => setopen(!open)}
          />
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => setopen(!open)}
          />
          <ul style={{left:open?'0':'-140vw'}}>
            {navs.map((parts) => {
              return (
                <li>
                  <Link
                    to={parts.path}
                    onClick={handleClose}
                    style={{
                      color: location.pathname === parts.path && "#4071f4",
                    }}
                  >
                    {parts.part}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
