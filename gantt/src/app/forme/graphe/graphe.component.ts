import { Component, OnInit } from '@angular/core';
import {SommetComponent} from "../sommet/sommet.component";

@Component({
	selector: 'app-graphe',
	templateUrl: './graphe.component.html',
	styleUrls: ['./graphe.component.css']
})
export class GrapheComponent implements OnInit {
	lAdjPred:Map<string,any>
	lAdjSucc:Map<string,any>

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
	
	nivRacine(degMin : Map<string,any>){
		let listeSommetZero = sommetZero(degMin)
		var listeSommetZeroTemp = listeSommetZero;
		for(var sommetZero of listeSommetZero){
			var successeurTemp = this.lAdjSucc.get(sommetZero);
			for(var i in successeurTemp){
				if(degMin.get(successeurTemp[i])>0){
					// listeSommetZeroTemp.push(successeurTemp[i])
					// listeSommetZeroTemp[i] = listeSommetZeroTemp[i]-1;
				}
			}
		}
		console.log(listeSommetZeroTemp)
		return listeSommetZeroTemp;
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

	tabnivRacine(tabTritopologie,tempSommetZero){
		var listTempSuccZero = [];
		for(var idTritopologie in tabTritopologie){
			if(!this.estTtNivNul(tabTritopologie[idTritopologie])){
				tabTritopologie.push(tabTritopologie[idTritopologie])
				for(var idTempSommetZero in tempSommetZero){
					var tempSucc = this.lAdjSucc.get(tempSommetZero[idTempSommetZero]);
					for(var idTempSucc in tempSucc){
						var sommet = tempSucc[idTempSucc];
						var tempVal = tabTritopologie[idTritopologie].get(sommet)-1;
						if(tempVal == 0)
							listTempSuccZero.push[sommet]
						tabTritopologie[idTritopologie].set(sommet, tempVal)
					}
				}
			}
		}
		// this.tabnivRacine(tabTritopologie,listTempSuccZero)
	}

	genererTabTritopologie(degMin : Map<string,any>){
		let tabTritopologie = [];
		let degMinTemp = degMin;
		tabTritopologie.push(degMin)
		// this.tabnivRacine(tabTritopologie,this.sommetZero(tabTritopologie[0]))
		console.log(tabTritopologie)
		return tabTritopologie;
	}

}