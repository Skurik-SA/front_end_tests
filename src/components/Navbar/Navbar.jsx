import "./Navbar.css";
import NavigationPanel from "./NavigationPanel/NavigationPanel";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Logout} from "../../api/auth/Logout";
import {MenuIconActive, MenuIconDefault} from "../Icons/MenuIcons";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_USER_DATA} from "../../redux/saga/auth/saga_UserData";
import NavigationButton from "./NavigationButton/NavigationButton";

const Navbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [navPanelVisibility, setNavPanelVisibility] = useState(false)
    const userData = useSelector(state => state.userData.user_data)

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
                            <div className="mb-2 mt-1" onClick={navPanelAction}>
                                {navPanelVisibility ?
                                    <MenuIconActive/>
                                    :
                                    <MenuIconDefault/>
                                }
                            </div>
                            <div className="mt-1 px-3">
                                Navbar
                            </div>
                        </div>
                        <div className="NavbarContentRight">
                            {userData
                                ?
                                <>
                                    <div className="NavbarTextStyle_1">
                                        {userData.is_teacher
                                            ? <>
                                                Учитель:
                                            </>
                                            :
                                            <>
                                                Ученик:
                                            </>
                                        }
                                        {userData.first_name
                                            ?
                                            <>{userData.first_name}</>
                                            :
                                            <>{userData.username}</>
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
                <div className="NavPanelContent">
                    <NavigationButton link_to={"/personal"}>Личный кабинет</NavigationButton>
                    <NavigationButton link_to={"/all_tests"}>Мои тесты</NavigationButton>
                    <NavigationButton link_to={"/groups"}>Группы</NavigationButton>
                    <NavigationButton link_to={"/marks"}>Оценки</NavigationButton>
                    <NavigationButton link_to={"/statistic"}>Статистика</NavigationButton>
                    <NavigationButton link_to={"/general_tests"}>Общие тесты</NavigationButton>
                    <NavigationButton link_to={"/templates"}>Шаблоны</NavigationButton>

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