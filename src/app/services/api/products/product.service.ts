import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getAllProductsWithLimit(limit: number = 5) {
    const productstUrl = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productstUrl);
  }

  createProduct(product: ProductRepresentation) {
    const productstUrl = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productstUrl, product);
  }
}
