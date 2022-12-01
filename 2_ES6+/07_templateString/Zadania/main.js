const person = {
    name: "Vlad",
    lastName: "Drăculea",
    yearOfBirth: 1431,
    profession: "Lord of Wallachia"
};

const whoAreYou = (data) => {
    console.log(`My name is ${data.name} ${data.lastName}.
I am ${new Date().getFullYear() - data.yearOfBirth} years old.
My profession is ${data.profession}.`)
}

whoAreYou(person);
