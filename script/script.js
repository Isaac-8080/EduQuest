
// sign up page (signup.html) codes below
    

function hideAndDisplay() {
    
    const $firstName = document.querySelector('#firstname').value;

    const $lastName = document.querySelector('#lastname').value;

    const $middleName = document.querySelector('#middlename').value;

    const $age = document.querySelector('#date').value;

    if ($firstName && $lastName && $middleName && $age){
        
        document.querySelector('#firstdisplay').classList.add('hidden');
        
        document.querySelector('#seconddisplay').classList.remove('hidden');

        
    } else {

        // document.querySelector('#alertmss').innerHTML = 'hello';

        alert('sorry');

    }
}

// hideAndDisplay();

// This function displays a bottom popup assigned to login info icon
function passwordInfoPopup() {
    
    const $popUp = document.querySelector('#pswdPopup');

    if ($popUp.style.display === 'block') {
        
        $popUp.style.display = 'none';

    } else {

        $popUp.style.display = 'block';

    }

    // return $popUp;
}

// This function displays a bottom popup assigned to more vert icon
function moreVertPopup() {
    
    const $popUp = document.querySelector('#moreVert');

    if ($popUp.style.display === 'block') {
        
        $popUp.style.display = 'none';

    } else {

        $popUp.style.display = 'block';

    }

    // return $popUp;
}