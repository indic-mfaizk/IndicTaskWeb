const obj = {
  val: "Faiz",
  fxn: function () {
    return this.val;
  },
};
let copyfxn = obj.fxn;
console.log(copyfxn());
const boundfxn = copyfxn.bind(obj);
console.log(boundfxn());
