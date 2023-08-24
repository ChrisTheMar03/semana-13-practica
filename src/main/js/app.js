const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter,RouterProvider} = require('react-router-dom')

const HomePage = require('./pages/home.js')
const ObtenerInstrumento = require('./pages/Obtener-Instrumento.js');
const NuevoInstrumento = require('./pages/Nuevo-Instrumento.js');
const EditarInstrumentos = require('./pages/Editar-Instrumento.js');
const VerVenta = require('./VER/VerVenta.js');
const NuevoDetalle = require('./VNUEVO/Nuevo-Detalle.js');
const VerProducto = require('./VER/VerProducto.js');

const router = createBrowserRouter([
	
	{ path:"/" , element:<HomePage/> },
	{ path:"/verventa/:id" , element:<VerVenta/> },
	{ path:"/verventa/:id/nuevodetalleventa",element:<NuevoDetalle/>},
	{path:"/verproducto/:id",element:<VerProducto/>}
	/*{ path:"/obtener/:id", element:<ObtenerInstrumento/>},
	{ path:"/vermusico/:id", element:<VerMusico/>},
	{ path:"/nuevoinstrumento", element:<NuevoInstrumento/>},
	{ path:"/editarinstru/:id", element:<EditarInstrumentos/> },
	{ path:"/verbanda/:id",element:<VerBanda/> },
	{ path:"/verbanda/:id/nuevointegrante",element:<NuevoIntegrante/>}
	*/

])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
document.getElementById('react'))
