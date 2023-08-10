import styles from "./CreateTemplate.module.css"
import WrapperPersonalCabinet from "../../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../../NavigationLine/NavigationLine";
import DuoContent from "../../../DuoContent/DuoContent";
import DuoContentLeftPart from "../../../DuoContent/DuoContentLeftPart";
import DuoContentRightPart from "../../../DuoContent/DuoContentRightPart";
import DivideLineMono from "../../../../../components/DivideLines/DivideLine_Mono/DivideLineMono";
import Search from "../../../../../components/Search/Search";
import FilterInput from "../../../../../components/FilterInput/FilterInput";

const CreateTemplate = () => {

    return (
        <>
            <WrapperPersonalCabinet>
                <NavigationLine></NavigationLine>
                <DuoContent>
                    <DuoContentLeftPart>
                        <div className={styles.CreateTemplateLeft_inputs}>
                            <input/>
                            <input/>
                        </div>

                        <DivideLineMono/>

                    </DuoContentLeftPart>
                    <DuoContentRightPart>
                        <div className={styles.CreateTemplateRight_inputs}>
                            <Search/>
                            <div>
                                <FilterInput/>
                                <FilterInput/>
                                <FilterInput/>
                            </div>
                        </div>
                    </DuoContentRightPart>
                </DuoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default CreateTemplate;