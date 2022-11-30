const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];

const getSecondMaxNumber = (tab) => {
    const newTab = [...tab];
    newTab.sort((a,b) => a-b);
    return newTab[newTab.length-2];
}
console.log(getSecondMaxNumber(arr1));
console.log(arr1);
