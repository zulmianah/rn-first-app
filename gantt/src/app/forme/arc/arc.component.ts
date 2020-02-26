import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arc',
  templateUrl: './arc.component.html',
  styleUrls: ['./arc.component.css']
})
export class ArcComponent implements OnInit {
  private _x1: number;
  private _y1: number;
  private _x2: number;
  private _y2: number;
  private _longueurTete: number;

  get x1(): number {
    return this._x1;
  }

  set x1(value: number) {
    this._x1 = value;
  }

  get y1(): number {
    return this._y1;
  }

  set y1(value: number) {
    this._y1 = value;
  }

  get x2(): number {
    return this._x2;
  }

  set x2(value: number) {
    this._x2 = value;
  }

  get y2(): number {
    return this._y2;
  }

  set y2(value: number) {
    this._y2 = value;
  }

  get longueurTete(): number {
    return this._longueurTete;
  }

  set longueurTete(value: number) {
    this._longueurTete = value;
  }

  constructor(x1:number,y1:number,x2:number,y2:number,longueurTete:number) {
    this.x1=x1;
    this.y1=y1;
    this.x2=x2;
    this.y2=y2;
    this.longueurTete=longueurTete;
  }

  dessinerArc(arc:ArcComponent, canvas: HTMLCanvasElement){
    var headlen = 20;
    var dx = arc.x2 - arc.x1;
    var dy = arc.y2 - arc.y1;
    var angle = Math.atan2(dy, dx);
    let ctx = canvas.getContext('2d');
    ctx.moveTo(arc.x1, arc.y1);
    ctx.lineTo(arc.x2, arc.y2);
    ctx.lineTo(arc.x2 - headlen * Math.cos(angle - Math.PI / 6), arc.y2 - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(arc.x2, arc.y2);
    ctx.lineTo(arc.x2 - headlen * Math.cos(angle + Math.PI / 6), arc.y2 - headlen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
  }
  ngOnInit(): void {
  }

}
