export function sortBySearchValue(arr, search_value) {
    let temp_arr = arr
    temp_arr.sort(function (a, b) {
        if (a[search_value] < b[search_value]) {
            return -1;
        } else if (a[search_value] > b[search_value]) {
            return 1;
        } else {
            return 0;
        }
    });
    return temp_arr;
}
export function sortBySearchValueReverse(arr, search_value) {
    let temp_arr = arr
    temp_arr.sort(function (a, b) {
        if (a[search_value] < b[search_value]) {
            return 1;
        } else if (a[search_value] > b[search_value]) {
            return -1;
        } else {
            return 0;
        }
    });
    return temp_arr;
}