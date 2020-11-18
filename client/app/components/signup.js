import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { inject as service }from '@ember/service';

export default class SignupComponent extends Component {
    @tracked userName = null;
    @tracked userPass = null;
    @service router;
    
    checkInfo(){
        this.router.transitionTo('/')
    }

    getUsername(input){
        this.userName = input.target.value;       
    }

    getUserpass(input){
        this.userPass = input.target.value;
    }

}
