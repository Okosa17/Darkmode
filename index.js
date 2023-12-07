const darkBtn = document.querySelector("#dark-btn");

darkBtn.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("dark-theme")
})