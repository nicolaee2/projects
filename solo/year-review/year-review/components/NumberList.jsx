import styles from "./styles.module.css";

export default function NumberList({ number, vertical }) {
    return (
        <div className={styles.vertical}>
            {Array.from({ length: number }, (_, index) => (
                <p className={styles.number}>{index + 1}</p>
            ))}
        </div>
    );
}
