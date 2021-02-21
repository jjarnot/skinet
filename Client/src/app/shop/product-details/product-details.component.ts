import { IProduct } from '../../shared/models/product';
import { ShopService } from './../shop.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  currentProductId: number;

  constructor(private shopService: ShopService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.currentProductId = +params.get('id');
      }
    )

    this.loadProduct();
  }

  loadProduct()
  {
    this.shopService.getProduct(this.currentProductId).subscribe(product => {
      this.product = product;
    }, error => {
      console.log(error);
    });
  }
}
