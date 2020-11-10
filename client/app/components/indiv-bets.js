import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class IndivBetsComponent extends Component 
{
    @tracked aBets = [];
    @tracked currvalue;

    constructor()
    {
        super(...arguments);
        this.aBets = this.args.aBets;
    }

    getBet(index)
    {
        this.currvalue=this.aBets[index].title;
    }

}
