import Component from '@glimmer/component';
import {action} from '@ember/object'; 
import $ from 'jquery';
import ENV from 'client/config/environment';
import { inject as service } from '@ember/service';

export default class NavbarComponent extends Component {
    @service router;

    @action
    redirectToSignUpPage(){
        this.args.changePage('signup')
        //this.router.transitionTo('signup');
    }

    @action
    redirectToProfilePage(){
        this.args.changePage('profile')
        // this.router.transitionTo('home');
    }

    @action
    redirectToActiveBetsPage(){
        this.args.changePage('activebet')
        //Active Bets Page is the Home Page
        //this.router.transitionTo('home');
    }

    @action
    redirectToCreateBetPage(){
        this.args.betInfoHandler(null)
        this.args.changePage('createbet')
        //this.router.transitionTo('createbet');
    }  

    @action 
    logOut(){
            $.post(`${ENV.APP.API_ENDPOINT}/auth/logout`, { cookie: FAKE_COOKIES }).done(didLogOut => {
                if(didLogOut){
                    this.router.transitionTo('login')

                }
            })
        
    }

    @action
    signOut(){
        const cookie = localStorage.getItem('cookie'); 
        const coke = sessionStorage.getItem('cookie'); 
        $.post(`${ENV.APP.API_ENDPOINT}/auth/signOut`, { cookie: coke }).done(didSignOut => {
            if(didSignOut){
                this.router.transitionTo('login')
                // this.args.changePage('login')

            }
        })  
    }

}
