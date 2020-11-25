import Route from '@ember/routing/route';
import $ from 'jquery';
import ENV from 'client/config/environment';
import { inject as service } from '@ember/service';

const FAKE_COOKIE = 123123123;
export default class IndexRoute extends Route {
  // constructor(){
  //   super(...arguments)
  //   this.model();
  //   this.afterModel(this.model());
  // }

    model() {
      const cookie = localStorage.getItem('cookie')
      const temp = $.get(`${ENV.APP.API_ENDPOINT}/auth/isloggedin?cookie=${cookie}`);
      console.log(temp)
      return temp;
    }

    afterModel(model) {
      if (!model) { // if there model is empty, take us to log in route
        this.transitionTo('login');
      }
      console.log(model);
    }
}
