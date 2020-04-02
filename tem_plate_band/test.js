var objs = [
  {name:"khanh" , age : 18},
  {name:"khanh" , age : 18},
  {name:"khanh" , age : 18},
  {name:"khanh" , age : 18},
  {name:"khanh" , age : 18}
]
var iage = 10;
objs.forEach(ele => {
  iage++;
  ele.age = iage;
})
console.log(objs);