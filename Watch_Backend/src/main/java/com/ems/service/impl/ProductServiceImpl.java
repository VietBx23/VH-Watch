package com.ems.service.impl;

import com.ems.dto.ProductDto;
import com.ems.entity.Product;
import com.ems.exception.RescourceNotFoundException;
import com.ems.mapper.ProductMapper;
import com.ems.repository.ProductRepository;
import com.ems.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {
    private ProductRepository productRepository;

    @Override
    public ProductDto createProduct(ProductDto productDto) {
        Product product = ProductMapper.mapToProduct(productDto);
        Product saveProduct = productRepository.save(product);
        return ProductMapper.mapProductDto(saveProduct);
    }

    @Override
    public ProductDto updateProduct(int product_id, ProductDto productDto) {
        Product product = productRepository.findById(product_id).orElseThrow(() -> new RescourceNotFoundException("product is not exists with given by Id" + product_id));
        product.setProduct_id(productDto.getProductId());
        product.setProduct_name(product.getProduct_name());
        product.setProduct_description(product.getProduct_description());
        product.setProduct_price(product.getProduct_price());
        product.setProduct_image(product.getProduct_image());
        Product updateProduct = productRepository.save(product);
        return ProductMapper.mapProductDto(updateProduct);

    }

    @Override
    public ProductDto getProductById(int product_id) {
        Product product = productRepository.findById(product_id).orElseThrow(() -> new RescourceNotFoundException("product is not exists with given by Id" + product_id));
        return ProductMapper.mapProductDto(product);
    }


    @Override
    public List<ProductDto> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream().map((product) -> ProductMapper.mapProductDto(product)).collect(Collectors.toList());
    }

    @PutMapping("{id}")
    @Override
    public void deleteProduct(@PathVariable("id") int product_id) {
        Product product = productRepository.findById(product_id).orElseThrow(() -> new RescourceNotFoundException("product is not exists with given by Id" + product_id));
        productRepository.deleteById(product_id);
    }
}
