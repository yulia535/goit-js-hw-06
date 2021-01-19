import users from './users.js';

// Отримати масив імен всіх користувачів(поле name).
const getUserNames = (users) => {
  // твій код const names = users.map(user => user.name);
  return users.map((user) => user.name);
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

/////////////////////////////////////////////////////

// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
///////////////////////////////////////////////////////

// Отримати масив імен користувачів за статтю(поле gender).
const getUsersWithGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
};
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
/////////////////////////////////////////////////////////

//Отримати користувача(не масив) по email(поле email, він унікальний).

const getUserWithEmail = (users, email) => {
  // твій код
  return users.find((user) => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
////////////////////////////////////////////////////////

// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років(поле age).
const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => (user.age >= min) & (user.age <= max));
};

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
//////////////////////////////////////////////////////////

//Отримати загальну суму балансу (поле balance) всіх користувачів.
const calculateTotalBalance = (users) => {
  return users.reduce((acc, user) => acc + user.balance, 0);
};
console.log(calculateTotalBalance(users)); // 20916
/////////////////////////////////////////////////////////

//Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.
const getUsersWithFriend = (users, friendName) => {
  //const someFriend = (friend) => friend === friendName;
  return users
    .filter((user) => user.friends.some((friend) => friend === friendName))
    .map((user) => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
///////////////////////////////////////////////////////////

//Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)
const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
/////////////////////////////////////////////////////////////

//Отримати масив всіх умінь всіх користувачів (поле skills), при цьому
//не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.
const getSortedUniqueSkills = (users) => {
  const allskills = users.reduce((allskills, users) => {
    allskills.push(...users.skills);
    return allskills;
  }, []);
  return allskills
    .reduce((accumulator, skills) => {
      if (accumulator.indexOf(skills) === -1) {
        accumulator.push(skills);
      }
      return accumulator;
    }, [])
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum',
//'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident',
//'tempor', 'velit', 'veniam' ]
