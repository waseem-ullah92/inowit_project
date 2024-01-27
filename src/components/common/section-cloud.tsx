import Image from "next/image";

// ===================== Assets =====================
import img from '../../../public/images/sectionCloud.png';

import styles from "../../styles/common.module.css";


// =====================================================================================================

export default function SectionCloud() {
    return (
        <div className={styles.cloudSection}>
            <Image src={img} alt="image not found" />
        </div>
    )
}