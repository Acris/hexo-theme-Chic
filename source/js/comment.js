function loadDisqus() {
    let disqus_config = function () {
        this.page.url = document.location.origin + document.location.pathname;
        this.page.identifier = document.location.origin + document.location.pathname;
    };

    const d = document;
    const s = d.createElement('script');
    s.src = 'https://acris.disqus.com/embed.js';
    s.setAttribute('data-timestamp', String(+new Date()));
    (d.head || d.body).appendChild(s);
}

function initDisqus() {
    const runningOnBrowser = typeof window !== "undefined";
    const isBot = runningOnBrowser && !("onscroll" in window) || (typeof navigator !== "undefined" && /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent));
    const supportsIntersectionObserver = runningOnBrowser && "IntersectionObserver" in window;

    setTimeout(() => {
        if (!isBot && supportsIntersectionObserver) {
            const disqusObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    loadDisqus();
                    disqusObserver.disconnect();
                }
            }, {threshold: [0]});

            const element = document.getElementById('disqus_thread');
            if (element) {
                disqusObserver.observe(element);
            }
        } else {
            loadDisqus();
        }
    }, 5);
}

document.addEventListener('DOMContentLoaded', initDisqus);
