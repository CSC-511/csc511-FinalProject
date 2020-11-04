'use strict';



;define("client/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("client/adapters/application", ["exports", "ember-data", "client/config/environment"], function (_exports, _emberData, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.RESTAdapter.extend({
    //api endpoint is the localhost
    host: _environment.default.APP.API_ENDPOINT
  });

  _exports.default = _default;
});
;define("client/app", ["exports", "ember-resolver", "ember-load-initializers", "client/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("client/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("client/components/individual-bet", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    
  <button class = "bet_button_join" onclick={{action this.changeUser}}>  User</button>
  <button class = "bet_button_join" onclick={{action this.changeAdmin}}>  Admin</button>
  <button class = "bet_button_join" onclick={{action this.changeAdminResolvedBet}}>  Resolved</button>
  <button class = "bet_button_join" onclick={{action this.changeAdminUnResolvedBet}}> Admin Unresolved</button>
  <button class = "bet_button_join" onclick={{action this.changeUserUnResolvedBet}}> User Unresolved</button>
  <button class = "bet_button_join" onclick={{action this.loadSampleData}}> Sample Data</button>
  <button class = "bet_button_join" onclick={{action this.newData}}> Clear Data</button>
  <br>
  
  <body class= "main_bet_page">
  
  {{#if displayCreateBet}}
      <h1 class = "create_bet" > Create a Bet</h1>
  
          <table class ="bet_input_field_table">
              <tr>
              <td>
                  <label for="name"><b>Bet Title</b></label>
                  <input 
                      id = "bet_title"
                      type = "string"
                      value = {{currentBetTitleValue}}
                      oninput = {{action inputBetTitleValue}}
                  >
              </td>
              </tr>
  
              <tr>
              <td>
                  <label for="name"><b>Amount</b></label>
                  <input 
                      id = "bet_amount"
                      type = "number"
                      value = {{currentBetAmountValue}}
                      oninput = {{action inputBetAmountValue}}
                  >
              </td>
              </tr>
  
              <tr>
              <td><br>
                  <label><b>Description of Bet</b></label> <br><br>
                  <input 
                      class = "bet_detail_input" 
                      id = "bet_description"
                      type = "string"
                      value = {{currentBetDescriptionValue}}
                      oninput = {{action inputBetDescriptionValue}}
                  >
                      
              </td>
              </tr>
          </table> <br>
  
              <input 
                  type="radio" 
                  name="betside"   
                  onclick={{action (mut betAgainst) true}}>
              <label>Bet For</label>
              <input 
                  type="radio" 
                  name="betside"  
                  onclick={{action (mut betAgainst) false}}>
              <label>Bet Against</label> <br>
  
      <button 
          class = "create_bet_button"
          onclick = {{
              action
              createBet
                  currentBetTitleValue
                  currentBetAmountValue 
                  currentBetDescriptionValue
                  betSide
  
              }}>
          Create Bet</button>
  
  {{else}}
      <h1 class= "bet_title">{{individualBet.betData.betName}}</h1>
  
  {{#if betDataEntered}}
      <h2 class = "display_individual_bet" > My Bet</h2>
      {{else}}
          <h2 class = "display_individual_bet" > {{individualBet.betData.betAdmin}}'s Bet</h2>
  
  {{/if}}
  
      <div class = "bet_info">
          <h3>Current bet Amount : $ {{individualBet.betData.betAmount}}.00 </h3>
          <h4> Description: <br><br> <p>{{individualBet.betData.betDetail}}</p></h4>
      </div>
  
  <table class = "bet_participant_table">
      
  
  
      {{#if betResolution}}
                  <tr>
                   <th>Whose in on this Bet</th>
                   <th>Date Joined</th>
                   <th>Bet Standing</th>
                  </tr>
          {{#each nameList key = "index" as |nameList index| }}
                  <tr>
                  <td>{{nameList.userData.userName}}</td>
                  <td>{{nameList.userData.userTime}}</td>
                  <td>{{#if nameList.userData.betSide }} Betting For
                      {{else}} Betting Against {{/if}}
                  </td>
                  </tr>      
          {{/each}}
      
      {{else}}
                  <tr>
                  <th>Whose in on this Bet</th>
                  <th>Outcome</th>
                  </tr>
              {{#each nameList key = "index" as |nameList index| }}
                  <tr>
                  <td>{{nameList.userData.userName}}</td>
                  <td>
                      {{#if nameList.userData.betSide }} Winner
                      {{else}} Loser {{/if}}
                  </td>
                  </tr>      
              {{/each}}
      {{/if}}
  
  
  </table>
  <br><br><br><br>
          
      {{#if betDataEntered}}
                  {{#if betResolution}}
                  <button class = "button_resolve" onclick={{action this.changeAdminResolvedBet}}> Bet Resolve</button>
                  <button class = "button_resolve"> Bet Unresolved</button>
                  {{else}}
                  <h3 class = "bet_resolved_text"> Bet Resolved</h3>
  
                  {{/if}}
              {{else}}
              <input 
                  type="radio"
                  name="betside"  
                  onclick={{action (mut betAgainst) true}}>
              <label>Bet For</label>
              <input 
                  type="radio" 
                  name="betside"  
                  onclick={{action (mut betAgainst) false}}>
              <label>Bet Against</label> <br>
              
              <button 
                  class = "button_resolve"  
                  onclick = {{ action joinBet}}>
                  Join Bet</button>
  
      {{/if}}
  {{/if}}
  </body>
  
  */
  {"id":"Z5376i/R","block":"{\"symbols\":[\"nameList\",\"index\",\"nameList\",\"index\"],\"statements\":[[2,\"\\n\"],[10,\"button\"],[14,0,\"bet_button_join\"],[15,\"onclick\",[30,[36,2],[[32,0],[32,0,[\"changeUser\"]]],null]],[12],[2,\"  User\"],[13],[2,\"\\n\"],[10,\"button\"],[14,0,\"bet_button_join\"],[15,\"onclick\",[30,[36,2],[[32,0],[32,0,[\"changeAdmin\"]]],null]],[12],[2,\"  Admin\"],[13],[2,\"\\n\"],[10,\"button\"],[14,0,\"bet_button_join\"],[15,\"onclick\",[30,[36,2],[[32,0],[32,0,[\"changeAdminResolvedBet\"]]],null]],[12],[2,\"  Resolved\"],[13],[2,\"\\n\"],[10,\"button\"],[14,0,\"bet_button_join\"],[15,\"onclick\",[30,[36,2],[[32,0],[32,0,[\"changeAdminUnResolvedBet\"]]],null]],[12],[2,\" Admin Unresolved\"],[13],[2,\"\\n\"],[10,\"button\"],[14,0,\"bet_button_join\"],[15,\"onclick\",[30,[36,2],[[32,0],[32,0,[\"changeUserUnResolvedBet\"]]],null]],[12],[2,\" User Unresolved\"],[13],[2,\"\\n\"],[10,\"button\"],[14,0,\"bet_button_join\"],[15,\"onclick\",[30,[36,2],[[32,0],[32,0,[\"loadSampleData\"]]],null]],[12],[2,\" Sample Data\"],[13],[2,\"\\n\"],[10,\"button\"],[14,0,\"bet_button_join\"],[15,\"onclick\",[30,[36,2],[[32,0],[32,0,[\"newData\"]]],null]],[12],[2,\" Clear Data\"],[13],[2,\"\\n\"],[10,\"br\"],[12],[13],[2,\"\\n\\n\"],[10,\"body\"],[14,0,\"main_bet_page\"],[12],[2,\"\\n\\n\"],[6,[37,5],[[35,19]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[10,\"h1\"],[14,0,\"create_bet\"],[12],[2,\" Create a Bet\"],[13],[2,\"\\n\\n        \"],[10,\"table\"],[14,0,\"bet_input_field_table\"],[12],[2,\"\\n            \"],[10,\"tr\"],[12],[2,\"\\n            \"],[10,\"td\"],[12],[2,\"\\n                \"],[10,\"label\"],[14,\"for\",\"name\"],[12],[10,\"b\"],[12],[2,\"Bet Title\"],[13],[13],[2,\"\\n                \"],[10,\"input\"],[14,1,\"bet_title\"],[15,2,[34,11]],[15,\"oninput\",[30,[36,2],[[32,0],[35,12]],null]],[14,4,\"string\"],[12],[13],[2,\"\\n            \"],[13],[2,\"\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"tr\"],[12],[2,\"\\n            \"],[10,\"td\"],[12],[2,\"\\n                \"],[10,\"label\"],[14,\"for\",\"name\"],[12],[10,\"b\"],[12],[2,\"Amount\"],[13],[13],[2,\"\\n                \"],[10,\"input\"],[14,1,\"bet_amount\"],[15,2,[34,13]],[15,\"oninput\",[30,[36,2],[[32,0],[35,14]],null]],[14,4,\"number\"],[12],[13],[2,\"\\n            \"],[13],[2,\"\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"tr\"],[12],[2,\"\\n            \"],[10,\"td\"],[12],[10,\"br\"],[12],[13],[2,\"\\n                \"],[10,\"label\"],[12],[10,\"b\"],[12],[2,\"Description of Bet\"],[13],[13],[2,\" \"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[2,\"\\n                \"],[10,\"input\"],[14,0,\"bet_detail_input\"],[14,1,\"bet_description\"],[15,2,[34,15]],[15,\"oninput\",[30,[36,2],[[32,0],[35,16]],null]],[14,4,\"string\"],[12],[13],[2,\"\\n                    \\n            \"],[13],[2,\"\\n            \"],[13],[2,\"\\n        \"],[13],[2,\" \"],[10,\"br\"],[12],[13],[2,\"\\n\\n            \"],[10,\"input\"],[14,3,\"betside\"],[15,\"onclick\",[30,[36,2],[[32,0],[30,[36,1],[[35,0]],null],true],null]],[14,4,\"radio\"],[12],[13],[2,\"\\n            \"],[10,\"label\"],[12],[2,\"Bet For\"],[13],[2,\"\\n            \"],[10,\"input\"],[14,3,\"betside\"],[15,\"onclick\",[30,[36,2],[[32,0],[30,[36,1],[[35,0]],null],false],null]],[14,4,\"radio\"],[12],[13],[2,\"\\n            \"],[10,\"label\"],[12],[2,\"Bet Against\"],[13],[2,\" \"],[10,\"br\"],[12],[13],[2,\"\\n\\n    \"],[10,\"button\"],[14,0,\"create_bet_button\"],[15,\"onclick\",[30,[36,2],[[32,0],[35,18],[35,11],[35,13],[35,15],[35,17]],null]],[12],[2,\"\\n        Create Bet\"],[13],[2,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[10,\"h1\"],[14,0,\"bet_title\"],[12],[1,[35,9,[\"betData\",\"betName\"]]],[13],[2,\"\\n\\n\"],[6,[37,5],[[35,10]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[10,\"h2\"],[14,0,\"display_individual_bet\"],[12],[2,\" My Bet\"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[10,\"h2\"],[14,0,\"display_individual_bet\"],[12],[2,\" \"],[1,[35,9,[\"betData\",\"betAdmin\"]]],[2,\"'s Bet\"],[13],[2,\"\\n\\n\"]],\"parameters\":[]}]]],[2,\"\\n    \"],[10,\"div\"],[14,0,\"bet_info\"],[12],[2,\"\\n        \"],[10,\"h3\"],[12],[2,\"Current bet Amount : $ \"],[1,[35,9,[\"betData\",\"betAmount\"]]],[2,\".00 \"],[13],[2,\"\\n        \"],[10,\"h4\"],[12],[2,\" Description: \"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[2,\" \"],[10,\"p\"],[12],[1,[35,9,[\"betData\",\"betDetail\"]]],[13],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n\"],[10,\"table\"],[14,0,\"bet_participant_table\"],[12],[2,\"\\n    \\n\\n\\n\"],[6,[37,5],[[35,4]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"                \"],[10,\"tr\"],[12],[2,\"\\n                 \"],[10,\"th\"],[12],[2,\"Whose in on this Bet\"],[13],[2,\"\\n                 \"],[10,\"th\"],[12],[2,\"Date Joined\"],[13],[2,\"\\n                 \"],[10,\"th\"],[12],[2,\"Bet Standing\"],[13],[2,\"\\n                \"],[13],[2,\"\\n\"],[6,[37,8],[[30,[36,7],[[30,[36,7],[[35,6]],null]],null]],[[\"key\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"                \"],[10,\"tr\"],[12],[2,\"\\n                \"],[10,\"td\"],[12],[1,[32,3,[\"userData\",\"userName\"]]],[13],[2,\"\\n                \"],[10,\"td\"],[12],[1,[32,3,[\"userData\",\"userTime\"]]],[13],[2,\"\\n                \"],[10,\"td\"],[12],[6,[37,5],[[32,3,[\"userData\",\"betSide\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\" Betting For\\n                    \"]],\"parameters\":[]},{\"statements\":[[2,\" Betting Against \"]],\"parameters\":[]}]]],[2,\"\\n                \"],[13],[2,\"\\n                \"],[13],[2,\"      \\n\"]],\"parameters\":[3,4]}]]],[2,\"    \\n\"]],\"parameters\":[]},{\"statements\":[[2,\"                \"],[10,\"tr\"],[12],[2,\"\\n                \"],[10,\"th\"],[12],[2,\"Whose in on this Bet\"],[13],[2,\"\\n                \"],[10,\"th\"],[12],[2,\"Outcome\"],[13],[2,\"\\n                \"],[13],[2,\"\\n\"],[6,[37,8],[[30,[36,7],[[30,[36,7],[[35,6]],null]],null]],[[\"key\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"                \"],[10,\"tr\"],[12],[2,\"\\n                \"],[10,\"td\"],[12],[1,[32,1,[\"userData\",\"userName\"]]],[13],[2,\"\\n                \"],[10,\"td\"],[12],[2,\"\\n                    \"],[6,[37,5],[[32,1,[\"userData\",\"betSide\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\" Winner\\n                    \"]],\"parameters\":[]},{\"statements\":[[2,\" Loser \"]],\"parameters\":[]}]]],[2,\"\\n                \"],[13],[2,\"\\n                \"],[13],[2,\"      \\n\"]],\"parameters\":[1,2]}]]]],\"parameters\":[]}]]],[2,\"\\n\\n\"],[13],[2,\"\\n\"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[2,\"\\n        \\n\"],[6,[37,5],[[35,10]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,5],[[35,4]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"                \"],[10,\"button\"],[14,0,\"button_resolve\"],[15,\"onclick\",[30,[36,2],[[32,0],[32,0,[\"changeAdminResolvedBet\"]]],null]],[12],[2,\" Bet Resolve\"],[13],[2,\"\\n                \"],[10,\"button\"],[14,0,\"button_resolve\"],[12],[2,\" Bet Unresolved\"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"                \"],[10,\"h3\"],[14,0,\"bet_resolved_text\"],[12],[2,\" Bet Resolved\"],[13],[2,\"\\n\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[2,\"            \"],[10,\"input\"],[14,3,\"betside\"],[15,\"onclick\",[30,[36,2],[[32,0],[30,[36,1],[[35,0]],null],true],null]],[14,4,\"radio\"],[12],[13],[2,\"\\n            \"],[10,\"label\"],[12],[2,\"Bet For\"],[13],[2,\"\\n            \"],[10,\"input\"],[14,3,\"betside\"],[15,\"onclick\",[30,[36,2],[[32,0],[30,[36,1],[[35,0]],null],false],null]],[14,4,\"radio\"],[12],[13],[2,\"\\n            \"],[10,\"label\"],[12],[2,\"Bet Against\"],[13],[2,\" \"],[10,\"br\"],[12],[13],[2,\"\\n            \\n            \"],[10,\"button\"],[14,0,\"button_resolve\"],[15,\"onclick\",[30,[36,2],[[32,0],[35,3]],null]],[12],[2,\"\\n                Join Bet\"],[13],[2,\"\\n\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"betAgainst\",\"mut\",\"action\",\"joinBet\",\"betResolution\",\"if\",\"nameList\",\"-track-array\",\"each\",\"individualBet\",\"betDataEntered\",\"currentBetTitleValue\",\"inputBetTitleValue\",\"currentBetAmountValue\",\"inputBetAmountValue\",\"currentBetDescriptionValue\",\"inputBetDescriptionValue\",\"betSide\",\"createBet\",\"displayCreateBet\"]}","meta":{"moduleName":"client/components/individual-bet.hbs"}});

  let IndividualBetComponent = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._tracked, _dec6 = Ember._tracked, _dec7 = Ember._tracked, _dec8 = Ember._tracked, _dec9 = Ember._tracked, _dec10 = Ember._tracked, (_class = (_temp = class IndividualBetComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "currentTime", _descriptor, this);

      _initializerDefineProperty(this, "betResolution", _descriptor2, this);

      _initializerDefineProperty(this, "betDataEntered", _descriptor3, this);

      _initializerDefineProperty(this, "displayCreateBet", _descriptor4, this);

      _initializerDefineProperty(this, "nameList", _descriptor5, this);

      _initializerDefineProperty(this, "individualBet", _descriptor6, this);

      _initializerDefineProperty(this, "betAgainst", _descriptor7, this);

      _initializerDefineProperty(this, "currentBetTitleValue", _descriptor8, this);

      _initializerDefineProperty(this, "currentBetAmountValue", _descriptor9, this);

      _initializerDefineProperty(this, "currentDescriptionValue", _descriptor10, this);

      _defineProperty(this, "c", void 0);

      this.loadSampleData();
    }

    newData() {
      this.individualBet = {
        betID: '',
        betData: {
          betTitle: '',
          betAmount: 0,
          betAdmin: '',
          isAdmin: false,
          betResolution: false,
          betDetail: '',
          betParticipants: {
            userID: '',
            userData: {
              userName: '',
              userTime: '',
              betSide: true
            }
          }
        }
      };
      this.nameList = [];
    }

    loadSampleData() {
      this.individualBet = {
        betID: '001',
        betData: {
          betTitle: 'Jerry wont Fail',
          betAmount: 20,
          betAdmin: 'Rick',
          isAdmin: true,
          betResolution: false,
          betDetail: 'Jerry will fail to impress Rick',
          betParticipants: []
        }
      };
      this.individualBet.betData.betParticipants.pushObject({
        userID: '101',
        userData: {
          userName: 'Rick',
          userTime: '1:00',
          betSide: false
        }
      });
      this.individualBet.betData.betParticipants.pushObject({
        userID: '102',
        userData: {
          userName: 'Morty',
          userTime: '2:00',
          betSide: true
        }
      });
      this.individualBet.betData.betParticipants.pushObject({
        userID: '103',
        userData: {
          userName: 'Beth',
          userTime: '3:00',
          betSide: false
        }
      });
      this.individualBet.betData.betParticipants.pushObject({
        userID: '104',
        userData: {
          userName: 'Jerry',
          userTime: '4:00',
          betSide: true
        }
      });
      this.individualBet.betData.betParticipants.pushObject({
        userID: '105',
        userData: {
          userName: 'Summer',
          userTime: '5:00',
          betSide: false
        }
      });
      this.nameList = this.individualBet.betData.betParticipants;
      console.log(this.nameList);
      console.log(this.individualBet.betData.betParticipants.length);
    }

    createBet(title, amount, detail, side) {
      this.currentTime = new Date();
      this.newData();
      this.individualBet = {
        betID: '001',
        betData: {
          betTitle: title,
          betAmount: amount,
          betAdmin: 'AdminUserID',
          isAdmin: true,
          betResolution: false,
          betDetail: detail,
          betParticipants: []
        }
      };
      this.individualBet.betData.betParticipants.pushObject({
        userID: 'AdminUserID',
        userData: {
          userName: 'AdminUserName',
          userTime: this.currentTime,
          betSide: this.betAgainst
        }
      });
      this.nameList = this.individualBet.betData.betParticipants;
      this.displayCreateBet = false;
      console.log(this.individualBet);
      console.log(this.nameList);
    }

    joinBet(user, name) {
      this.currentTime = new Date();
      this.individualBet.betData.betParticipants.pushObject({
        userID: 'userID',
        userData: {
          userName: 'userName',
          userTime: this.currentTime,
          betSide: this.betAgainst
        }
      });
      console.log(this.individualBet.betData.betParticipants);
    }

    resolveBet() {
      this.individualBet.betData.betResolution = true;
    }

    inputBetTitleValue(input) {
      this.currentBetTitleValue = input.target.value;
    }

    inputBetAmountValue(input) {
      this.currentBetAmountValue = input.target.value;
    }

    inputBetDescriptionValue(input) {
      this.currentBetDescriptionValue = input.target.value;
    } // Testing Buttons


    loadFakeData() {
      this.displayCreateBet = false;
      console.log(this.isAdmin);
    }

    changeUser() {
      this.displayCreateBet = false;
    }

    changeAdmin() {
      this.newData();
      this.displayCreateBet = true;
    }

    changeAdminUnResolvedBet() {
      this.betResolution = true;
      this.betDataEntered = true;
    }

    changeUserUnResolvedBet() {
      this.betResolution = true;
      this.betDataEntered = false;
    }

    changeAdminResolvedBet() {
      this.betResolution = false;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "currentTime", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "betResolution", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "betDataEntered", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "displayCreateBet", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "nameList", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "individualBet", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {};
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "betAgainst", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "currentBetTitleValue", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "currentBetAmountValue", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "currentDescriptionValue", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = IndividualBetComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, IndividualBetComponent);
});
;define("client/components/navbar", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <nav class="topnav">
      <button class="btnHeader" onclick={{redirectToActiveBetsPage}}>Bet 511</button> <!-- Header button links to Active Bets Page-->
      <button class="btnHome" onclick={{redirectToActiveBetsPage}}>Home</button> <!-- Home button links to Active Bets Page-->
      <button class="btnProfile" onclick={{redirectToProfilePage}}>Profile</button>
      <button class="btnCreateBet" onclick={{redirectToCreateBetPage}}>Create Bet</button>
      <button class="btnSignUp" onclick={{redirectToSignUpPage}}>Sign Up</button>
      <button class="btnSignOut" onclick={{redirectToProfilePage}}>Sign out</button> <!-- Sign out button links to Profile Page-->
  </nav>
  */
  {"id":"J4YFQ4d4","block":"{\"symbols\":[],\"statements\":[[10,\"nav\"],[14,0,\"topnav\"],[12],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnHeader\"],[15,\"onclick\",[34,0]],[12],[2,\"Bet 511\"],[13],[2,\" \"],[3,\" Header button links to Active Bets Page\"],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnHome\"],[15,\"onclick\",[34,0]],[12],[2,\"Home\"],[13],[2,\" \"],[3,\" Home button links to Active Bets Page\"],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnProfile\"],[15,\"onclick\",[34,1]],[12],[2,\"Profile\"],[13],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnCreateBet\"],[15,\"onclick\",[34,2]],[12],[2,\"Create Bet\"],[13],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnSignUp\"],[15,\"onclick\",[34,3]],[12],[2,\"Sign Up\"],[13],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnSignOut\"],[15,\"onclick\",[34,1]],[12],[2,\"Sign out\"],[13],[2,\" \"],[3,\" Sign out button links to Profile Page\"],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"redirectToActiveBetsPage\",\"redirectToProfilePage\",\"redirectToCreateBetPage\",\"redirectToSignUpPage\"]}","meta":{"moduleName":"client/components/navbar.hbs"}});

  let NavbarComponent = (_dec = Ember.inject.service, _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, _dec5 = Ember._action, (_class = (_temp = class NavbarComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    // @action
    // redirectToSignInPage(){
    //     //this.router.transitionTo('/');
    // }
    redirectToSignUpPage() {//this.router.transitionTo('signup');
    }

    redirectToProfilePage() {//this.router.transitionTo('profile');
    }

    redirectToActiveBetsPage() {//Active Bets Page is the Home Page
      //this.router.transitionTo('home');
    }

    redirectToCreateBetPage() {//this.router.transitionTo('createbet');
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "redirectToSignUpPage", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "redirectToSignUpPage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "redirectToProfilePage", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "redirectToProfilePage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "redirectToActiveBetsPage", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "redirectToActiveBetsPage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "redirectToCreateBetPage", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "redirectToCreateBetPage"), _class.prototype)), _class));
  _exports.default = NavbarComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, NavbarComponent);
});
;define("client/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("client/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("client/helpers/app-version", ["exports", "client/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("client/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("client/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("client/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "client/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("client/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("client/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("client/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("client/initializers/export-application-global", ["exports", "client/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("client/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("client/router", ["exports", "client/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('login', {
      path: '/'
    });
    this.route('home'); // this.route('signup');
    // this.route('profile');
    // this.route('activebets');
    // this.route('createbet');
  });
});
;define("client/routes/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class HomeRoute extends Ember.Route {}

  _exports.default = HomeRoute;
});
;define("client/routes/login", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class LoginRoute extends Ember.Route {}

  _exports.default = LoginRoute;
});
;define("client/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("client/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("client/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("client/serializers/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONSerializer.extend({});

  _exports.default = _default;
});
;define("client/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("client/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("client/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "p7EppQEa",
    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n\"],[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "client/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("client/templates/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "GioQP/Us",
    "block": "{\"symbols\":[],\"statements\":[[8,\"navbar\",[],[[],[]],null],[2,\"\\n\"],[10,\"h1\"],[12],[2,\"ActiveBets/Home Component\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "client/templates/home.hbs"
    }
  });

  _exports.default = _default;
});
;define("client/templates/login", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9dL65Wmh",
    "block": "{\"symbols\":[],\"statements\":[[10,\"h1\"],[12],[2,\"Login Component\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "client/templates/login.hbs"
    }
  });

  _exports.default = _default;
});
;define("client/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("client/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("client/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("client/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('client/config/environment', [], function() {
  var prefix = 'client';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("client/app")["default"].create({"API_ENDPOINT":"http://localhost:4500","name":"client","version":"0.0.0+dde3bbc9"});
          }
        
//# sourceMappingURL=client.map
