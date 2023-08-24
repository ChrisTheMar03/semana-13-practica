const React = require('react')
const {useState,useEffect} = require('react')
const {useParams,Link} = require('react-router-dom')
const client = require('../client')

const VerProducto=()=>{

    const {id} = useParams()
    const [producto,setProducto] = useState({})

    useEffect(()=>{

        client({
            method:"GET",
            path:"/api/productos/"+id
        })
        .done((res)=>{
            setProducto(res.entity)
        })

    },[])

    return(
        <>
            <h1>Ver Producto</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                    </tr>
                </tbody>
            </table>

            <Link to={"/"}>Volver</Link>
        </>
    )
}

module.exports = VerProducto