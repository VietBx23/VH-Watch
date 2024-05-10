package com.ems.mapper;

import com.ems.dto.ProductDto;
import com.ems.entity.Product;

public class ProductMapper {

    public static ProductDto mapProductDto(Product product) {
        return new ProductDto(
                product.getProduct_id(),
                product.getProduct_name(),
                product.getProduct_description(),
                product.getProduct_price(),
                product.getProduct_image()
        );
    }

    public static Product mapToProduct(ProductDto productDto) {
        return new Product(
                productDto.getProductId(),
                productDto.getProductName(),
                productDto.getProductPrice(),
                productDto.getProductDescription(),
                productDto.getProductImage()
        );
    }
}
