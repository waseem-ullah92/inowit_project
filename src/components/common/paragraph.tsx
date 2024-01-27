import React from 'react';

import styles from '../../styles/common.module.css';


// =====================================================================================================

const Paragraph = ({ text, classes }: { text: string, classes?: string }) => {
    return <p className={`${styles.mainParagraph} ${classes}`}>{text}</p>;
};

export default Paragraph;