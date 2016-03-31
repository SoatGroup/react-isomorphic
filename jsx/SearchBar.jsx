"use strict"

const React = require('react');
const ReactDOM = require('react-dom');

class SearchBar extends React.Component {

	constructor(props) {
		super(props);
  		this.searchProduct = this.searchProduct.bind(this);
  		this.keyDownHandler = this.keyDownHandler.bind(this);
 	}

 	componentDidMount() {
 		this.textInput.focus();
 	}
 	
	searchProduct() {
		const productName = this.textInput.value;
		this.props.onSearch(productName);
	}

	keyDownHandler(event) {
		if(event.keyCode == 13){
            this.searchProduct();
        }
	}

 	render() {
 		return (
 			<div className="form-group">
	 			<div className="input-group col-md-6">
	 				<input type="text"
	 					className="form-control" 
	 					onKeyDown={this.keyDownHandler} 
	 					ref={(ref) => this.textInput = ref} 
	 					placeholder="Recherche...." />
	                
	                <span className="input-group-btn">
	        			<button onClick={this.searchProduct} className="btn btn-primary" type="button">
	        				<span className="glyphicon glyphicon-search"></span>
	        			</button>
	      			</span>
	 			</div>
	 		</div>
 		)
  	}
}

module.exports = SearchBar;