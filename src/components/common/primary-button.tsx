import Link from "next/link";

import styles from '../../styles/common.module.css';


// =====================================================================================================

export default function PrimaryButton(props: any) {
    const { isBlue } = props;
    const bgColor = isBlue && "#54A6FE";
    return (
        <Link
            href={props.href}
            className={styles.primaryBtn}
            style={{ backgroundColor: bgColor }} type={props.type}
        >{props.text}</Link>
    )
}