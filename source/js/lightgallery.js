function initLightGallery() {
    document.querySelectorAll('.post-content :not(a) > img').forEach(image => {
        let imageSrc = image.getAttribute('src');
        let imageWrapLink = document.createElement('a');
        imageWrapLink.setAttribute("href", imageSrc);
        image.parentNode.insertBefore(imageWrapLink, image);
        let imageTitle = image.getAttribute('title') || image.getAttribute('alt');
        if (imageTitle) {
            imageWrapLink.setAttribute('title', imageTitle);
        }
    });

    lightGallery(document.getElementsByClassName('post-content'));
}
