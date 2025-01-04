import { useState } from "react";
import styles from "./styles.module.css";

export default function Day() {
    const [state, setState] = useState(0);

    const handleClick = () => {
        setState((prevState) => (prevState + 1) % 4);
    };

    const getClassName = () => {
        if (state === 1) return styles.bad;
        if (state === 2) return styles.average;
        if (state === 3) return styles.good;
        return "";
    };

    return (
        <div
            className={`${styles.square} ${getClassName()}`}
            onClick={handleClick}
        ></div>
    );
}
