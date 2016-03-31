const React = require('react');
const ReactDOM = require('react-dom');
const ProductListComponent = 
  React.createFactory(require('../components/ProductListComponent'));
 
function decodeHTML(strToDecode) {
	const elem = document.createElement("div");
	elem.innerHTML = document.getElementById('context').textContent;
	return elem.textContent;
}

const context = JSON.parse(decodeHTML(document.getElementById('context').textContent));

const mountNode = document.getElementById("product-parent");

ReactDOM.render(ProductListComponent({'products': context.products}), mountNode);