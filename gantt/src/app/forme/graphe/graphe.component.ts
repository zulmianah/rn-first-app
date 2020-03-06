import { Component, OnInit } from '@angular/core';
import {SommetComponent} from "../sommet/sommet.component";

@Component({
	selector: 'app-graphe',
	templateUrl: './graphe.component.html',
	styleUrls: ['./graphe.component.css']
})
export class GrapheComponent implements OnInit {
	lAdjPred:Map<any,any>
	lAdjSucc:Map<any,any>

	constructor() { }

	ngOnInit(): void { }

	ajouterSommet(v){
		this.lAdjPred.set(v,[]); 
		this.lAdjSucc.set(v,[]); 
	}

	ajouterArc(v, w){
		this.lAdjPred.get(w).push(v);
		this.lAdjSucc.get(v).push(w);
	}

	afficherGraphe(){
		var get_keys = this.lAdjPred.keys();
		for (var i of get_keys){
			var get_values = this.lAdjPred.get(i); 
			var conc = "";
			for (var j of get_values) 
				conc += j + " ";
			console.log(i + " -> " + conc); 
		} 
	}

	parcourirLargeur(){
		var get_keys = this.lAdjPred.keys();
		for (var i of get_keys){
			var get_values = this.lAdjPred.get(i); 
			var conc = "";
			for (var j of get_values) 
				conc += j + " ";
			console.log(i + " -> " + conc); 
		} 
	}

	degMin(){
		var get_keys = this.lAdjPred.keys();
		var degMin = new Map<string,any>();
		for (var i of get_keys){
			var temp = this.lAdjPred.get(i);
			degMin.set(i,temp.length);
		}
		return degMin;
	}

	sommetZero(degMin : Map<string,any>){
		var get_keys = degMin.keys();
		var listeSommetZero = [];
		for (var i of get_keys){
			if(degMin.get(i)==0)
				listeSommetZero.push(i)
		} 
		// console.log(listeSommetZero)
		return listeSommetZero;
	}

	estTtNivNul(tritopologie){
		for (var i of tritopologie.keys()){
			if(tritopologie.get(i)!=0)
				return false;
		}
		return true;
	}

	recupererDegMinPlusPetit(tritopologie){
		for (var i of tritopologie.keys()){
			if(tritopologie.get(i)!=0)
				return false;
		}
		return true;
	}

	tabnivRacine(tabTritopologie,tempSommetZero,tabSomZer){
		var listTempSuccZero = [];
		var idTritopologie = tabTritopologie.length - 1;
		if(!this.estTtNivNul(tabTritopologie[idTritopologie])){
			tabTritopologie.push(new Map(tabTritopologie[idTritopologie]))
			for(var idTempSommetZero in tempSommetZero){
				var tempSucc = this.lAdjSucc.get(tempSommetZero[idTempSommetZero]);
				for(var idTempSucc in tempSucc){
					var sommet = tempSucc[idTempSucc];
					var tempVal = tabTritopologie[idTritopologie].get(sommet)-1;
					if(tempVal == 0){
						listTempSuccZero.push(sommet)
					}
					tabTritopologie[idTritopologie+1].set(sommet, tempVal)
				}
			}
		}
		if(listTempSuccZero.length!=0){
			tabSomZer.push(listTempSuccZero)
			this.tabnivRacine(tabTritopologie,listTempSuccZero,tabSomZer)
		}
	}

	genererTabTritopologie(degMin : Map<string,any>){
		let val = [];
		let tabTritopologie = [];
		let tabSomZer = [];
		let degMinTemp = degMin;
		tabTritopologie.push(degMin)
		let somZerPrinc = this.sommetZero(tabTritopologie[0]);
		tabSomZer.push(somZerPrinc)
		this.tabnivRacine(tabTritopologie,somZerPrinc, tabSomZer)
		val.push(tabTritopologie);
		val.push(tabSomZer)
		console.log(val)
	}

}