//burgerMenu
const burgerMenu = document.querySelector('.header__menu--hidden');
const burgerButton = document.querySelector('.burger__menu');

function toggleMenu (){
    burgerMenu.style.display = (burgerMenu.style.display == "none" || burgerMenu.style.display == " ") ? "block" : "none";

}
burgerButton.addEventListener('click',(event) =>{
    event.stopPropagation();
    toggleMenu();
})

document.addEventListener("click", (even) => {
    if(!burgerButton.contains(event.target) && !burgerMenu.contains(even.target)){
        burgerMenu.style.display = 'none';
    }
})
//slider
const comment = document.querySelector('.slider__comment');
    const name = document.querySelector('.slider__name');
    const proffesion = document.querySelector('.slider__proffesion');
    const icon = document.querySelector('.slider__icon');

const collectComment = [
    {
        name:"Jonny Rezuls",
        proffesion:"Java Devoloper",
        comment:"Lo Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
        photo:"/img/slider__person.png",
    },
    {
        name:"Jonny Thomas",
        proffesion:"Project Manager",
        comment:"Lores Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
        photo:"/img/slider__person.png",
    },
    {
        name:"Jonny Ferguson",
        proffesion:"Product Manager",
        comment:"Lore Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
        photo:"/img/slider__person.png",
    }

];

var counter = 0;
const prevButton = document.querySelector('.slider__button--left').addEventListener("click", (even) => {
    even.preventDefault();
    if(counter == 0){
        counter = collectComment.length-1;
    }else{
    counter--;}
    updateSlider();

})
const nextButton = document.querySelector('.slider__button--right').addEventListener("click", (even) => {
    even.preventDefault();
    if(counter == collectComment.length-1){
        counter = 0;
    }else{
    counter++;}
    updateSlider();
})
function updateSlider(){
    comment.textContent = collectComment[counter].comment;
    name.textContent = collectComment[counter].name;
    proffesion.textContent = collectComment[counter].proffesion;
    icon.src = collectComment[counter].photo;
}

//validate form
document.getElementById('email').addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value;  
    const errorMessage = document.getElementById('errorMessage');  
    
    if (validateEmail(email)) {
        errorMessage.style.display = 'none'; 
        alert("Email is valid!"); 
    } else {
        errorMessage.style.display = 'block';  
    }
});

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}