import style from '../../styles/common.module.css';


// =====================================================================================================

const MainHeading = ({ text }: { text: string }) => {
    return (
        <h1 className={`${style.mainHeading} text-center`}>{text}</h1>
    )
}

export default MainHeading;