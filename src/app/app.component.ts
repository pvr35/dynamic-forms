import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'

interface Product {
  id: number;
  name:string;
  price: number;
}

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
}
