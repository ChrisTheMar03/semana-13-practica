package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.models.DetalleVenta;

@RepositoryRestResource(collectionResourceRel = "detalleventas",path = "detalleventas")
public interface DetalleVentaRepository extends CrudRepository<DetalleVenta,Long> {
    
}
