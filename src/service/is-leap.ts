export default (year: number) => {
    return year % 2 === 0 &&
        year % 4 === 0 &&
        (
            year % 100 !== 0 ||
            year % 400 === 0
        );
};
