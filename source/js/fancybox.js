function initFancyBox() {
    document.querySelectorAll('.post-content :not(a) > img').forEach(element => {
        let $image = $(element);
        let imageLink = $image.attr('data-src') || $image.attr('src');
        let $imageWrapLink = $image.wrap(`<a href="${imageLink}" data-fancybox="gallery"></a>`).parent('a');

        let imageTitle = $image.attr('title') || $image.attr('alt');
        if (imageTitle) {
            // Make sure img title tag will show correctly in fancybox
            $imageWrapLink.attr('title', imageTitle).attr('data-caption', imageTitle);
        }
    });

    $.fancybox.defaults.hash = false;
    $('.fancybox').fancybox({
        loop   : true,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
}

$(document).ready(initFancyBox());
