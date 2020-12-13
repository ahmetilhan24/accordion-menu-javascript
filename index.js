var menu = document.getElementsByClassName("menu");



for (i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function () {
        var content = this.nextElementSibling;
        this.classList.toggle("menu-open");
        if(content.style.maxHeight){
            content.style.maxHeight = null;
            
            this.style.backgroundColor = "#3E5264";      
        }else{
            content.style.maxHeight = content.scrollHeight + "px";
            this.style.backgroundColor = "#203447";
        }
    });
};