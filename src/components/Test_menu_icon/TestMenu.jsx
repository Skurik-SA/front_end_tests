import tm from "./TestMenu.css"

const TestMenu = () => {

    let menu = document.querySelector(tm.menu),
        isOpened = false;

    setInterval(() => {
        if (isOpened) {
            menu.classList.remove('-opened');
        } else {
            menu.classList.add('-opened');
        }

        isOpened = !isOpened;
    }, 1500);
    return (
        <>
            <div className='menu' id='menu'>
                <div className='item -open-menu'><span className='ion-navicon-round'></span></div>
                <div className='item'><span className='ion-skip-forward'></span></div>
                <div className='item'><span className='ion-levels'></span></div>
                <div className='item'><span className='ion-eject'></span></div>
                <div className='item'><span className='ion-skip-backward'></span></div>
                <div className='item'><span className='ion-play'></span></div>
                <div className='item'><span className='ion-pause'></span></div>
                <div className='item -close-menu'><span className='ion-close-round'></span></div>
            </div>

            <svg>
                <defs>
                    <filter id='goo'>
                        <feGaussianBlur in='SourceGraphic' stdDeviation='8' result='blur'/>
                        <feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
                                       result='goo'/>
                        <feBlend in='SourceGraphic' in2='goo'/>
                    </filter>
                </defs>
            </svg>
        </>
)
}

export default TestMenu