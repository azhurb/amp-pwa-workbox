module.exports = {
    "globDirectory": "./",
    "globPatterns": [
        "img/**.*",
        "offline.html",
        "icons/**.*"
    ],
    "swSrc": "src/sw.js",
    "swDest": "service-worker.js",
    "globIgnores": [
        "./workbox-cli-config.js"
    ]
};