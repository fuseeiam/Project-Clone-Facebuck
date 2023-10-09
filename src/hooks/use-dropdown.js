import { useEffect, useRef, useState } from "react";


function useDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const dropDownE1 = useRef(null);

    useEffect(() => {
        const haddleClickOutside = e => {
            if (!dropDownE1.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', haddleClickOutside);
        return () => {
            document.removeEventListener('click', haddleClickOutside);
        };
    }, []);
    return { dropDownE1, isOpen, setIsOpen };
};

export default useDropdown;
