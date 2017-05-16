/**
 * Created by wangjiang on 17/5/16.
 */

import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  //getHeroes(): Hero[] {
  //  return HEROES;
  //} // stub

  getHeroes(): Promise<Hero[]> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
