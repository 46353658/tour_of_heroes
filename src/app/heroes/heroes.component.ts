import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes'; // <-- No longer needed when using HeroService
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // heroes = HEROES; // <-- No longer needed when using HeroService
  heroes: Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // Observable.subscribe()
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  // old getHeroes()
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
}
