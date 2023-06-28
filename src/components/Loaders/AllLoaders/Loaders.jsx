import "./Loader.css"
import TestMenu from "../../Test_menu_icon/TestMenu";

const Loaders = () => {
    return (
        <>
            <div>
                <div className='spinner'>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
                <svg>
                    <defs>
                        <filter id='goo'>
                            <feGaussianBlur in='SourceGraphic' stdDeviation='8' result='blur'/>
                            <feColorMatrix in='blur' mode='matrix' values='
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 50 -8' result='goo'/>
                            <feBlend in='SourceGraphic' in2='goo'/>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="custom_loader">
                <div className="custom_circle"></div>
                <div className="custom_circle"></div>
                <div className="custom_circle"></div>
                <div className="custom_circle"></div>
                <div className="line"></div>
                <div className="custom_circle_little"></div>
                <div className="custom_circle_little"></div>
                <div className="custom_circle_little"></div>
                <div className="custom_circle_little"></div>
            </div>
            <div className="test">
                <div>

                </div>
            </div>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="lds-circle">
                <div></div>
            </div>
        </>

    )
}

export default Loaders;