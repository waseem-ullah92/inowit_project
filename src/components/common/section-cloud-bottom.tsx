import Image from "next/image";

// ===================== Assets =====================
import img from '../../../public/images/sectionCloud.png';


import styles from "../../styles/common.module.css";


// =====================================================================================================

export default function SectionCloudBottom() {
    return (
        <div className={styles.cloudSectionBottom}>
            <Image src={img} alt="image not found" />
        </div>
    )
}