import { useEffect } from 'react';

// A custom hook for handling scroll-based behavior
export default function useScroll(initialHeaderHeight) {
    useEffect(() => {
        const stickyBar = document.querySelector('.sticky_bar');

        if (!stickyBar) {
            return;
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            
            if (scrollPosition > initialHeaderHeight) {
                stickyBar.classList.add('scrolled');
            } else {
                stickyBar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [initialHeaderHeight]); 
};