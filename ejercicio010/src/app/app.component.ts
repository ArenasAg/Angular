import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ejercicio010';
  personajes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllCharacters('https://rickandmortyapi.com/api/character');
  }

  getAllCharacters(url: string) {
    this.http.get(url).subscribe((respuesta: any) => {
      this.personajes = this.personajes.concat(respuesta.results);
      if (respuesta.info.next) {
        this.getAllCharacters(respuesta.info.next); // Realizar la siguiente solicitud si hay más páginas
      } else {
        this.fetchEpisodes(); // Una vez que se hayan obtenido todos los personajes, obtener los episodios
      }
    });
  }

  fetchEpisodes() {
    const episodeUrls = this.personajes.flatMap(
      (personaje) => personaje.episode
    );
    const uniqueEpisodeUrls = [...new Set(episodeUrls)]; // Eliminar URLs duplicadas

    uniqueEpisodeUrls.forEach((url) => {
      this.http.get(url).subscribe((episode: any) => {
        this.personajes.forEach((personaje) => {
          if (personaje.episode.includes(url)) {
            personaje.episodes = personaje.episodes || [];
            personaje.episodes.push(episode);
          }
        });
      });
    });
  }
}
