package com.ems.service;

import com.ems.dto.ProductDto;

import java.util.List;

public interface ProductService {

    ProductDto createProduct(ProductDto productDto);

    ProductDto updateProduct(int product_id, ProductDto productDto);

    ProductDto getProductById(int product_id);

    List<ProductDto> getAllProducts();

    void deleteProduct(int product_id);
}
