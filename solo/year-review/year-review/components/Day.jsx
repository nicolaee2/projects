import { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function Day({ month, day }) {
    const [state, setState] = useState(() => {
        const game = localStorage.getItem("game");
        if (game) {
            try {
                const parsedGame = JSON.parse(game);
                const monthValue = parsedGame[`${month}`];
                const dayValue = monthValue ? monthValue[`${day}`] : null;
                return dayValue !== null ? dayValue : 0;
            } catch (error) {
                console.error("Failed to parse game from localStorage:", error);
            }
        }
        return 0;
    });

    useEffect(() => {
        const game = localStorage.getItem("game");
        let updatedGame = game ? JSON.parse(game) : {};

        if (!updatedGame[`${month}`]) {
            updatedGame[`${month}`] = {};
        }

        updatedGame[`${month}`][`${day}`] = state;
        localStorage.setItem("game", JSON.stringify(updatedGame));
    }, [state]);

    const handleClick = () => {
        const currentMonth = new Date().getMonth() + 1;
        const currentDay = new Date().getDate();

        if (month == currentMonth && currentDay == day + 1) {
            setState((prevState) => (prevState + 1) % 4);
        }
    };

    return (
        <div
            className={`${styles.square} ${
                state === 1
                    ? styles.bad
                    : state === 2
                    ? styles.average
                    : state === 3
                    ? styles.good
                    : ""
            }`}
            onClick={handleClick}
        ></div>
    );
}
