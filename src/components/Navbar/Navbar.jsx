import "./Navbar.css";
import NavigationPanel from "./NavigationPanel/NavigationPanel";
import {useState} from "react";
import {Link, Navigate} from "react-router-dom";

const Navbar = () => {

    const [navPanelVisibility, setNavPanelVisibility] = useState(false)
    const [menuIcon, setMenuIcon] = useState(false)

    const navPanelAction = () => {
        if (navPanelVisibility) {
            setNavPanelVisibility(false)
            setMenuIcon(false)
            console.log(navPanelVisibility)
        }
        else {
            setNavPanelVisibility(true)
            setMenuIcon(true)
            console.log(navPanelVisibility)
        }
    }

    return (
        <>
            <div className="NavbarWrapper">
                <div className="NavbarContent">
                    <div className="NavbarBackground">
                        <div className="NavbarContentLeft">
                            <div className="mb-2 mt-1" onClick={navPanelAction}>
                                {menuIcon ?
                                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.0708618" y="13.4297" width="25" height="3" rx="1.5" transform="rotate(-30 0.0708618 13.4297)" fill="#D9D9D9"/>
                                        <rect x="1.67462" y="16.1519" width="25" height="3" rx="1.5" transform="rotate(30 1.67462 16.1519)" fill="#D9D9D9"/>
                                        <rect x="17" y="13" width="6" height="6" rx="3" fill="#D9D9D9"/>
                                    </svg>
                                    :
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="25" height="6" fill="#D9D9D9"/>
                                        <rect y="18" width="25" height="6" fill="#D9D9D9"/>
                                        <rect y="9" width="25" height="6" fill="#D9D9D9"/>
                                    </svg>

                                }

                            </div>
                            <div className="mt-1 px-3">
                                Navbar
                            </div>
                        </div>
                        <div className="NavbarContentRight">
                            <div className="NavbarTextStyle_1">
                                username
                            </div>
                            <div className="NavbarTextStyle_2">
                                logout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavigationPanel visible={navPanelVisibility} setVisible={setNavPanelVisibility} menuMode={menuIcon} setMenuMode={setMenuIcon}>
                <div className="NavPanelContent">
                    <div><Link to={"/personal"} style={{ textDecoration: 'none', color: 'white'}}><div>Личный кабинет</div></Link> </div>
                    <div><Link to={"/all_tests"} style={{ textDecoration: 'none', color: 'white'}}><div>Мои тесты</div></Link> </div>
                    <div><Link to={"/test_edit"} style={{ textDecoration: 'none', color: 'white'}}><div>Редактор тестов</div></Link> </div>
                    <div><Link to={"/groups"} style={{ textDecoration: 'none', color: 'white'}}><div>Группы</div></Link> </div>
                    <div><Link to={"/marks"} style={{ textDecoration: 'none', color: 'white'}}><div>Оценки</div></Link> </div>
                    <div><Link to={"/statistic"} style={{ textDecoration: 'none', color: 'white'}}><div>Статистика</div></Link> </div>
                    <div><Link to={"/general_tests"} style={{ textDecoration: 'none', color: 'white'}}><div>Общие тесты</div></Link> </div>
                </div>
            </NavigationPanel>
        </>
    )
}

export default Navbar;