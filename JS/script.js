"use strict";

/* 1. მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით, 
შეიძლება 100 ან 200 ან 10. მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]  
splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მაგივრად ჩასვით “strawberry”. */

let fruits = ["apple", "mango", "avocado", "kiwi"];

const editFruits = fruits.length - 2;
fruits.splice(editFruits, 1, "strawberry");
console.log(fruits);

/* 2. მოცემულია სტრინგი: let info = "good day”, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუალებით. */

let info = "good day";

const sliceDay = info.slice(5);
console.log(sliceDay);

/* 3.დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს. */

const stringLength = (string) => string.length;
console.log(stringLength("Ani"));

/* 4. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36; 

მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
წაშალეთ მასივიდან პირველი და ბოლო ელემენტი; */

const array = [5, 25, 89, 120, 36];

array.push("javascript", "python");
array.unshift("html", "css");
console.log(array.length);
array.shift();
array.pop();
console.log(array);

/* 5. შექმენით მასივი, შემდეგი ელემენტებით:ფორთოხალი,ბანანი,კივი;

  გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
  მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
  მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო; 
  გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
  მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
  წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
  გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში; */

const fruitsArray = ["orange", "banana", "kiwi"];

console.log(fruitsArray.length);
fruitsArray.push("banana", "pineapple");
fruitsArray.unshift("watermelon");
console.log(fruitsArray.length);
fruitsArray.splice(3, 0, "mango");
fruitsArray.shift();
fruitsArray.pop();
console.log(fruitsArray.length);
console.log(fruitsArray);

/* 6. მოცემულია მასივი let array3 =[1, 2, 3, 4, 5]. 
splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5]. */

let array3 = [1, 2, 3, 4, 5];

array3.splice(3, 0, "a", "b", "c");
console.log(array3);

/* 7. მოცემულია მასივი: let array7 =  [15, 100, 25, 10, 36]
 წაშალეთ ამ მასივიდან რიცხვი 10; */

let array7 = [15, 100, 25, 10, 36];
array7.splice(-2, 1);

/* 8. მოცემულია მასივი:   let array8 = [ 1, 2 , 3 , 4, 5] 
Splice მეთოდის საშალებით 3-ის მაგივრად ჩასვით სიტყვა three; */

let array8 = [1, 2, 3, 4, 5];
array8.splice(2, 0, "three");

/* 9. მოცემულია მასივი:
let array4 = [1, 2, 3, 4, 5];
foreach საშუალებით გამოთვალეთ რიცხვების ჯამი. */

let array4 = [1, 2, 3, 4, 5];

let sum = 0;
array4.forEach((number) => (sum += number));
console.log(sum);

/* 10. მოცემულია მასივი:
let array2 = [14, 150, 'css', null, 'javascript', 25];

შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. 
თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. 
სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად. */

let array2 = [14, 150, "css", null, "javascript", 25];

const newArray2 = array2.map((element) =>
  typeof element === "number"
    ? element ** 2
    : typeof element === "string"
    ? element.toUpperCase()
    : element
);
console.log(newArray2);

/* 11. prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: 
საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში. 
როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. 
თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია. */

const userResponse = prompt("The capital of Georgia?").toLowerCase();
console.log(userResponse === "tbilisi" ? "Correct" : "False");

/* 12. მოცემულია მასივი:
let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];
map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი; */

let array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let dividedArray = array5.map((number) => number / 3);
console.log(dividedArray);

/* 13. მოცემულია მასივი, შემდეგი მნიშვნელობებით - let array1 =[“hello1”, 14,24, “hello2”] 
გამოიტანეთ მარტო ციფრები მეთოდის საშუალებით; */

let array1 = ["hello1", 14, 24, "hello2"];

let filteredNumbers = array1.filter((element) => typeof element === "number");
console.log(filteredNumbers);

/* 14. მოცემულია მასივი:
let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვა რომლის სიმბოლოების რაოდენობა იქნება 3-ზე მეტი; */

let languages = ["html", "css", "javascript", "python", "php"];

const fillterLanguages = languages.filter((word) => word.length > 3);
console.log(fillterLanguages);

/* 15. მოცემულია მასივი:
let words = ['Madrid', 'rome', 'Milan', 'berlin'];
filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს; */

let words = ["Madrid", "rome", "Milan", "berlin"];

const filteredWords = words.filter((word) => word.toLowerCase().includes("m"));
console.log(filteredWords);

/* 16. მოცემულია: let link = “https://google.com”. 
დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ამ ცვლადს, და შეამოწმეთ მეთოდის საშუალებით არის თუ არა ამ ცვლადში “https://“. 
თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, არ მოიცავს; */

let link = "https://google.com";

const functionLink = (string) => string.includes("https://google.com");
console.log(functionLink(link));

/* 17. შეამოწმეთ მოცემულ მასივში let array6 = [-1, -2, -3, 4]; არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთოდით. */

let array6 = [-1, -2, -3, 4];

const positiveNumber = (number) => number > 0;
console.log(array6.some(positiveNumber));

/* 18. მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვების ჯამი. 
(უნდა გადაიყავნოთ მასივში, გათვალოთ ჯამი, და შემდგ თითოეული სტრინგი გადაიყავნოთ რიცხვში) */

let string = "12345";

const numberArray = string.split("");
const stringNumSum = numberArray.reduce(
  (accumulator, current) => accumulator + Number(current),
  0
);
console.log(stringNumSum);

/* 19. Გამოთვალეთ ნებისმიერი რიცხვებს ჯამი reduce მეთოდით */

const arrayNumbers = [10, 20, 30, 40, 50];

const arraySum = arrayNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(arraySum);

/* 20. Გაერთიანეთ სამი მასივის მნიშვენლობები 
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6]; 
Ერთ მასივში; */

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

const unionArray = arr1.concat(arr2, arr3);
console.log(unionArray);
