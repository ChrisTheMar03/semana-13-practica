const React = require('react')
const {useState,useEffect} = require('react')
const client = require('../client.js')
const {Link,useParams} = require('react-router-dom')

const VerVenta = ()=>{

    const {id} = useParams();
    const [total,setTotal] = useState({})
    const [detalleVenta,setDetalleVenta] = useState([])

    useEffect(()=>{
        client({
            method:"GET",
            path:"/api/ventas/"+id
        }).done((body)=>{
            setTotal(body.entity)
        })

        client({
            method:"GET",
            path:"/api/ventas/"+id+"/formacion"
        }).done((body)=>{
            setDetalleVenta(body.entity)
        })
        

    },[])

    return(
        <>
            <h1>Ver Venta</h1>
            <table border="1">
                <tbody>
                    <tr>
                        <th>Total</th>
                        <td>{total.total}</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <h2>Formación</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        detalleVenta.map((v,k)=>(
                            <tr key={v.ID}>
                                <td>{v.PRODUCTO}</td>
                                <td>{v.CANTIDAD}</td>
                                <td>{v.TOTAL}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>        

            <Link to={`/verventa/${id}/nuevodetalleventa`}>Nuevo DetalleVenta</Link> |
            <Link to="/">Volver</Link>

        </>
    )
}

module.exports = VerVenta