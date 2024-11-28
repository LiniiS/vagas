self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('vagas-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/app.js',
                '/manifest.json',
                '/assets/icons/icon-192x192.png',
                '/assets/icons/icon-512x512.png',
                '/jobs.json',
                '/assets/img/analise-dados.jpg',
                '/assets/img/design.jpg',
                '/assets/img/marketing.jpg',
                '/assets/img/dev-web.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
