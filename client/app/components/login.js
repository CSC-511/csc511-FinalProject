import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

export default class LoginComponent extends Component {
    @tracked userName = null;
    @tracked userPass = null;
    @tracked loggedIn = false;
    @tracked rememberMe = false;

    checkInfo(){
        //checks if info exists in database
        //if true then loggedIn = true
        //else false
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
