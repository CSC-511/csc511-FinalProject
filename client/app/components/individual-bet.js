import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';


export default class IndividualBetComponent extends Component {

@tracked currentTime;

@tracked betResolution = true;
@tracked betDataEntered = true;
@tracked displayCreateBet = true;
@tracked nameList = [];
@tracked individualBet = {}
@tracked betAgainst = null;

@tracked currentBetTitleValue;
@tracked currentBetAmountValue;
@tracked currentDescriptionValue;
    



constructor(){
    super(...arguments)
    this.loadSampleData();

}

newData(){

    this.individualBet = {

        betID: '', 
        betData: {             
            betTitle: '',
            betAmount: 0,
            betAdmin: '',
            isAdmin: false, 
            betResolution: false,
            betDetail: '',
            betParticipants:{
                userID: '',
                userData:{
                    userName: '',
                    userTime: '',
                    betSide: true,
                    }
                }
        }
    }
    this.nameList = [];
}

loadSampleData(){

    this.individualBet = {

        betID: '001', 
        betData: {             
            betTitle: 'Jerry wont Fail',
            betAmount: 20,
            betAdmin: 'Rick',
            isAdmin: true, 
            betResolution: false,
            betDetail: 'Jerry will fail to impress Rick',
            betParticipants:[],

        }
    }
    this.individualBet.betData.betParticipants.pushObject({userID:'101',userData:{userName: 'Rick', userTime: '1:00', betSide: false, }})
    this.individualBet.betData.betParticipants.pushObject({userID:'102',userData:{userName: 'Morty', userTime: '2:00', betSide: true, }})
    this.individualBet.betData.betParticipants.pushObject({userID:'103',userData:{userName: 'Beth', userTime: '3:00', betSide: false, }}) 
    this.individualBet.betData.betParticipants.pushObject({userID:'104',userData:{userName: 'Jerry', userTime: '4:00', betSide: true, }})
    this.individualBet.betData.betParticipants.pushObject({userID:'105',userData:{userName: 'Summer', userTime: '5:00', betSide: false, }})
    this.nameList = this.individualBet.betData.betParticipants;
    console.log(this.nameList)
    console.log(this.individualBet.betData.betParticipants.length)
}

createBet(title, amount, detail, side){
    this.currentTime = new Date();
    this.individualBet = {
        betData: {             
            betTitle: title,
            betAmount: amount,
            betAdmin: this.userData[0].username, // should be a unique key as identifier it is currently the cookie
            isAdmin: true, 
            betResolution: false,
            betDetail: detail,
            betParticipants:[],

        }
    }
    this.getTimeAndDate()
    this.individualBet.betData.betParticipants.pushObject({userID:this.userIdNum,userData:{userName: this.userData[0].username, userTime: this.currentTime, betSide: this.betAgainst, }})
    this.nameList = this.individualBet.betData.betParticipants;
    this.displayCreateBet = false;
    console.log(this.individualBet)
    console.log(this.nameList)



}

joinBet(){

    console.log(this.userData)
    this.getTimeAndDate()
    this.individualBet.betData.betParticipants.pushObject({
        userID: this.userIdNum, // users unique ID to be logged
        userData:{
            userName: this.userData[0].username, // use the ID to retrieve the name
            userTime: this.currentTime,
            betSide: this.betAgainst, 
        }
    })
    console.log(this.individualBet.betData.betParticipants)
}
resolveBet(){
    this.individualBet.betData.betResolution = true
}
inputBetTitleValue(input){
    this.currentBetTitleValue  = input.target.value;    
}
inputBetAmountValue(input){
    this.currentBetAmountValue  = input.target.value;   
}
inputBetDescriptionValue(input){
    this.currentBetDescriptionValue  = input.target.value;    
}

// Testing Buttons

loadFakeData(){
    this.displayCreateBet = false
    console.log(this.isAdmin)
}

changeUser() {this.displayCreateBet = false}

changeAdmin() {this.displayCreateBet = true}

changeAdminUnResolvedBet(){
    this.betResolution = true;
    this.betDataEntered = true;
}

changeUserUnResolvedBet(){
    this.betResolution = true;
    this.betDataEntered = false;
}

changeAdminResolvedBet(){
    this.betResolution = false;
}


}
