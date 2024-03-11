document.addEventListener("click", function(e) {
    // console.log(e.target);
    if(e.target.classList.contains("photo_gallery")){
        const src = e.target.getAttribute("src");
        // console.log(src);
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('my-modal-gallery'));
        myModal.show();
    }
})