
var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: 'test.test@gmail.com'
    },
   { 
    userName: "Dmitro",
    lastName: "Porohov",
    '<email': 'dmitro.porohov@yahoo.com>'

   },
    {
        userName: "Andrii",
        lastName: "",
        email: 'andrii@mail.ru' // Нам такі не підходять
    },
];

var arrStr = JSON.stringify(arr);
arrStr = arrStr.replace(/[<>]/g, '');
var emailPattern = /\b[\w\.]+@+(gmail\.com|yahoo\.com)\b/gm;
var normEmail = arrStr.match(emailPattern) || [];
console.log(normEmail);