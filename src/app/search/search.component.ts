import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, InputTextModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  title:string ='';

}
