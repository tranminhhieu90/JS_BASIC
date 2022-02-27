// Duyệt keys của object
// Nên dùng for...in để duyệt keys của object.
const student = {
  id: 1,
  name: 'Van A',
  isHero: true,
};
const keyList = Object.keys(student); // ['id', 'name', 'isHero']
for (let i = 0; i < keyList.length; i++) {
  const key = keyList[i];
  console.log('key:', key); // id, name, isHero
  console.log('value:', student[key]); // 1, 'Van A', true
}
// or a similar way using forEach
Object.keys(student).forEach((key) => {
  console.log('key:', key); // id, name, isHero
  console.log('value:', student[key]); // 1, 'Van A', true
});
const student = {
  id: 1,
  name: 'Van A',
  isHero: true,
};
// recommended
for (let key in student) {
  console.log('key:', key); // id, name, isHero
  console.log('value:', student[key]); // 1, 'Van A', true
}
