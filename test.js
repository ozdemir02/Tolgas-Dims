let myFetch = require("./umd");
myFetch.init({
    address: "https://reqres.in/api/users/",
})
myFetch.PUT("2",{
    name:"Tolga"
}).then(data => console.log(data)
);
