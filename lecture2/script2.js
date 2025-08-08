let p_tag = document.querySelector("p");
console.dir(p_tag);

console.log("p tag class list is ", p_tag.classList);

p_tag.classList.add("new-para");

let mode = "light"


p_tag.addEventListener("click", (e) => {
  if(mode === 'light')
  {
    mode = 'dark';
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    console.log("dark");
  }
  else
  {
    mode = 'light';
    document.querySelector("body").style.backgroundColor = "white"
    document.querySelector("body").style.color = "black"
    console.log("light");
  }
})