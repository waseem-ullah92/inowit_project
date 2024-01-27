import styles from "../../styles/common.module.css";


// =====================================================================================================

export default function SubHeading({ text }: { text: string }) {
    return (
        <h2 className={styles.subHeading}>{text}</h2>
    )
}