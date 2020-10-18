import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { faMinusCircle, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  quantity = 1;
  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;
  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute,
              private bcService: BreadcrumbService, private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.bcService.set('@productDetails', ' ');
    this.loadProduct();
  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product, this.quantity);
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if(this.quantity > 1)
      this.quantity--;
  }

  loadProduct(): void{
    this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(p => {
      this.product = p;
      this.bcService.set('@productDetails', p.name);
    }, err => console.log(err));
  }
}
