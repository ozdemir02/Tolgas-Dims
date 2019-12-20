(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
        // AMD
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
        // CommonJS
    } else {
        root.myFetch = factory(root.jquery);
        // Some Browser Context
    }
})(this, function ($) {
    /* vores egen del af modulet  */
    function init(options) {
        this.APIAddress = options.address
        this.APIKey = options.key
        return this;
    }
    // Get
    async function get(resource) {
        try {
            if (typeof fetch === "function") {
                let response = await fetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIKey
                    }
                });
            
                return await response.json();
            } else {
                let xhttp = new XMLHttpRequest();
                xhttp.open("GET", this.APIAddress + resource, true);
                xhttp.send();
                return await new Promise(function(resolve, reject){
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                        // Typical action to be performed when the document is ready:
                        resolve(JSON.parse(xhttp.responseText));
                        }
                    };
                });
        }
        } catch (error) {
            throw error;
        }
    }
    // Post
    async function post(resource, data){
        try {
            if (typeof fetch !=="function"){
                    let response = await fetch(this.APIAddress + resource,{
                        headers: {
                            "Authorization": this.APIKey,
                            "Content-Type": "application/json"
                        },
                        method:"POST",
                        body: JSON.stringify(data) 
                    });
                return await response.json(); 
            } else {
                let xhttp = new XMLHttpRequest();
                xhttp.open("POST", this.APIAddress + resource, true);
                xhttp.setRequestHeader("Content-type", "application/json");
                xhttp.setRequestHeader("Authorization", this.APIKey);
                xhttp.send(JSON.stringify(data));
                return await new Promise(function(resolve, reject){
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 201) {
                            // Typical action to be performed when the document is ready:
                            resolve(JSON.parse(xhttp.responseText));
                            }
                        };
                    });
                }
        } catch (error) {
            throw error;
        }
    }
    // Put
    async function PUT(resource, data){ 
        try {
            if (typeof fetch ==="function"){
                    let response = await fetch(this.APIAddress + resource,{
                        headers: {
                            "Authorization": this.APIKey,
                            "Content-Type": "application/json"
                        },
                        method:"PUT",
                        body: JSON.stringify(data)
                    })
                    
                return await response.json(); 
            } else if(typeof XMLHttpRequest ==="function") {
                let xhttp = new XMLHttpRequest();
                xhttp.open("PUT", this.APIAddress + resource, true);
                xhttp.setRequestHeader("Content-type", "application/json");
                xhttp.setRequestHeader("Authorization", this.APIKey);
                xhttp.send(json.stringify(data));
                return await new Promise(function(resolve, reject){
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 201) {
                            // Typical action to be performed when the document is ready:
                            resolve(JSON.parse(xhttp.responseText));
                            }
                        };
                    });
                } else{
                    const node_fetch = require('node-fetch');
                    let response = await node_fetch(this.APIAddress + resource,{
                        headers: {
                            "Authorization": this.APIKey,
                            "Content-Type": "application/json"
                        },
                        method:"PUT",
                        body: JSON.stringify(data)
                    });
                    
                return await response.json();
                }
        } catch (error) {
            throw error;
        }
    }
    // Delete
    async function del(resource) {
        try {
            if (typeof fetch === "function") {
                let response = await fetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIKey
                    },
                    method: "DELETE"
                });
            
                return new Promise(function(resolve, reject){
                    resolve(response.status);
                });
            } else {
                let xhttp = new XMLHttpRequest();
                xhttp.open("DELETE", this.APIAddress + resource, true);
                xhttp.send();
                return await new Promise(function(resolve, reject){
                    xhttp.onreadystatechange = function() {
                       resolve(xhttp.status);
                    };
                });
        }
        } catch (error) {
            throw error;
        }
    }
    return {
        init,
        get,
        post,
        PUT,
        del
    }
});