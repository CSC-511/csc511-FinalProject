import Route from '@ember/routing/route';
import $ from 'jquery';
import ENV from 'client/config/environment';

const FAKE_COOKIES = 123123123
export default class LoginRoute extends Route {
    model() {
        debugger;
        const temp = $.get(`${ENV.APP.API_ENDPOINT}/auth/isloggedin?cookie=${FAKE_COOKIES}`);
        console.log(temp)
        return temp;
    }

    afterModel(model, transition) {
        debugger;
        if (model && model.isLoggedin) { // if there model is empty, take us to log in route
          this.transitionTo('/');
        }
      }
}
