import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
 constructor(private fb:FormBuilder,private ps:ProductService,private router:Router){}
  addproductForm=this.fb.group({
   id:[''],
   productName:[''],
   categoryId:[''],
   description:[''],
   price:[''],
   is_available:[''],
   productImg:[''],
   rating:[''],
   review:[''],
   vendor_name:[''],
   warranty:['']
  })

  addproduct(){
    let pdata={
    id:this.addproductForm.value.id,
    productName:this.addproductForm.value.productName,
    categoryId:this.addproductForm.value.categoryId,
    description:this.addproductForm.value.description,
    price:this.addproductForm.value.price,
    is_available:this.addproductForm.value.is_available,
    productImg:this.addproductForm.value.productImg,
    rating:this.addproductForm.value.rating,
    review:this.addproductForm.value.review,
    vendor_name:this.addproductForm.value.vendor_name,
    warranty:this.addproductForm.value.warranty
    }

   this.ps.addNewProduct(pdata).subscribe((item:any)=>{
       alert("new product added")
       this.router.navigateByUrl('products')
   })

  }
 
}
