const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter,RouterProvider} = require('react-router-dom')

const HomePage = require('./pages/home.js')
const NuevoMusica = require('./pages/Nuevo-Musica.js');
const ObtenerInstrumento = require('./pages/Obtener-Instrumento.js');
const VerMusico = require('./pages/Ver-Musico.js');
const NuevoInstrumento = require('./pages/Nuevo-Instrumento.js');
const EditarInstrumentos = require('./pages/Editar-Instrumento.js');
const VerBanda = require('./pages/Ver-Banda.js');
const NuevoIntegrante = require('./pages/Nuevo-Integrante.js');
const VerVenta = require('./VER/VerVenta.js');
const NuevoDetalle = require('./VNUEVO/Nuevo-Detalle.js');

const router = createBrowserRouter([
	
	{ path:"/" , element:<HomePage/> },
	{ path:"/verventa/:id" , element:<VerVenta/> },
	{ path:"/verventa/:id/nuevodetalleventa",element:<NuevoDetalle/>}
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
