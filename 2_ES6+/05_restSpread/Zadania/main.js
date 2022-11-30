//Zadanie 1

const namesA = ["Zosia", "Marcin", "Kamil"];
const namesB = ["Ala", "Puszek", ...namesA, "Jan", "Karol" ];

console.table(namesB);

const tab1 = [1,2,3];
const tab2 = [...tab1];

console.log(tab1,tab2);
console.log(tab1 === tab2);

console.log(Math.max(1,7,6,8,2,1));
console.log(Math.max(...tab1));

console.log([..."Grzegorz"]);

//Zadanie 5

const state = {
    invoiceSection: false,
    availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
    formStatus: "failed",
    isUserLogged: false
};

const stateCopy = {
    ...state,
    availableYears : state.availableYears.filter(el => el <= 1999),
    isUserLogged: !state.isUserLogged
};

console.log(stateCopy);
