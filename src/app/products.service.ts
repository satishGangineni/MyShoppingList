import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IProduct } from './Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  ROOT_URL = "http://localhost:3000/api/";
  getProducts() {

    return this.http.get<IProduct[]>('http://localhost:3000/api/products');
    //return this.http.get('http://localhost:3000/api/products');

  }

  AddProduct(product: IProduct) {

    const headers = new HttpHeaders().set('content-type', 'application/json');
    // var body = {
    //   Fname: emp.Fname,
    //   Lname: emp.Lname,
    //   Email: emp.Email
    // }
    return this.http.post<IProduct>(this.ROOT_URL + '/products', product, {
      headers
    });

  }

  UpdateProduct(produt: IProduct, id) {
    const params = new HttpParams().set('_id', id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    // var body = {
    //   Fname: emp.Fname,
    //   Lname: emp.Lname,
    //   Email: emp.Email,
    //   ID: emp.ID
    // }
    return this.http.put<IProduct>(this.ROOT_URL + '/products/' + id, produt, {
      headers,
      params
    });
  }

  DeleteProduct(id) {
    //const params = new HttpParams().set('ID', id);
    //const headers = new HttpHeaders().set('content-type', 'application/json');
    // var body = {
    //   Fname: emp.Fname,
    //   Lname: emp.Lname,
    //   Email: emp.Email,
    //   ID: emp.ID
    // }
    return this.http.delete<IProduct>(this.ROOT_URL + '/products/' + id);
  }

}
