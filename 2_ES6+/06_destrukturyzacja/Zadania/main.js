//Zadanie 1
// Podstaw pod zmienne pierwszą i ostatnią wartość następującej tablicy: [ "snow", "rain", "sun" ].
// Wypisz zmienne w konsoli.
//
// Zadanie 2
// Stwórz obiekt slider, taki jak poniżej:
//
// const slider = {
//   type: "infinite",
//   numberOfItems: 10,
//   center: true,
//   autoStart: true
// }
// Podstaw do zmiennych type oraz autoStart odpowiednie wartości z obiektu slider.

//Zadanie 1
const [snow,,sun] = [ "snow", "rain", "sun" ];
console.log(snow, sun);


//Zadanie 2

const slider = {
  type: "infinite",
  numberOfItems: 10,
  center: true,
  autoStart: true
}

const { type, autoStart : start } = slider;
console.log(type, start);
