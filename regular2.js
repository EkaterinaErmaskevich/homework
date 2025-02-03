var re = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}/g;
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        '<email:"dmitro.porohov@yahoo.com>'
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var arrStr = JSON.stringify(arr);
arrStr = arrStr.replace(/[<>]/g, '')