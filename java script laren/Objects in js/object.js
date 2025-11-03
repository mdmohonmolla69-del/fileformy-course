const newSymb = Symbol("key1");
const mobileModel = {
    barnd: "I Phone",
    model: " Kingo",
    procesor: "Midiatake 8030",
    camera: ["200MP", "12MP", "12MP"],
    hasZooomCamera: true,
    "selfie camera MP": 12,
    [newSymb]: "Mykey1",
    brndModel: function (){
        return `Model Name is ${this.barnd} and model is ${this.model}`
    },
    battray: {
        mah: 5000,
    },
};

console.log(mobileModel[newSymb]);
Object.freeze(mobileModel);
mobileModel.model = "s25";
console.log(mobileModel);
console.log(mobileModel.barnd);
console.log(mobileModel["selfie camera MP"]);
console.log(mobileModel.hasOwnProperty("camera"));
console.log(Object.keys(mobileModel));
console.log(Object.values(mobileModel));

const obj1 = {
    a:1,
    b:2,
    c:3,
}
const obj2 = {
    d:1,
    e:2,
    f:3,
}
const obj3 = {
    g:1,
    h:2,
    i:3,
}

const objFainal = Object.assign({}, obj1, obj2, obj3);

// This Is Modern Pattis
const objFainall = { ...obj1, ...obj2, ...obj3};

console.log(objFainal);
console.log(objFainall)

console.log(mobileModel.battray.mah)