import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

export default class SignupComponent extends Component {
    @tracked userName = null;
    @tracked userPass = null;

    checkInfo(){
        //checks if info exists in database
        //if false then add it 
        //else user already exists
    }

    getUsername(input){
        this.userName = input.target.value;       
    }

    getUserpass(input){
        this.userPass = input.target.value;
    }

}
