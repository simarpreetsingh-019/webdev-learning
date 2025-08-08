let btn = document.createElement("button");

btn.innerText="Click me !";
btn.style.backgroundColor="red";
btn.style.color="white";

console.log(btn);
console.dir(btn);

document.querySelector("body").append(btn);
let count = 0;

btn.onclick = () =>{
  count++;
  console.log(count + "times Button was clicked"); 
}

let btn2 = document.createElement("button");

btn2.innerText="Click me 2 !";
btn2.style.backgroundColor="green";
btn2.style.color="white";

console.log(btn2);
console.dir(btn2);

document.querySelector("button").after(btn2);

// btn2.onclick = (event) => {
//   console.log(event);
//   console.log(event.type);
//   console.log(event.target);
// }

btn2.addEventListener("click",(event) => {
  console.log("Click event listener worked., Event Type : ", event.type);
})

console.log()

btn2.addEventListener("click",(event) => {
  console.log(event);
})