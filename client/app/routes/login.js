import Route from '@ember/routing/route';
import $ from 'jquery';
import ENV from 'client/config/environment';

const FAKE_COOKIES = 123123123
export default class LoginRoute extends Route {
    model() {
        const temp = $.get(`${ENV.APP.API_ENDPOINT}/auth/isloggedin?cookie=${FAKE_COOKIES}`);
        return temp;
    }

    afterModel(model, transition) {
        if (model && model.isLoggedin) { // if there model is empty, take us to log in route
          this.transitionTo('/');
        }
      }
}
