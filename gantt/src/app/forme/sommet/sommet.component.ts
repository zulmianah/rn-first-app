import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sommet',
  templateUrl: './sommet.component.html',
  styleUrls: ['./sommet.component.css']
})
export class SommetComponent implements OnInit {
  private _x: number;
  private _y: number;
  private _rayon: number;
  nomTache: string;

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }

  get rayon(): number {
    return this._rayon;
  }

  set rayon(value: number) {
    this._rayon = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

  dessinerSommetCouleur(sommet: SommetComponent, canvas: HTMLCanvasElement, couleur: string) {
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.arc(sommet.x, sommet.y, sommet.rayon, 0, 2 * Math.PI);
      ctx.fillStyle = couleur;
      ctx.fill();
      ctx.stroke();
    }
  }

  dessinerSommet(sommet: SommetComponent, canvas: HTMLCanvasElement) {
    this.dessinerSommetCouleur(sommet, canvas, "#D74022");
  }
}
