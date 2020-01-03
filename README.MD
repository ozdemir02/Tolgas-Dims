# UMD Test
![](https://img.shields.io/npm/v/@tolga-z/umd?label=Npm%20version&style=flat-square)
![](https://img.shields.io/bundlephobia/min/@tolga-z/umd?label=Install%20Size&style=flat-square)
![](https://img.shields.io/npm/l/@tolga-z/umd?style=flat-square)
![](https://img.shields.io/jsdelivr/npm/hy/@tolga-z/umd?label=Downloads&style=flat-square)
## How to install
```bash
npm i @tolga-z/umd
```
## How to use
#### You can set the api you want to fetch from, in the "Test.js" file. 
```js
if (typeof exports === "object") {
  var nodeFetch = require("@tolga-z/umd");
}
 
nodeFetch.init({
  address: "https://YOUR.API/LINK", // Link fetch adress
  key: "1234" // Key Api
});
 
nodeFetch.get("1").then(result => console.log(result));
```

#### If you want to test the node-fetch, just type in terminal: "node test" 

## There are 4 diffirent methods
### **1. Get** 
### **2. Post**
### **3. Put**
### **4. Delete**

#### JS is written in Jquery.
#### All are set in order from top to bottom in the umd.js file.

**ENJOY!!!!**