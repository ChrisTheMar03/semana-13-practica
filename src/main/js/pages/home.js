const React = require('react');
const client = require('../client.js');
const {Link} = require('react-router-dom')

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {productos: [],ventas: []};
		//detalleventas:[]
	}
	componentDidMount() {

		//Musico-otro
		client({method: 'GET', path: '/api/productos'}).done(response => {
			this.setState({productos: response.entity._embedded.productos});
		});

		//Igual a banda
		client({method: 'GET', path: '/api/ventas'}).done(response => {
			this.setState({ventas: response.entity._embedded.ventas});
		});

		/*client({method: 'GET', path: '/api/detalleventas'}).done(response => {
			this.setState({detalleventas: response.entity._embedded.detalleventas});
		});*/

	}
	
	render() {
		return (
			<>
				<h1>Practica para Final</h1>

				<div style={{width:"100%",display:"flex",justifyContent:"center"}}>

					<div style={{width:"calc(100%/2)"}}>
						<Titulo emogi="🎸" entidad="Productos" />
						<ProductoList productos={this.state.productos}/>
						<Link to={"/nuevoproducto"}>Agregar Porducto</Link>
					</div>
					{/*
					<div style={{width:"calc(100%/3)"}}>
						<Titulo emogi="🎶" entidad="Musicos" />
						<MusicoList musicos={this.state.musicos}/>
						<Link to={"/nuevo"} >Agregar Musico</Link>
					</div>
					*/}
					<div style={{width:"calc(100%/3)"}}>
						<Titulo emogi="🅱" entidad="Ventas" />
						<VentasList ventas={this.state.ventas}/>
						<Link to={"/nuevoventa"} >Agregar Venta</Link>
					</div>
				</div>
				
				
				
			</>
		)
	}
}


const Titulo = (props)=>{
	return(
		<>
			<hr/>
			<h2>{props.emogi} - {props.entidad}</h2>
			<hr/>
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}

///VENTALIST
class VentasList extends React.Component{
	render(){
		const vents = this.props.ventas.map(venta=> <Venta key={venta._links.self.href} venta={venta} /> )
		return(
			<table border="1">
				<thead>
					<th>Total</th>
					<th>Acciones</th>
				</thead>
				<tbody>
					{vents}
				</tbody>
			</table>
		)

	}
}

//VENTAITEM
class Venta extends React.Component{
	render() {
		const id  = this.props.venta._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.venta.total}</td>
				<td>
					<Link to={"/verventa/"+id} >Ver</Link>
				</td>
			</tr>
		)
	}
}


//PRODUCTO LISTA
class ProductoList extends React.Component{
	render() {
		const products = this.props.productos.map(pro =>
			<Producto key={pro._links.self.href} producto={pro}/>
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Precio</th>
						<th>Acciones</th>
					</tr>
					{products}
				</tbody>
			</table>
		)
	}
}


//PRODUCTOITEM
class Producto extends React.Component{
	render() {
		//Ultimo elemento de la ruta
		const id  = this.props.producto._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.producto.nombre}</td>
				<td>{this.props.producto.precio}</td>
				<td>
					<Link to={"/verproducto/"+id}>Obtener</Link>
				</td>
				<td>
					<Link to={"/editarpro/"+id}>Editar</Link>
				</td>
			</tr>
		)
	}
}

module.exports = HomePage