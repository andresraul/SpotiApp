import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-searsh',
  templateUrl: './searsh.component.html',
  styles: []
})
export class SearshComponent {

  error: boolean;
  mensajeError: any;

  artistas: any[] = [];

  loading: boolean;

  constructor(private spotify: SpotifyService) { 
    this.loading = false;
    this.error = false;
    
  }

  buscar(termino: any) {
    this.loading = true;
    if(termino === '') {
      this.loading = false;
    return false;
  } else {

    
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      this.artistas = data;
      console.log(this.artistas);
      this.loading = false;
    }, (error: any) => {
    this.mensajeError = error.error.error.message;
    this.error = true;

    });
  }

  }

}
