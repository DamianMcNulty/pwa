"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["https://damianmcnulty-java.appspot.com/build/client/css/landing.401365d7.css","401365d73a7911603ea9e20e128d24da"],["https://damianmcnulty-java.appspot.com/build/client/css/main.7874d8c8.css","7874d8c8f02fc4ad1e6598c2d4444573"],["https://damianmcnulty-java.appspot.com/build/client/css/vendor.8a31d4ba.css","8a31d4ba9fd43f324fd2b178de96c880"],["https://damianmcnulty-java.appspot.com/build/client/images/404.627f13e3.png","627f13e3f12fd1d521fa7fd01eeac8ee"],["https://damianmcnulty-java.appspot.com/build/client/js/landing.7368da05.js","fa2c99009be3ed15e6cdd335cb89803b"],["https://damianmcnulty-java.appspot.com/build/client/js/main.1318787c.js","15d140d0965c24b5ce17dee74ad0e1fb"],["https://damianmcnulty-java.appspot.com/build/client/js/vendor.6d4090eb.js","22dfc59f4b8816e7331881c7e7af3cba"],["https://damianmcnulty-java.appspot.com/build/client/js/webpackManifest.0c68c675.js","0c764a57d83c8b2c4bdfbba59f67dd5b"],["https://damianmcnulty-java.appspot.com/build/client/offline/offline.1a2b3c4d.html","f8466460cd6b04839adcfeac5a9c9858"],["https://damianmcnulty-java.appspot.com/build/client/offline/offline.1a2b3c4d.js","78037324e714bced0252ce4df883b5fd"]],cacheName="sw-precache-v3-pwa-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/./);return[a.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),importScripts("https://damianmcnulty-java.appspot.com/build/client/offline/offline.1a2b3c4d.js");