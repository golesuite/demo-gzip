var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {
    
    location.reload();
});

const text = document.querySelector("h1");
  function changeColor() {
    text.style.color = "blue";
  }
