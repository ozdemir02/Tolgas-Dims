# UMD Test

## How to install
```bash
npm i @tolga-z/umd
```
## How to use
#### You can set the api you want to fetch from, in the "Test.js" file. 
```js
if (typeof exports === "object") {
  var nodeFetch = require("@benjics/nodefetch");
}
 
nodeFetch.init({
  address: "https://YOUR.API/LINK", // Here you set your link to your fetch address
  key: "1234" // Here you set your key to your api If you have one
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