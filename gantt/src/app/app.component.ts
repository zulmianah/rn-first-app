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
    var canvas = <HTMLCanvasElement>document.getElementById('nonOrd');
    var g = new GrapheComponent();
    g.lAdjPred = new Map();
    g.lAdjSucc = new Map();
    let A =  new SommetComponent();
    A.x = 200;
    A.y = 100;
    A.rayon = 10;
    A.nomTache = "tay"
    A.dessinerSommet(A,canvas);
    let B =  new SommetComponent();
    B.x = 300;
    B.y = 200;
    B.rayon = 10;
    B.nomTache = "tay"
    B.dessinerSommet(B,canvas);
    let C =  new SommetComponent();
    C.x = 400;
    C.y = 100;
    C.rayon = 10;
    C.nomTache = "tay"
    C.dessinerSommet(C,canvas);
    var vertices = [ A,B,C ];
    for (var i = 0; i < vertices.length; i++) { 
      g.ajouterSommet(vertices[i]); 
    }
    g.ajouterArc(A, B); 
    g.ajouterArc(A, C); 
    g.ajouterArc(B, C);
    const AB = new ArcComponent();
    AB.dessinerArc(AB.somToArc(A,B),canvas);
    AB.dessinerArc(AB.somToArc(A,C),canvas);
    AB.dessinerArc(AB.somToArc(B,C),canvas);

    var canvas1 = <HTMLCanvasElement>document.getElementById('ord');
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
