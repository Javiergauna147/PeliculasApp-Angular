import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit, OnDestroy {

  public busqueda: string = '';
  public movies: Movie[] = [];

  constructor( private activateRoute: ActivatedRoute,
               private peliculasService: PeliculasService
               ) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe( params => {
      this.busqueda = params.texto;
      //lamar el servicio
      this.peliculasService.buscarPeliculas(params.texto).subscribe( movies => {
        this.movies = movies;
        console.log(this.movies);
      });
    });

    
  }
  
  ngOnDestroy(): void {
    this.peliculasService.resetCarteleraPage();
  }

}
