export function convertToDateRange(start_date, end_date) {
    if (start_date == null || end_date == null) {
        return '...'
    }
    // Convert the datetime strings to Date objects
    const date1 = new Date(start_date);
    const date2 = new Date(end_date);

    // Extract the year, month, and day from the Date objects
    const year1 = date1.getFullYear();
    const month1 = date1.getMonth() + 1; // getMonth() returns a 0-based index, so we need to add 1
    const day1 = date1.getDate();

    const year2 = date2.getFullYear();
    const month2 = date2.getMonth() + 1;
    const day2 = date2.getDate();

    // Return the range of dates as a string in the format "mm/dd/yyyy - mm/dd/yyyy"
    return `${month1}/${day1}/${year1} - ${month2}/${day2}/${year2}`;
}