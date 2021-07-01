import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/Productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  loading: boolean = true;
  producto: Producto;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) {
  }

  async ngOnInit() {
    try {
      //Obtener valor de parametro url
      const id = this.activatedRoute.snapshot.paramMap.get("id")
      const productoAux = await this.productosService.getById(id)
      this.producto = productoAux[0]
      console.log(this.producto)
      this.loading = false;
    } catch (e) {
    }
  }
}
