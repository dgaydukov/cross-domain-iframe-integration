# Integration Problems

If your iframe has the same domain that your main website, then there are no problems. You have access from your website to iframe content, and vice versa.
But if iframe and website are two different domain, then the problems start. The problem of communication.
How will you pass data from iframe to website. The answer is ``window.postMessage``

## List of problems
Suppose you intergrate your iframe into another website, and you need solve following problems:

* Auth in website and pass data to iframe
* Url forwarding, from site to iframe
* Cookie forwarding, from iframe to site
* Height adjusting
* New page in Iframe, move to top in website


## Solution
1) After Auth in website, pass auth data to iframe with `postMessage`
2) If you detect url forwarding, reload iframe by changing url, or If iframe is [spa](https://en.wikipedia.org/wiki/Single-page_application), then pass url to iframe with `postMessage`
3) After success auth, return cookie to website with `postMessage`
4) Write your own function that watch height changing in iframe, and after every change sent `postMessage` to website. Website should listen, and change height of iframe
5) If you go to new page in iframe, and you need to scroll to top, then pass event to website with `postMessage`. Website should listen and execute `window.scrollTo(0,0)`