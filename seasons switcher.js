let seasonSmallImageEl = document.getElementById("seasonSmallImage");
let seasonMediumImageEl = document.getElementById("seasonMediumImage");
let springBtnEl = document.getElementById("springBtn");
let summerBtnEl = document.getElementById("summerBtn");
let autumnBtnEl = document.getElementById("autumnBtn");
let winterBtnEl = document.getElementById("winterBtn");
springBtnEl.onclick = function() {
    seasonSmallImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
    seasonMediumImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
};
summerBtnEl.onclick = function() {
    seasonSmallImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
    seasonMediumImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
};
autumnBtnEl.onclick = function() {
    seasonSmallImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
    seasonMediumImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
};
winterBtnEl.onclick = function() {
    seasonSmallImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
    seasonMediumImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";
};