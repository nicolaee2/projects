import Day from "./Day";
import styles from "./styles.module.css";

export default function Month({ month, days }) {
    return (
        <div className={styles.month}>
            <p className={styles.number}>{month}</p>
            <div>
                {Array.from({ length: days }, (_, index) => {
                    return <Day key={index} month={month} day={index} />;
                })}
            </div>
        </div>
    );
}
