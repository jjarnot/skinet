import { BasketService } from '../../basket/basket.service';
import { IProduct } from '../../shared/models/product';
import { ShopService } from './../shop.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {map} from 'rxjs/operators';
import { BreadcrumbService } from 'xng-breadcrumb';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  currentProductId: number;
  quantity =1;

  constructor(private shopService: ShopService,
              private activateRoute: ActivatedRoute,
              private basketService: BasketService,
              private bcService: BreadcrumbService) {
    this.bcService.set('@productDetails', '');
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.currentProductId = +params.get('id');
      }
    )

    this.loadProduct();
  }

  addItemToBasket()
  {
    this.basketService.addItemToBasket(this.product, this.quantity);
  }

  incrementQuantity()
  {
    this.quantity++;
  }

  decrementQuantity()
  {
    if(this.quantity > 1){
      this.quantity--;
    }
  }

  loadProduct()
  {
    this.shopService.getProduct(this.currentProductId).subscribe(product => {
      this.product = product;
      this.bcService.set('@productDetails', product.name);
    }, error => {
      console.log(error);
    });
  }
}
