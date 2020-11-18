import Route from '@ember/routing/route';
import $ from 'jquery';
import ENV from 'client/config/environment';

const FAKE_COOKIES = 123123123
export default class IndexRoute extends Route {
  constructor(){
    super(...arguments)
    this.model();
    this.afterModel(this.model());
  }

    model() {
      const temp = $.get(`${ENV.APP.API_ENDPOINT}/auth/isloggedin?cookie=${FAKE_COOKIES}`);
      console.log(temp)
      return temp;
    }

    afterModel(model) {
      debugger
      if (!model) { // if there model is empty, take us to log in route
        this.transitionTo('login');
      }
      console.log(model);
    }
}
