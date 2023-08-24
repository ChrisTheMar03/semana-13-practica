package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Venta {
    
    @Id
    @GeneratedValue
    private Long id;
    private Float total;

    public Venta(){}

    public Venta(Float total) {
        this.total = total;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Float getTotal() {
        return total;
    }
    public void setTotal(Float total) {
        this.total = total;
    }
    

    

}
