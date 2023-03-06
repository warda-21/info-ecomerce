package com.educative.ecommerce.repository;
import java.util.*;
import com.educative.ecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
	List<Product> findByCategoryId(Integer categoryId);
}
