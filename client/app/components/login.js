import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { inject as service }from '@ember/service';
import $ from 'jquery';
import ENV from 'client/config/environment';

export default class LoginComponent extends Component {
    @tracked userName = null;
    @tracked userPass = null;
    @tracked isLoggedIn = false;
    @tracked rememberMe = false;
    @service router;

    checkInfo(){
        this.router.transitionTo('/')
        
    }

    checkRemember(){
        if(this.rememberMe == false){
            this.rememberMe = true;
        }
        else
            this.rememberMe = false;
    }

    getUsername(input){
        this.userName = input.target.value;
    }

    getUserpass(input){
        this.userPass = input.target.value;
    }
}
