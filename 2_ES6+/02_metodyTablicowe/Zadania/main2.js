function distFromAverage(tab) {
    const avg = tab.reduce(function (total, nextElement) {
        return total + nextElement;
    }, 0)/tab.length;
    const newTab = tab.map(function (el) {
        return Math.abs(el-avg);
    })
    return newTab;
}

const distFromAverageArrow = (tab) => {
    const avg = tab.reduce((el, nextEl) => el + nextEl, 0)/tab.length;
    return tab.map(el => Math.abs(el-avg));
}

console.log(distFromAverage([1,2,3,4,5,6,7]), "[3,2,1,0,1,2,3]"); //=> [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
console.log(distFromAverage([1,1,1,1]), "[0,0,0,0]"); //=> [0,0,0,0] (średnia z tablicy wejściowej to 1)
console.log(distFromAverageArrow([2,8,3,7]), "[3,3,2,2]"); //=> [3,3,2,2] (średnia z tablicy wejściowej to 5)
