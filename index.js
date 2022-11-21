const clickHereBtn = document.getElementById('click-here');
const outputBox = document.querySelector('output');
const confirmResult = document.querySelector('#confirmBtn');
const selectedItem = document.querySelector('select');


const avatarBtn = document.getElementById('add_new_avatar');


// dialog to megaDialog
const megaDialog = document.getElementById('dialog');

avatarBtn.addEventListener('click', function onOpen() {
    megaDialog.showModal();
});


const avatarFormElement = document.querySelector("#get_avatar_image_form");

const fileInput = avatarFormElement.querySelector("input[name=userimage]");

function formSubmitted(event){
    const files = fileInput.files;
    if(files.length == 0 ) {
        console.log("No file submitted");
        return;
    }
    const image = files[0];
   const imageUrl = URL.createObjectURL(image);
   addImageToTheDOM(imageUrl);

}
function addImageToTheDOM(imageURL){
    const button = document.createElement("button");
    button.classList.add("avatar-img-btn");
    const closeIcon = document.createElement("ion-icon");
    closeIcon.classList.add("close-avatar-icon");

    closeIcon.name = "close-outline";

    button.appendChild(closeIcon);
    
    const imageElt = document.createElement("img");
    imageElt.src = imageURL;
    imageElt.classList.add("avatar-img");

    button.appendChild(imageElt);
    const addAvatarButton = document.querySelector("#add_new_avatar");
    document.body.insertBefore(button, addAvatarButton);


}

avatarFormElement.addEventListener("submit", formSubmitted);

// Mini Dialog

const button = document.createElement("button");
button.classList.add("avatar-img-btn");
const closeIcon = document.createElement("ion-icon");
closeIcon.classList.add("close-avatar-icon");

closeIcon.name = "close-outline";

button.appendChild(closeIcon);


// Mini Dialog my code

// const avatarClose = document.querySelector('.avatar-img.btn');

// avatarClose.addEventListener('click', function onOpen() {
//     minidialog.showModal();
// })



// Closing MegaDialog
const closeMegaDialog = document.querySelector(".card--head-close_dialog");

closeMegaDialog.addEventListener('click', function(e) {
    e.preventDefault();
    megaDialog.close();
})

// Clearing the dialog
const clearMegaDialog = document.querySelector(".card--footer-clear_btn");

clearMegaDialog.addEventListener('click', function(e) {
    e.preventDefault();
    fileInput.value = null;
})

// Cancelling the MegaDialog
const cancelMegaDialog = document.querySelector(".card--footer-cancel_btn");

cancelMegaDialog.addEventListener('click', function(e) {
    e.preventDefault();
    megaDialog.close();
})