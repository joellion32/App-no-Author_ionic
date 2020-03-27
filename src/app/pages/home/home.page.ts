import { Component } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { Image } from '../../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  images: Image[] = [];

  constructor(private imageService: ImagesService) {
    this.imageService.getImages().subscribe(resp => {
      console.log(resp);
      this.images.push(...resp.images);
    });  
  }

}
