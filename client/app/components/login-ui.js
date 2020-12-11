import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { inject as service }from '@ember/service';
import $ from 'jquery';
import ENV from 'client/config/environment';

export default class LoginComponent extends Component {
    @tracked userName = null;
    @tracked userPass = null;
    @tracked message = null;
    @tracked status = false;
    @service router;
    // @tracked username;
    // @tracked password;
    // @tracked logInSuccess = true;

    constructor(){
        super(...arguments);
        this.status = this.router.currentRoute.queryParams.signedup;
        if(this.status == 'true'){
            this.status = true;
            this.message = "Signed up Sucessfully!"
        }
        this.hideAlert();
    }

    checkInfo(){
        if(this.userName && this.userPass){
            $.post(`${ENV.APP.API_ENDPOINT}/auth/login`, ({username: this.userName,password: this.userPass}), (result)=>{
                

                // if(result && result.isLoggedIn){
                //     //I just put this in to check if session storage is working
                //     console.log("Cookie id: " + result.cookie);
                //     sessionStorage.setItem('cookie', result.cookie);
                //     // sessionStorage.removeItem('Cookie');
                   
                //     localStorage.setItem('cookie',result.cookie);
                //      //localStorage.removeItem('cookie');
                //     this.router.transitionTo('/');
                // }
                if(result && result.cookie != sessionStorage.getItem('cookie')  && result.isLoggedIn){
                    sessionStorage.setItem('cookie', result.cookie);

                    localStorage.setItem('cookie', result.cookie);
                    this.router.transitionTo('/');
                }
                else{
                    this.message = "Wrong username or password!"
                    this.status = true;
                    this.hideAlert();
                }
            })
        }
        else{
            this.message = "Please enter a username or password!"
            this.status = true;
            this.hideAlert();
        }
    }
            

    getUsername(input){
        this.userName = input.target.value;
    }

    getUserpass(input){
        this.userPass = input.target.value;
    }

    hideAlert(){
        if(this.status == true){
            setTimeout(()=> {
                this.status = false;
                this.message = null;
            }, 3000)    
        }        
             
        }
        

    

    dismissAlert(){
        this.status = false;
    }
}
