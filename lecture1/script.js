let headers = document.getElementsByClassName("header-class");
console.log("HEader class : ", headers);
console.dir(headers);

let ids = document.getElementById("unordered-list");
console.log("UL Id : ", ids);
console.dir(ids);

let p_tag = document.getElementsByTagName("p");
console.log("Tagname p : ", p_tag);
console.dir(p_tag);

let newDiv = document.createElement("div");
newDiv.innerText="This is the DIV we just created using create Element";

console.log(newDiv);

let h2 = document.querySelector("h2");
h2.after(newDiv);

let newBtn = document.createElement("button");
newBtn.innerText="This is the Button we just created using create Element";
newBtn.backgroundColor = "green";

newDiv.append(newBtn);

let newBtn = document.createElement("button");
newBtn.innerText="This is the Button we just created using create Element";
newBtn.backgroundColor = "green";

newDiv.append(newBtn);


