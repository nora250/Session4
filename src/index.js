/*var、let、const変数*/
//var変数の宣言
// var val1 = "var変数";
// console.log(val1);
// //var変数の上書き
// val1 = "var変数の上書き";
// console.log(val1);
// //var変数の再宣言
// var val1 = "var変数の再宣言";
// console.log(val1);

//let変数の宣言
// let val2 = "let変数の宣言";
// console.log(val2);
// //let変数の上書き
// val2 = "let変数の上書き";
// console.log(val2);
// //let変数の再宣言は不可能
// let val2 = "let変数の再宣言";

//const変数の宣言
// const val3 = "const変数の宣言";
// console.log(val3);
// //const変数の上書きは不可能
// //val3 = "const変数の上書き";
// //const変数の再宣言は不可能
// const val3 = "const変数の再宣言";

//const変数オブジェクトのプロパティの変更は可能
// const val4 = {
//   name: "test1",
//   age: 28
// };
// val4.name = "test2";
// val4.adress = "Hyogo";
// console.log(val4);

//const変数配列のプロパティの変更は可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// /*テンプレート文字列*/
// const name = "test1";
// const age = 20;
// //私の名前は、test1です。年齢は20歳です。

// //従来の方法
// const massage1 = "従来：私の名前は、" + name + "です。年齢は" + age + "です。";
// console.log(massage1);

// //テンプレート文字列を用いた方法
// const massage2 = `テンプレート文字列：私の名前は、${name}です。年齢は${age}です。`;
// console.log(massage2);

/*アロー関数*/
//従来の関数
// function func1(str) {
//   return str;
// };
// const func1 = function func1(str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// // const func2 = (str) => {
// //   return str;
// // };
// // ()を省略可能
// // const func2 = (str) => {
// //   return str;
// // };
// //関数が単一の時、returnを省略することが可能
// const func2 = (str) => str;
// console.log(func2("func2です"));

// // const func99 = (int) => int * 2;
// // console.log(func99(9));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 10));

/*分割代入*/
// const myProfile = {
//   name: "test1",
//   age: 20
// };
// const massage1 = `私の名前は、${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(massage1);

// const { name, age } = myProfile;
// const massage2 = `私の名前は、${name}です。年齢は${age}です。`;
// console.log(massage2);

// const myProfile = ["test1", 28];
// console.log(`私の名前は、${myProfile[0]}です。年齢は${myProfile[1]}です。`);

// const [name, age] = myProfile;
// console.log(`私の名前は、${name}です。年齢は${age}です。`);

/*デフォルト値、引数など*/
// const sayHello = (str = "ゲスト") => console.log(`こんにちわ、${str}さん！`);
// sayHello("test1");

/*スプレッド構文 ...*/
//配列の展開
// const arry1 = [1, 2];
// // console.log(arry1);
// // console.log(...arry1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// //sumFunc(arry1[0], arry1[1]);
// sumFunc(...arry1);

//配列をまとめる
// const arry2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arry3] = arry2;
// console.log(num1);
// console.log(num2);
// console.log(arry3);

//配列のコピー、結合
// =で配列を引き継いだ時、引き継ぎ先の値を変更すると引き継ぎ元の値も変更されてしまう
const arry4 = [10, 20];
const arry5 = [30, 40];
const arry6 = [...arry4];
const arry7 = [...arry4, ...arry5];
const arry8 = [...arry5, ...arry4];
console.log(arry4);
console.log(arry6);
console.log(arry7);
console.log(arry8);
