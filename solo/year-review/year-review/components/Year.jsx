import Month from "./Month";
export default function Year() {
    const date = new Date();
    const year = date.getFullYear();
    const isLeap = false;
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return (
        <>
            {days.map((day, index) => {
                return <Month days={day} month={index + 1} key={index} />;
            })}
        </>
    );
}
