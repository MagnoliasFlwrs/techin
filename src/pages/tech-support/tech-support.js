document.addEventListener("DOMContentLoaded", function() {
    let fileInput = document.querySelector(".file-upload input[type=file]");
    fileInput?.addEventListener("change", function() {
        let filename = fileInput.value.replace(/.*\\/, "");
        document.getElementById("filename").value = filename;
    });
});

// gallery-modal
const galleryModal = document.querySelector('.gallery-modal');
const galleryModalImage = document.querySelector('.gallery-body .gallery-img img');
const galleryModalCloseBtn = document.querySelector('.gallery-modal .close-modal span');
const galleryThumbs = document.querySelectorAll('.show-map');


function showGalleryModal() {
    galleryThumbs.forEach(el=> {
        el.addEventListener('click' , ()=> {
            galleryModalImage.src = el.closest('.image-container').querySelector('img').src;
            galleryModal.classList.add('open');
            overlay.classList.add('open');
        })
    })
}
function closeGalleryModal() {
    galleryModalCloseBtn.addEventListener('click' , ()=> {
        galleryModal.classList.remove('open');
        overlay.classList.remove('open');
    })
    overlay.addEventListener('click' , ()=> {
        galleryModal.classList.remove('open');
        overlay.classList.remove('open');
    })
}

showGalleryModal();
closeGalleryModal();