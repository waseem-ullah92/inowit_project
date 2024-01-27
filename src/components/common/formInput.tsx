import styles from "../../styles/common.module.css";

export default function FormInput(props: any) {
    return (
        <input
            className={`${styles.formInput} mb-4`}
            placeholder={props.placeholder}
            value={props.value}
            id={props.id}
            name={props.name}
            type={props.type}
            onChange={props.onChange}
        />
    )
}