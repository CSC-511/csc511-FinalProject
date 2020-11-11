import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Bets extends Component {
    
    @tracked user;
    @tracked title;
    @tracked description;
    @tracked money;

    constructor(user, title, summary, money) {
      this.user = user;
      this.title = title;
      this.summary = summary;
      this.money = money;

    }
  }
