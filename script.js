const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const previewImage = document.getElementById("preview-image");
const closeButton = document.getElementById("close-btn");

function openPreview(image) {
    previewImage.src = image.src;
    previewImage.alt = image.alt;
    lightbox.hidden = false;
    closeButton.focus();
}

function closePreview() {
    lightbox.hidden = true;
    previewImage.src = "";
}

galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
        openPreview(image);
    });
});

closeButton.addEventListener("click", closePreview);

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        closePreview();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !lightbox.hidden) {
        closePreview();
    }
});

