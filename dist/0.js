(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/headlines.js":
/*!**************************!*\
  !*** ./src/headlines.js ***!
  \**************************/
/*! exports provided: fetchHeadLinesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchHeadLinesData\", function() { return fetchHeadLinesData; });\n//-------------------------------------Fetching headlines data-----------------------------------------\r\nclass fetchHeadLinesData{\r\n\tconstructor(){\r\n\t\tthis.fetchHeadlines();\r\n\t}\r\n\tfetchHeadlines(){\r\n\t\tfetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=94a28e3dd8314a2cb51e81a385bb052a`)\r\n\t\t.then(headlines => {\r\n\t\t\treturn headlines.json();\r\n\t\t})\r\n\t\t.then(headlines => {\r\n\t\t\tthis.headLine(headlines.articles);\t\r\n\t\t});\r\n\t}\r\n\theadLine(headData){\r\n\t\tlet body = document.getElementsByClassName(\"body__main\")[0];\r\n\t\tlet headline_block = document.createElement(\"div\");\r\n\t\theadline_block.setAttribute('class','continue_block');\r\n\t\tlet headline_content = document.createElement(\"div\");\r\n\t\theadline_content.setAttribute('class','headline_content');\r\n\t\tlet headline_close = document.createElement(\"span\");\r\n\t\theadline_close.innerHTML = \"x\";\r\n\t\theadline_close.setAttribute('class','continue_close');\r\n\t\theadline_content.appendChild(headline_close);\r\n\t\tfor(let position = 0;position < 10;position++){\r\n\t\t\tlet headline_data = document.createElement(\"h2\");\r\n\t\t\theadline_data.setAttribute('class','head_lines');\r\n\t\t\theadline_data.innerHTML = headData[position].title;\r\n\t\t\theadline_content.appendChild(headline_data);\r\n\t\t}\r\n\t\theadline_block.appendChild(headline_content);\r\n\t\tbody.appendChild(headline_block);\r\n\t\theadline_close.onclick = function(){\r\n\t\t\theadline_block.style.display = \"none\";\r\n\t\t}\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/headlines.js?");

/***/ })

}]);