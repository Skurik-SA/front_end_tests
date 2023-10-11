import "./Navbar.css";
import NavigationPanel from "./NavigationPanel/NavigationPanel";
import {Fragment, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Logout} from "../../api/auth/Logout";
import {MenuIconActive, MenuIconDefault} from "../Icons/MenuIcons";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_USER_DATA} from "../../redux/saga/auth/saga_UserData";
import NavigationButton from "./NavigationButton/NavigationButton";
import {verifyToken} from "../../api/auth/VerifyToken";
import {VERIFY_TOKEN} from "../../redux/saga/auth/saga_TokenVerify";

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
        // const resp = verifyToken(localStorage.getItem('access_token'))
        const resp = dispatch({type: VERIFY_TOKEN, token: localStorage.getItem('access_token')})

        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true)
            dispatch({type: LOAD_USER_DATA})
        }
        else {
            setIsAuth(false)
            navigate('/login')
        }


    }, [isAuth]);


    return (
        <nav>
            <div className="NavbarWrapper">
                <div className="NavbarBackground">
                    <section className="NavbarContentLeft">
                        <div onClick={navPanelAction} style={{cursor: 'pointer'}}>
                            {navPanelVisibility ?
                                <MenuIconActive/>
                                :
                                <MenuIconDefault/>
                            }
                        </div>
                        <div>
                            {navbarLinks && navbarLinks.map((link, index) =>
                                <Fragment key={index}>
                                    {link.active
                                        ?
                                            <Link className="NavbarLink" to={link.link}> {link.link_name} > </Link>
                                        :
                                            <span className="NavbarLink">
                                                {link.link_name}
                                            </span>
                                    }
                                </Fragment>
                            )}
                        </div>
                    </section>
                    <section className="NavbarContentRight">
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
                    </section>
                </div>
            </div>
            <NavigationPanel
                visible={navPanelVisibility}
                setVisible={setNavPanelVisibility}
            >
                {/*<div style={{display: 'none'}} className="NavPanelContent">*/}
                <div className="NavPanelContent">
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
        </nav>
    )
}

export default Navbar;