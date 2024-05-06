import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('500ms ease-in-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class LoaderComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() texts: string[] = [];
  @Input() interval: number = 2000; // Intervalo de cambio de imagen en milisegundos

  currentImageIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    }, this.interval);
  }

  getCurrentImage(): string {
    return this.images[this.currentImageIndex];
  }

  getCurrentText(): string {
    return this.texts[this.currentImageIndex];
  }
}
