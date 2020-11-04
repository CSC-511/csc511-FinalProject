import Route from '@ember/routing/route';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';

export default class LoginRoute extends Route {
    @tracked userInput = null;
    @tracked userName = null;
    @tracked userEmail = null;
    @tracked remember = false;
    password = null;

    @action
    updateUser(input){
        debugger;
        this.userInput = input.target.value;
        alert(this.userInput)
    }

    
}
