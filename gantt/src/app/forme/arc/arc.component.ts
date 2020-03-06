import { Component, OnInit } from '@angular/core';
import {SommetComponent} from "../sommet/sommet.component";

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

  somToArc(A: SommetComponent,B: SommetComponent){
    const AB = new ArcComponent();
    AB.x1 = A.x;
    AB.y1 = A.y;
    AB.x2 = B.x;
    AB.y2 = B.y;
    AB.longueurTete = 100;
    return AB;
  }

  dessinerArc(arc:ArcComponent, canvas: HTMLCanvasElement){
    let ctx = canvas.getContext('2d');
    var headlen = 20;
    var dx = arc.x2 - arc.x1;
    var dy = arc.y2 - arc.y1;
    var angle = Math.atan2(dy, dx);
    ctx.moveTo(arc.x1, arc.y1);
    ctx.lineTo(arc.x2, arc.y2);
        var xdeb = (arc.x1+arc.x2)/2;
        var ydeb = (arc.y1+arc.y2)/2;
    ctx.moveTo(xdeb, ydeb);
    ctx.lineTo(xdeb - headlen * Math.cos(angle - Math.PI / 6), ydeb - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(xdeb, ydeb);
    ctx.lineTo(xdeb - headlen * Math.cos(angle + Math.PI / 6), ydeb - headlen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
    ctx.closePath();
  }

  constructor() {}

  ngOnInit(): void {
  }

}
