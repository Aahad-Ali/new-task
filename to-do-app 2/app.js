let mainDiv = document.getElementById('main');

let form = document.createElement('form');
mainDiv.appendChild(form);

let span = document.createElement('span');
// span.innerHTML = "PLZ fill data";
span.setAttribute("id", "error")
form.appendChild(span);
let br = document.createElement('br');
form.appendChild(br);

let input = document.createElement('input');
input.setAttribute("id", "inputData");
input.setAttribute("type", "text");
input.setAttribute("name", "text");
input.setAttribute("placeholder", "Enter your To Do list items");

form.appendChild(input);

let btn = document.createElement('input');
let btnText = document.createTextNode('ADD');

btn.setAttribute("id", "button");
btn.setAttribute("type", "button");
btn.setAttribute("value", "ADD");
btn.setAttribute("onClick", "addData()");

form.appendChild(btn);
btn.appendChild(btnText);

let unOrderList = document.createElement('ul');
unOrderList.setAttribute("id", "dataList")
form.appendChild(unOrderList);

function addData() {

    document.getElementById('error').innerHTML = "";

    let getData = document.getElementById('inputData').value;

    if (getData === "") {
        document.getElementById('error').innerHTML = " Enter some info";

    }
    else {
        let ul = document.getElementById('dataList');
        let li = document.createElement('li');
        li.setAttribute("id", "listItems")
        li.style.backgroundColor = "transparent";
        li.textContent = getData;


        let anchor = document.createElement('a');
        anchor.textContent = "Edit";
       anchor.setAttribute("id", "edit")
        li.appendChild(anchor);


        let a = document.createElement('a');
        a.textContent = "Delete";
        a.href = "javascript:void(0)";
        // form.appendChild(a)
        li.appendChild(a);


        
        // ul.appendChild(li);

        let position = ul.firstElementChild;

        if (position == null) {
            ul.appendChild(li);

        }
        else {
            ul.insertBefore(li, position);
        }
    }
    document.getElementById('inputData').value = "";

}
let btn1 = document.querySelector('ul');
btn1.addEventListener("click", function (e) {

    let ul = document.getElementById('dataList');
    let li = e.target.parentNode;
    ul.removeChild(li);

});

let btn2 = document.querySelector('ul');
btn2.addEventListener("click", function (ee) {

    let ul = document.getElementById('dataList');
    let li = ee.target.parentNode;
    ul.removeChild(li);

});




// sign-up page
// create a sign up page using HTML/CSS/JS
// signup form have these fields 
// -user name 
// -email
// -password
// -confirm password
// -address
// -Date of birth
// -gender
// -profile picture
// -number
// -postal code
// -sing-up button

// All fields are required and validate by conditions and display errors by field
// collect data from signup page and create as a object-form,
// save in local storage using JSON.stringify()
// during data collection from signup page and saving process display the loading bar or whatever animation, indicate to user for waiting.., after saving move to sign-in page..

// sign-in page
// create a sign in page
// display these fields
// -email
// -password
// sign-in button

// collect data from sign-in
// match the user email and password 
// if not match display the error message
// if user match display or move to the Dashboard page 
// dashboard display user name and welcome message
// dashboard have menu button
// menu button have 2 options 
// -profile
// -logout


// logout option can clear the localStorage and display the singin page
// profile option can display the all information which is store in localStorage 
// (search the profile page design)  and create whatever you like