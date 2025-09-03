import { Component, inject } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'

interface Product {
  id: number;
  name:string;
  price: number;
}







type ProductForm = FormGroup<{
  product: FormControl<Product | undefined>;
  price: FormControl<number>;
  quantity: FormControl<number>;
}>;

type form = FormGroup<{
  client: FormControl<string>;
  products:FormArray<ProductForm>;
}>;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  products: Product[] = [
    { id: 1, name: 'cucumber', price: 15.5 },
    { id: 2, name: 'Tomato', price: 10},
    { id: 3, name: 'Carrot', price: 12 },
    { id: 4, name: 'Apple', price: 11 },
  ];

  formBuilder = inject(NonNullableFormBuilder);

  get productArray(): FormArray<ProductForm> {
    return this.form.get('products') as FormArray<ProductForm>;
  }

  form: FormGroup = this.formBuilder.group({
    client: this.formBuilder.control(''),
    products: this.formBuilder.array<ProductForm>([this.createProductForm()]),
  });

  createProductForm(): ProductForm {
    return this.formBuilder.group({
      product: this.formBuilder.control<Product | undefined>(undefined),
      price: this.formBuilder.control<number>(0),
      quantity: this.formBuilder.control<number>(0),
    });
  }

  save() {
    console.log(this.form.value);
  }

  add() {
    this.productArray.push (this.createProductForm());
  }

  delete(index: number) {
    this.productArray.removeAt(index);
  }
}
