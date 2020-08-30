import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { faMinusCircle, faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;
  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void{
    this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(p => this.product = p, err => console.log(err));
  }
}
