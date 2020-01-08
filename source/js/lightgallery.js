function initLightGallery() {
    document.querySelectorAll('.post-content :not(a) > img').forEach(image => {
        let imageSrc = image.getAttribute('src');
        let imageWrapLink = document.createElement('a');
        imageWrapLink.classList.add("light-gallery")
        imageWrapLink.setAttribute("href", imageSrc);
        imageWrapLink.setAttribute("data-src", imageSrc);
        image.parentNode.insertBefore(imageWrapLink, image);
        imageWrapLink.appendChild(image);
        let imageTitle = image.getAttribute('title') || image.getAttribute('alt');
        if (imageTitle) {
            imageWrapLink.setAttribute('data-sub-html', '<h4>' + imageTitle + '</h4>');
        }
    });

    lightGallery(document.getElementsByClassName('post-content')[0], {
        selector: '.light-gallery',
        download: false
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    initLightGallery();
});
