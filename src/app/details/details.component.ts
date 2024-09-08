import { Component, Input, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SearchComponent } from '../search/search.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApi } from '../../services/Movie-api.service';
import { MovieDetails } from '../models/MovieDetails';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CardModule, ButtonModule, ProgressSpinnerModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  @Input() imdbID='' ;
  details!: MovieDetails;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private movieApi:MovieApi){}
  
  ngOnInit() {
    this.imdbID = this.route.snapshot.paramMap.get('imdbID') || '';
    
    this.movieApi.getMovieDetails(this.imdbID).subscribe({
      next: (data: MovieDetails) => {
        this.details = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error('Erro ao obter detalhes do filme:', err);
      }
    });
  }

}
