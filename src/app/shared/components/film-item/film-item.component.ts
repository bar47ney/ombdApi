import { Component, OnInit, Input } from '@angular/core';
import { MoviePreview } from '../../model/omdb.model';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {
  @Input() movie!: MoviePreview

  constructor() { }

  ngOnInit(): void {
  }

}
