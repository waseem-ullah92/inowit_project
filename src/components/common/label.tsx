import styles from "../../styles/common.module.css";

export default function Label(props: any) {
    return (
        <label className={styles.formLabel} htmlFor={props.htmlFor}>{props.text}</label>
    )
}