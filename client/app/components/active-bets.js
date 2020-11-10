import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

class Bets
{
    @tracked title;
    @tracked tag;
    @tracked description;
}
export default class ActiveBetsComponent extends Component
{
    @tracked aBets = [];
    //@tracked tempvals = [];
    constructor()
    {
        super(...arguments);
        this.addtoBets();
    }

    addtoBets()
    {
        let bets1 = new Bets(); 
        bets1.title = "Trump v Biden";
        bets1.tag = "Politics"
        bets1.description = "Who do you think will win? Biden or Trump?"
        this.addtoArray(bets1)
        let bets2 = new Bets(); 
        bets2.title = "Heads or Tails";
        bets2.tag = "Game"
        bets2.description = "which side do you choose"
        this.addtoArray(bets2)
        let bets3 = new Bets(); 
        bets3.title = "Chcolate or Vanilla";
        bets3.tag = "Other"
        bets3.description = "Which is the better Ice Cream?"
        this.addtoArray(bets3)
        let bets4 = new Bets(); 
        bets4.title = "Ps4 v Xbox";
        bets4.tag = "Game"
        bets4.description = "Which console won the console war?"
        this.addtoArray(bets4)
        
    }

    addtoArray(bets)
    {
        this.aBets.pushObject(bets)
    }
    

}
