import styles from "./FiltersHeader.module.css"

const FiltersHeader = ({clearFilters}) => {
    return (
        <section className={styles.subButtonsToFilter}>
            <label className={styles.subButtonsToFilter_label}>
                Фильтры:
            </label>
            <button onClick={() => {
                clearFilters()
            }} className={styles.subButtonsToFilter_button}>
                                    <span>
                                        Очистить
                                        <span className={styles.subButtonsToFilter_svg}>
                                            <svg className="subButtonsToFilter_svg" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="34.9782" height="4.26563" rx="2.13282" transform="matrix(0.711774 0.702409 -0.711774 0.702409 3.39258 0.86438)" fill="white"/>
                                                <rect width="34.9782" height="4.26563" rx="2.13282" transform="matrix(0.711774 -0.702409 0.711774 0.702409 0.355469 25.4333)" fill="white"/>
                                            </svg>
                                        </span>
                                    </span>
            </button>
        </section>
    )
}

export default FiltersHeader;