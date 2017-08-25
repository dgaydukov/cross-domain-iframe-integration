# Integration Problems

If your iframe has the same domain that your main website, then there are no problems. You have access from your website to iframe content, and vice versa.
But if iframe and website are two different domain, then the problems start. The problem of communication.
How will you pass data from iframe to website. The answer is ``window.postMessage``

The problems are following
* Auth in website and pass data to iframe
* Url forwarding, from site to iframe
* Cookie forwarding, from iframe to site
* Height adjusting
* New page in Iframe, move to top in website