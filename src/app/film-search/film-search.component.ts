import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OmdbService } from '../shared/service/omdb.service';
import { Omdb, MoviePreview } from '../shared/model/omdb.model';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})

export class FilmSearchComponent implements OnInit {
  types: Type[] = [
    {value: 'movie', viewValue: 'Фильм'},
    {value: 'series', viewValue: 'Сериал'},
    {value: 'episode', viewValue: 'Эпизод'},
  ];

  public movies: MoviePreview[] = []
  public name!: string
  public type!: string

  @Output() onMovieSearch: EventEmitter<MoviePreview[]> = new EventEmitter()

  constructor(private ombdService: OmdbService) { }

  ngOnInit(): void {
  }

  public getFilms(): void {
    this.ombdService.getMovies(this.name, this.type).subscribe((data: Omdb) => {
      this.movies = data.Search
      this.onMovieSearch.emit(this.movies)
      console.log(data)
    })
  }

}
