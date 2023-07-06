import "./Navbar.css";
import NavigationPanel from "./NavigationPanel/NavigationPanel";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Logout} from "../../api/auth/Logout";
import {MenuIconActive, MenuIconDefault} from "../Icons/MenuIcons";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_USER_DATA} from "../../redux/saga/auth/saga_UserData";

const Navbar = () => {

    const dispatch = useDispatch()

    const [navPanelVisibility, setNavPanelVisibility] = useState(false)
    const [menuIcon, setMenuIcon] = useState(false)
    const [userName, setUserName] = useState("")
    const userData = useSelector(state => state.userData.user_data)

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

    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true)
            // getUsername()
            dispatch({type: LOAD_USER_DATA})
        }
    }, [isAuth]);


    return (
        <>
            <div className="NavbarWrapper">
                <div className="NavbarContent">
                    <div className="NavbarBackground">
                        <div className="NavbarContentLeft">
                            <div className="mb-2 mt-1" onClick={navPanelAction}>
                                {menuIcon ?
                                    <MenuIconDefault/>
                                    :
                                    <MenuIconActive/>
                                }
                            </div>
                            <div className="mt-1 px-3">
                                Navbar
                            </div>
                        </div>
                        <div className="NavbarContentRight">
                            {userData.first_name
                                ?
                                <>
                                    <div className="NavbarTextStyle_1">
                                        {userData.first_name}
                                    </div>
                                    <div className="NavbarTextStyle_2">
                                        <Logout/>
                                    </div>
                                </>
                                :
                                <></>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <NavigationPanel
                visible={navPanelVisibility}
                setVisible={setNavPanelVisibility}
                menuMode={menuIcon}
                setMenuMode={setMenuIcon}
            >
                <div className="NavPanelContent">
                    <div>
                        <Link
                            to={"/personal"}
                            style={{ textDecoration: 'none', color: 'white'}}
                        >
                            <div>Личный кабинет</div>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to={"/all_tests"}
                            style={{ textDecoration: 'none', color: 'white'}}
                        >
                            <div>Мои тесты</div>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to={"/groups"}
                            style={{ textDecoration: 'none', color: 'white'}}
                        >
                            <div>Группы</div>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to={"/marks"}
                            style={{ textDecoration: 'none', color: 'white'}}
                        >
                            <div>Оценки</div>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to={"/statistic"}
                            style={{ textDecoration: 'none', color: 'white'}}
                        >
                            <div>Статистика</div>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to={"/general_tests"}
                            style={{ textDecoration: 'none', color: 'white'}}
                        >
                            <div>Общие тесты</div>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to={"/templates"}
                            style={{ textDecoration: 'none', color: 'white'}}
                        >
                            <div>Шаблоны</div>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to={"/test/12"}
                            style={{ textDecoration: 'none', color: 'red'}}
                        >
                            <div>TestPage</div>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to={"/test_edit"}
                            style={{ textDecoration: 'none', color: 'red'}}
                        >
                            <div>Редактор тестов</div>
                        </Link>
                    </div>
                </div>
            </NavigationPanel>
        </>
    )
}

export default Navbar;