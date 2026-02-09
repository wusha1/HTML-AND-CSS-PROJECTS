//RECIPE POP UP MODAL SECTION

//SETS UP THE BUTTON THAT WILL OPNE THE RECIPE MODAL
var btns = document.querySelectorAll("input.modal-button");

//Defines all modals for each recipe
var modals = document.querySelectorAll(".recipe-modal");

//Get the <span> element that closes the modal
var closeBth = document.getElementsByClassName("close-btn");

//when the user clicks the recipe button, open the modal
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute)
            ("href");
        modal.style.display = "block";
    }
}