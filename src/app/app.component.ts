import { Component } from '@angular/core';
import { MoviePreview } from './shared/model/omdb.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  movies: MoviePreview[] = []


  getMovies(movies: MoviePreview[]){
    this.movies = movies
  }
}
