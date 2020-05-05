const headingOne = document.getElementById("heading-one");
headingOne.innerText = 'Cinco de Mayo | Taco Tuesday Shopping List'
headingOne.style.color = 'red';

//Take whats been typed into the input and create a list item from it
function addIngredient() {
    const ingredient = document.createElement('li');
    const ingredientInput = document.getElementById('ingredient-input');
    ingredient.innerText =ingredientInput.value;
    
    const doneBtn = document.createElement('button');
    doneBtn.innerText = "Done";
    doneBtn.addEventListener('click', function(event) {
        event.target.parentNode.remove();
    })
    ingredient.appendChild(doneBtn);

    document.getElementById('shopping-list').appendChild(ingredient);
    ingredientInput.value = '';
}


















// console.log(document.querySelector('ul').innerHTML);
// console.log(document.getElementsByTagName('li'));
// console.log(document.querySelector('.ingredients'));
// const ingredients = document.querySelectorAll('.ingredients');
// console.log(ingredients[0].className);

// const ingredientInput = document.getElementsById('ingredient-input');

// ingredientInput.addEventListener('keypress', function(event){
//     console.log(event)
// }) 

// document.getElementById('child').addEventListener('click', function(event) {
//     event.stopPropagation()
//     console.log('child button clicked')
// })

// function submit() {
//     console.log("Button clicked");
// }

// document.getElementById('form-btn').addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('form submitted')
// })