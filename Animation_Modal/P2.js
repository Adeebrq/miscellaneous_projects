let openBtn= document.querySelector('#open-btn')
let closeBtn= document.querySelector('#Close-btn')
let modalContainer= document.getElementById('modal-Container')

/*Event listener*/
openBtn.addEventListener('click', function() {
    modalContainer.style.display= "block";
});

closeBtn.addEventListener('click', function(){
    
    modalContainer.style.display= "none";
});

window.addEventListener('click', function(e){
    if (e.target== modalContainer){
        modalContainer.style.display="none";
    }
})