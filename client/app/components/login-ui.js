import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { inject as service }from '@ember/service';
import $ from 'jquery';
import ENV from 'client/config/environment';
import shaString from '../../../server/routes/auth';


export default class LoginComponent extends Component {
    @tracked userName = null;
    @tracked userPass = null;
    @tracked isLoggedIn = false;
    @service router;

    checkInfo(){
        debugger
        if(this.userName && this.userPass){
            $.post(`${ENV.APP.API_ENDPOINT}/auth/login`, ({username: this.userName,password: this.userPass}), (result)=>{
                if(result && result.isLoggedIn){
                    localStorage.setItem('cookie',result.cookie);
                    this.router.transitionTo('/');
                }
              })
        } 
        console.log(shaString)
    }

    getUsername(input){
        this.userName = input.target.value;
    }

    getUserpass(input){
        this.userPass = input.target.value;
    }
}
