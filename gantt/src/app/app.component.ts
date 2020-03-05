import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {ArcComponent} from "./forme/arc/arc.component";
import {SommetComponent} from "./forme/sommet/sommet.component";
import {GrapheComponent} from "./forme/graphe/graphe.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gantt';

  ngOnInit(): void {
    var canvas = <HTMLCanvasElement>document.getElementById('stage');
    const arc1 = new ArcComponent();
    arc1.x1 = 100;
    arc1.y1 = 100;
    arc1.x2 = 200;
    arc1.y2 = 100;
    arc1.longueurTete = 100;
    arc1.dessinerArc(arc1,canvas);
    const sommet1 = new SommetComponent();
    sommet1.x = 200;
    sommet1.y = 100;
    sommet1.rayon = 10;
    sommet1.dessinerSommet(sommet1,canvas);
    const sommet2 = new SommetComponent();
    sommet2.x = 100;
    sommet2.y = 100;
    sommet2.rayon = 10;
    sommet2.dessinerSommet(sommet2,canvas);

    var g = new GrapheComponent();
    g.lAdjPred = new Map();
    g.lAdjSucc = new Map();
    var vertices = [ "A", "B", "C", "D", "E", "F" ];
    for (var i = 0; i < vertices.length; i++) { 
      g.ajouterSommet(vertices[i]); 
    }
    g.ajouterArc("A", "B"); 
    g.ajouterArc("A", "D"); 
    g.ajouterArc("A", "E"); 
    g.ajouterArc("B", "C"); 
    g.ajouterArc("D", "E"); 
    g.ajouterArc("E", "F"); 
    g.ajouterArc("E", "C"); 
    g.ajouterArc("C", "F"); 
    // g.afficherGraphe();
    // g.degreeMinimale();
    g.genererTabTritopologie(g.degMin())

  }
}
// essai gantt
/*
function createChart(e) {
  const days = document.querySelectorAll(".chart-values li");
  const tasks = document.querySelectorAll(".chart-bars li");
  const daysArray = [...days];
  tasks.forEach(el => {
    const duration = el.dataset.duration.split("-");
    const startDay = duration[0];
    const endDay = duration[1];
    let left = 0, width = 0;
    if (startDay.endsWith("½")) {
      const filteredArray = daysArray.filter(day => day.textContent == startDay.slice(0, -1));
      left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2;
    } else {
      const filteredArray = daysArray.filter(day => day.textContent == startDay);
      left = filteredArray[0].offsetLeft;
    }
    if (endDay.endsWith("½")) {
      const filteredArray = daysArray.filter(day => day.textContent == endDay.slice(0, -1));
      width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2 - left;
    } else {
      const filteredArray = daysArray.filter(day => day.textContent == endDay);
      width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth - left;
    }
    el.style.left = `${left}px`;
    el.style.width = `${width}px`;
    if (e.type == "load") {
      el.style.backgroundColor = el.dataset.color;
      el.style.opacity = 1;
    }
  });
}
window.addEventListener("load", createChart);
window.addEventListener("resize", createChart);
*/
