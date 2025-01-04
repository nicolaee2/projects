import Month from "./Month";
import NumberList from "./NumberList";
import styles from "./styles.module.css";

export default function Year() {
    const date = new Date();
    const year = date.getFullYear();
    const isLeap = false;
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return (
        <div className={styles.container}>
            <NumberList number={31} />
            <div className={styles.months}>
                {days.map((day, index) => {
                    return <Month days={day} month={index + 1} key={index} />;
                })}
            </div>
        </div>
    );
}
