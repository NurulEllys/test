// Make sure the portfolio page and its assets are included in the cache
const CACHE_NAME = "digital-cv-v1"
const urlsToCache = [
  "/",
  "/index.html",
  "/aboutme.html",
  "/skills.html",
  "/portfolio.html",
  "/contact.html",
  "/stylesheet.css",
  "/app.js",
  "/images/cvlogo.png",
  "/images/mypic.jpg",
  "/images/project1.jpg",
  "/images/project2.jpg",
  "/images/project3.jpg",
  "/images/project4.png",
  "/images/project5.png",
  "/images/project6.jpg",
  "/manifest.json",
  "/images/icon-72x72.png",
  "/images/icon-96x96.png",
  "/images/icon-128x128.png",
  "/images/icon-152x152.png",
  "/images/icon-512x512.png",
]

// Install event - cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache")
      return cache.addAll(urlsToCache)
    }),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Fetch event - serve from cache, fall back to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response
      }

      // Clone the request
      const fetchRequest = event.request.clone()

      return fetch(fetchRequest).then((response) => {
        // Check if valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }

        // Clone the response
        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
    }),
  )
})