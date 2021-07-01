import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos: any = []
  productoAsync;
  loading: boolean = false;
  /*Instancio la variable productoService*/
  constructor(
    private productosService: ProductosService
  ) {
    this.getProductos()
  }
  
  async getProductos() {    
    try {
      this.productos = await this.productosService.getAllPromise()
      //this.productoAsync = this.productosService.getAllPromise()
      this.productoAsync = this.productosService.getAll()
    } catch (e) {
      console.log(e)
    }
  }

  ngOnInit(): void {
  }
}
