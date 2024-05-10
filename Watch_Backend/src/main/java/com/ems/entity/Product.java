package com.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer product_id;
    //    @Column(name = "product_name")
    String product_name;
    //    @Column(name = "product_price")
    Double product_price;
    //    @Column(name = "product_price")
    String product_description;
    //    @Column(name = "product_image")
    String product_image;
}
