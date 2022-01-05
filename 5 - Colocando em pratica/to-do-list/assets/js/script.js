var input = document.querySelector('#tarefa');
var list = document.querySelector("#list");


function addTarefa(){

    list.insertAdjacentHTML ("beforeEnd", `<div class="check">
    <input type="checkbox" id="${input.value}" name="${input.value}"/> 
    <label for="scales">${input.value}</label>
    </div>`);

    input.value = "";

    var check = document.getElementsByClassName("check");
    var i;

    for (i = 0; i < check.length; i++) {       
        check[i].addEventListener("change", function(){
            
            if (this.getElementsByTagName("input")[0].checked) {         
                this.classList.add("active");
            } else {
                this.classList.remove("active");
            }         
        });
    } 

}
