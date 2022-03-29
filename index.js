// Write your solution here!


let cats =  ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    let newCats = cats.push(name)
}
function destructivelyPrependCat(name){
    let newCats = cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    let newCats = cats.pop(name)
}
function destructivelyRemoveFirstCat(name){
    let newCats = cats.shift(name)
}
function appendCat(name){
    const newCats = [...cats, name]
    return newCats
}
function prependCat(name){
    let newCats = [name, ...cats]
    return newCats
    
}
function removeLastCat(){
    const newCats = cats.slice(0, cats.length-1)
    return newCats
}
function removeFirstCat(){
    let newCats = cats.slice(1)
    return newCats
}