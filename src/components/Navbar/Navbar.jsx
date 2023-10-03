import "./Navbar.css";
import NavigationPanel from "./NavigationPanel/NavigationPanel";
import {Fragment, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Logout} from "../../api/auth/Logout";
import {MenuIconActive, MenuIconDefault} from "../Icons/MenuIcons";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_USER_DATA} from "../../redux/saga/auth/saga_UserData";
import NavigationButton from "./NavigationButton/NavigationButton";

const Navbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [navPanelVisibility, setNavPanelVisibility] = useState(true)
    const userData = useSelector(state => state.UserData.user_data)
    const navbarLinks = useSelector(state => state.NavbarData.navbar_link)

    const navPanelAction = () => {
        if (navPanelVisibility) {
            setNavPanelVisibility(false)
            console.log(navPanelVisibility)
        }
        else {
            setNavPanelVisibility(true)
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
        else {
            navigate('/login')
        }
    }, [isAuth]);


    return (
        <>
            <div className="NavbarWrapper">
                <div className="NavbarContent">
                    <div className="NavbarBackground">
                        <div className="NavbarContentLeft">
                            {/*<div className="mb-2 mt-1" onClick={navPanelAction}>*/}
                            <div className="mb-2 mt-1">
                                {navPanelVisibility ?
                                    <MenuIconActive/>
                                    :
                                    <MenuIconDefault/>
                                }
                            </div>
                            <div className="mt-1 px-3">
                                {navbarLinks && navbarLinks.map((link, index) =>
                                    <Fragment key={index}>
                                        {link.active
                                            ?
                                                <span>
                                                    <Link className="NavbarLink" to={link.link}>{link.link_name} > </Link>
                                                </span>
                                            :
                                            <>
                                                <span className="NavbarLink">
                                                    {link.link_name}
                                                </span>
                                            </>
                                        }

                                    </Fragment>
                                )}
                            </div>
                        </div>
                        <div className="NavbarContentRight">
                            {userData
                                ?
                                <>
                                    <div className="NavbarTextStyle_1">
                                        {userData.is_teacher
                                            ? <span>
                                                Учитель: {userData.first_name
                                                            ?
                                                            <>{userData.first_name}</>
                                                            :
                                                            <>{userData.username}</>
                                                                 }
                                            </span>
                                            :
                                            <span>
                                                Ученик: {userData.first_name
                                                            ?
                                                            <>{userData.first_name}</>
                                                            :
                                                            <>{userData.username}</>
                                                        }
                                            </span>
                                        }

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
            >
                <div style={{display: 'none'}} className="NavPanelContent">
                {/*<div className="NavPanelContent">*/}
                    <NavigationButton link_to={"/all_tests"}>Мои тесты</NavigationButton>
                    <NavigationButton link_to={"/groups"}>Группы</NavigationButton>
                    <NavigationButton link_to={"/general_tests"}>Общие тесты</NavigationButton>
                    <NavigationButton link_to={"/templates"}>Шаблоны</NavigationButton>
                    <NavigationButton link_to={"/cabinet/my_templates"}>Новые шаблоны</NavigationButton>

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