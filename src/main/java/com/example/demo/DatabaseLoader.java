package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.demo.models.DetalleVenta;
import com.example.demo.models.Producto;
import com.example.demo.models.Venta;
import com.example.demo.repository.DetalleVentaRepository;
import com.example.demo.repository.ProductoRepository;
import com.example.demo.repository.VentaRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final VentaRepository dataV;
	private final ProductoRepository dataP;
	private final DetalleVentaRepository dataDV;

	@Autowired
	public DatabaseLoader(VentaRepository dataV,ProductoRepository dataP,DetalleVentaRepository dataDV) {
		this.dataV = dataV ;
		this.dataP = dataP;
		this.dataDV = dataDV;
	}

	@Override
	public void run(String... strings) throws Exception {
		Producto p1=new Producto("Calcetines", 5.50f);
		Producto p2=new Producto("Polo Azul", 20.00f);
		Producto p3=new Producto("Pantalon", 35.50f);
		Producto p4=new Producto("Correa Cuero", 10.00f);
		this.dataP.save(p1);
		this.dataP.save(p2);
		this.dataP.save(p3);
		this.dataP.save(p4);
		
		Venta v1=new Venta(p1.getPrecio());
		Venta v2=new Venta(p2.getPrecio());
		Venta v3=new Venta(p3.getPrecio());
		Venta v4=new Venta(p4.getPrecio());

		this.dataV.save(v1);
		this.dataV.save(v2);
		this.dataV.save(v3);
		this.dataV.save(v4);

		DetalleVenta dt1=new DetalleVenta(v1, p1, 2);
		DetalleVenta dt2=new DetalleVenta(v1, p3, 3);
		DetalleVenta dt3=new DetalleVenta(v2, p2, 2);
		DetalleVenta dt4=new DetalleVenta(v3, p4, 6);
		DetalleVenta dt5=new DetalleVenta(v4, p1, 1);
		
		this.dataDV.save(dt1);
		this.dataDV.save(dt2);
		this.dataDV.save(dt3);
		this.dataDV.save(dt4);
		this.dataDV.save(dt5);

	}
}