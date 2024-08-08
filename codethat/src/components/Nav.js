import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import UserMenu from "./UserMenu";
import logoImg from "../assets/logo.svg";
import styles from "./Nav.module.css";

//isAvtive : 해당 객체의 링크에 위치하면 true가 됨
function getLinkStyle({ isActive }) {
    return { textDecoration: isActive ? "underline" : undefined };
}

function Nav() {
    return (
        <div className={styles.nav}>
            <Container className={styles.container}>
                <Link to="/">
                    <img src={logoImg} alt="Codethat Logo" />
                </Link>
                <ul className={styles.menu}>
                    <li>
                        <NavLink to="/courses" style={getLinkStyle}>
                            카탈로그
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/questions" style={getLinkStyle}>
                            커뮤니티
                        </NavLink>
                    </li>
                    <li>
                        <UserMenu />
                    </li>
                </ul>
            </Container>
        </div>
    );
}

export default Nav;
