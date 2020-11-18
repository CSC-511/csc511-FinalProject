import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import $ from 'jquery';
import ENV from 'client/config/environment';

export default class profileComponent extends Component {
    @tracked  activePage = 'profile';
    @service router;

    @tracked userInfo = [];

    @tracked username;
    @tracked idNum;
    @tracked bio;

    @tracked temporaryUser;

    constructor(){
        super(...arguments);
        this.username = this.args.username;
        this.tempUser = this.args.tempUser;
       
    let tempUserData = 
    [{
      username: "Daniel", 
      idNum: "0001",
    // img: 
    }]
    this.temporaryUser = tempUserData;
}

    uploadFile(event) {
      var self = this;
      const reader = new FileReader();
      const file = event.target.files[0];
      let imageData;
  
      reader.onload = function(){
        imageData = reader.result;
        self.set('image', imageData);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  

}