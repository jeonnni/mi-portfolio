import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const location = useLocation(); // 현재 브라우저의 주소 정보를 가져옴
  const menuItems = [
    { name: "About", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className={styles.container}>
      {menuItems.map((item) => (
        <div key={item.name}>
          <Link
            to={item.path}
            className={location.pathname === item.path ? styles.active : styles.link}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;