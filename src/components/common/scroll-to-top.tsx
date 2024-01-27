import { useState, useEffect } from 'react';
import styles from '@/styles/common.module.css';
import scrollTopTopImage from "/public/images/scroll-top-top.gif"
import Image from 'next/image';

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };



    return (
        <button
            className={styles.scrollButton}
            onClick={scrollToTop}
            style={{ display: showButton ? 'block' : 'none', fontSize: "18px" }}
        >
            Scroll to Top
        </button>
    );
};

export default ScrollToTopButton;
