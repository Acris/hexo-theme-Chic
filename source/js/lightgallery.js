function initLightGallery() {
    document.querySelectorAll('.post-content :not(a) > img').forEach(image => {
        const imageSrc = image.src;
        const imageTitle = image.title || image.alt;

        const anchor = document.createElement('a');
        anchor.classList.add("light-gallery")
        anchor.href = imageSrc;
        anchor.dataset.src = imageSrc;

        if (imageTitle) {
            // 使用模板字符串
            anchor.dataset.subHtml = `<h4>${imageTitle}</h4>`;
        }

        image.parentNode.insertBefore(anchor, image);
        anchor.appendChild(image);
    });

    lightGallery(document.getElementsByClassName('post-content')[0], {
        selector: '.light-gallery', download: false
    });
}

document.addEventListener('DOMContentLoaded', initLightGallery);
