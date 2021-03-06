import {DanceEvent} from './DanceEvent';
import {Competition} from './Competition';
import {DancerRepository} from '../DancerRepository';
import {Dancer} from './Dancer';


export class Individual {
  competitions: Competition[];
  dancer: Dancer;


  constructor(firstName: string, lastName: string, competitions: Competition[]) {
    this.dancer = DancerRepository.Instance.createOrGet(firstName + ' ' + lastName);
    this.competitions = competitions;
  }

  get Competitions(): Competition[] {
    return this.competitions;
  }

  get Skills(): { [key: string]: DanceEvent[] } {
    const skills: { [key: string]: DanceEvent[] } = {};
    let events: DanceEvent[] = [];
    this.competitions.forEach(c => events = events.concat(c.dancedEvents));
    for (let i = 0; i < events.length; i++) {
      skills[events[i].pointSkill] = skills[events[i].pointSkill] || [];
      skills[events[i].pointSkill].push(events[i]);
    }
    return skills;

  }

  get Styles(): { [key: string]: DanceEvent[] } {
    const skills: { [key: string]: DanceEvent[] } = {};
    let events: DanceEvent[] = [];
    this.competitions.forEach(c => events = events.concat(c.dancedEvents));
    for (let i = 0; i < events.length; i++) {
      skills[events[i].style] = skills[events[i].style] || [];
      skills[events[i].style].push(events[i]);
    }
    return skills;

  }
}
