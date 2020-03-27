import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../interfaces/interfaces';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
 @Input() images: Image[] = [];

  constructor() { }

  ngOnInit() {}

}
