// Optional chaining (?.)

// Syntax
// obj.val?.prop;
// obj.val?.[expr];
// obj.arr?.[index];
// obj.func?.(args);

const obj = {
  name: "Alice",
  cat: {
    name: "Dinah",
    cat2: {
      name: "Dinah2",
      cat3: {
        name: "Dinah3",
      },
    },
  },
  // getName(value) {
  //   console.log(value);
  // },
};

// without optional chaining
if (obj.cat && obj.cat.cat2 && obj.cat.cat2.cat3) {
  console.log("1:", obj.cat.cat2.cat3.name);
}

// with optional chaining
console.log("2:", obj.cat?.cat2.cat3?.name);
console.log("3:", obj["cat"]?.["cat2"]?.["cat3"]?.name);
obj.getName?.(123);
