import { Component, OnInit } from '@angular/core';
import {SommetComponent} from "../sommet/sommet.component";

@Component({
	selector: 'app-graphe',
	templateUrl: './graphe.component.html',
	styleUrls: ['./graphe.component.css']
})
export class GrapheComponent implements OnInit {
	listeAdjacent:Map<string,any>

	constructor() { }

	ngOnInit(): void { }

	ajouterSommet(v) 
	{
		this.listeAdjacent.set(v, []); 
	}

	ajouterArc(v, w) 
	{
		this.listeAdjacent.get(v).push(w);
		this.listeAdjacent.get(w).push(v); 
	}

	afficherGraphe() 
	{
		var get_keys = this.listeAdjacent.keys();
		for (var i of get_keys) 
		{
			var get_values = this.listeAdjacent.get(i); 
			var conc = "";
			for (var j of get_values) 
				conc += j + " ";
			console.log(i + " -> " + conc); 
		} 
	} 

}