// Write your solution here!
    const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    const lastCat = [...cats, name];
    return lastCat;
}

function prependCat(name) {
    const firstCat = [name, ...cats];
    return firstCat;
}

function removeLastCat() {
    const byeLastCat = cats.slice(0, cats.length-1);
    return byeLastCat;
}

function removeFirstCat() {
    const byeFirstCat = cats.slice(1);
    return byeFirstCat;    
}