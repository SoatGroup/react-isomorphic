"use strict"

const React = require('react');

class ProductTable extends React.Component {

 	render() {
 		const rows = [];
 		this.props.products
 			.forEach((p) => rows.push(<ProductItem key={p.id} product={p} />));

 		return rows.length > 0 ? this.createProductTable(rows) : this.createProductNotFoundAlert();
  	}

  	createProductTable(rows) {
  		return (
	 		<table className="table table-hover">
	 			<thead>
	 				<tr>
		 				<th>Nom</th>
		 				<th>Quantité</th>
		 				<th>Lieu de frabrication</th>
	 				</tr>
	 			</thead>
	 			<tbody>
	 				{rows}
	 			</tbody>
	 		</table>
	 	)
  	}

  	createProductNotFoundAlert() {
  		return (
 				<div className="alert alert-info">
 					<strong>Aucun fruit trouvé !</strong>
 				</div>
 			)
  	}
}

class ProductItem extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.product.name}</td>
				<td>{this.props.product.quantity}</td>
				<td>
					<img src="img/blank.gif" className={"flag flag-" + this.props.product.from.suffix} 
						alt={this.props.product.from.title} 
						title={this.props.product.from.title} />
				</td>
			</tr>
		)
	}
}

module.exports = ProductTable;