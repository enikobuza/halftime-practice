const array1 = ["alma", "korte", "ilyenek", "sutotok"];
const array2 = ["alma2", "korte2", "ilyenek2", "sutotok2"];


// Van egy feladat, ami egy tömböt ad meg, kapunk egy értéket, ami a tömb végére kell keröljön

function addValueToTheEndOfArray(arr, val) {
    arr.push(val);
    return arr;
}

console.log(addValueToTheEndOfArray(["alma", "korte", "ilyenek", "sutotok"], "true"));

// ---------------------------------------------------

/* let a = 1;
let b = a;
a = 2;
b = 5;
console.log(a, " ", b); // primitívek esetén úgy másolódik le, hogy nincs összekötve

let c = {
    key: "value",
    key2: {
        subkey: "value3"
    }
};
let e = {
    key: "value"
}; */
// let d = c;
// let d = { ...c }; // a nested object nem másolódott, hanem linkelődött... ezért shallow copy
// let d = Object.assign({}, c); // itt is van kapcsos, új objektum jött létre // ez is shallow copy
// let d = JSON.parse(JSON.stringify(c));
/* let convertCtoString = JSON.stringify(c);
let d = JSON.parse(convertCtoString);
console.log("c típusa: ", typeof c);
console.log("convertCtoString típusa: ", typeof convertCtoString);
console.log("d típusa: ", typeof d);*/
/* c.key = "value1";
c.key2.subkey = "value4";
d.key = "value2";
d.key2.subkey = "value5"; // 
console.log(c, " ", d);*/ // itt c.key és d.key is megváltoztatja mindkettőt
// console.log(c === d);
// console.log({} === {}); // a kapcsos zárójel mindig azt jelenti, hogy új objektumot hozok létre, e-nél ugyanez
// console.log(c === e); // false, mert nem a tartalmát hasonlítja össze, hanem a memórián, hogy ugyanoda mutat-e
// console.log(c.key === e.key); // true, mert itt már stringeket hasonlít össze
// console.log(("alma" === "alma"));

// ---------------------------------------------------

function createNewArrayWithValue(arr, val) { // ha új arrayt szeretnénk létrehozni, nem előzőt módosítani
    // const newArray = [...arr, val];
    // const newArray = JSON.parse(JSON.stringify(arr)).push(val); // valami nem működik
    const newArray = JSON.parse(JSON.stringify(arr))
    newArray.push(val);
    return newArray;
}
console.log(createNewArrayWithValue(array1, "true"));

function addArrayToArray(arr1, arr2) {
    /*
    for (let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i]);
    } 
    for (const item of arr1) {
        arr2.push(item);
    }
    return arr2;
    */
    return arr1.concat(arr2);
}
console.log(addArrayToArray(array1, array2));
console.log(array1, " ", array2);