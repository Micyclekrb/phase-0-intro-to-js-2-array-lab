const cats = ["Milo", "Otis", "Garfield"];
const destructivelyAppendCat = (name) => {
    cats.push("Ralph");
};
const destructivelyPrependCat = (name) => {
    cats.unshift("Bob");
};
const destructivelyRemoveLastCat = () => {
    cats.pop();
};
const destructivelyRemoveFirstCat = () => {
    cats.shift();
};
const appendCat = (name) => [...cats, name];
console.log(appendCat("Broom"));
const prependCat = (name) => [name, ...cats];
console.log(prependCat("Arnold"));

const removeLastCat = () => cats.slice(0, 2)
console.log(removeLastCat())

const removeFirstCat = () => cats.slice(1, 3)
console.log(removeFirstCat())