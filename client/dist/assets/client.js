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
<<<<<<< HEAD
;define("client/adapters/application", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
=======
;define("client/adapters/application", ["exports", "ember-data", "client/config/environment"], function (_exports, _emberData, _environment) {
>>>>>>> Yeting--Navbar and Router added
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

<<<<<<< HEAD
  class ApplicationAdapter extends _jsonApi.default {}

  _exports.default = ApplicationAdapter;
});
;define("client/adapters/member", ["exports", "@ember-data/adapter/rest", "client/config/environment"], function (_exports, _rest, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class LoginAdapter extends _rest.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "host", _environment.default.APP.API_ENDPOINT);
    }

  }

  _exports.default = LoginAdapter;
=======
  var _default = _emberData.default.RESTAdapter.extend({
    //api endpoint is the localhost
    host: _environment.default.APP.API_ENDPOINT
  });

  _exports.default = _default;
>>>>>>> Yeting--Navbar and Router added
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
<<<<<<< HEAD
;define("client/components/add-friend", ["exports", "@glimmer/component"], function (_exports, _component) {
=======
;define("client/components/individual-bet", ["exports", "@glimmer/component"], function (_exports, _component) {
>>>>>>> Yeting--Navbar and Router added
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

<<<<<<< HEAD
  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _temp;
=======
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp;
>>>>>>> Yeting--Navbar and Router added

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
<<<<<<< HEAD
    <button onclick={{action addFriendClicked}} disabled={{this.addFriendIsClicked}}> 
      {{#unless this.addFriendIsClicked}}Add Friend 
      {{else}} Pending
      {{/unless}}
      </button>
  */
  {"id":"gY5YfLg5","block":"{\"symbols\":[],\"statements\":[[10,\"button\"],[15,\"onclick\",[30,[36,1],[[32,0],[35,0]],null]],[15,\"disabled\",[32,0,[\"addFriendIsClicked\"]]],[12],[2,\" \\n    \"],[6,[37,2],[[32,0,[\"addFriendIsClicked\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"Add Friend \\n    \"]],\"parameters\":[]},{\"statements\":[[2,\" Pending\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13]],\"hasEval\":false,\"upvars\":[\"addFriendClicked\",\"action\",\"unless\"]}","meta":{"moduleName":"client/components/add-friend.hbs"}});

  let AddFriendComponent = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, (_class = (_temp = class AddFriendComponent extends _component.default {
    //current user that is loggedIn
    //profile that we are currently looking at with the addFriend button
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "userRequester", _descriptor, this);

      _initializerDefineProperty(this, "userReceiver", _descriptor2, this);

      _initializerDefineProperty(this, "addFriendIsClicked", _descriptor3, this);

      let fakeUserSender = {
        firstName: "Jasper",
        lastName: "Caballero"
      };
      let fakeUserReceiver = {
        firstName: "George",
        lastName: "Chan"
      };
      this.userRequester = fakeUserSender;
      this.userReceiver = fakeUserReceiver;
    }

    addFriendClicked() {
      //on addFriend button click, send a request to the user sending the request 
      //to the other user receiving it. (Do I show that the request is pending? 
      //Or assume that the other user is automatically added as a friend?)
      console.log(this.userRequester.firstName + " is sending a friend request to " + this.userReceiver.firstName);
      this.addFriendIsClicked = true; //add function call here to make request to db to send a request to other user
      //also maybe update the friends list once friend added is confirmed
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "userRequester", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "userReceiver", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "addFriendIsClicked", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  })), _class));
  _exports.default = AddFriendComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, AddFriendComponent);
});
;define("client/components/friends-list", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- <h1>In Friends List Component</h1>
  <AddFriend /> --}}
  
  {{!-- Right now, this won't be shown anywhere until the hbs file is called in the profile component. --}}
  
  <div class="container">
  <h3>Friends List</h3>
  {{#if this.friendsListData}}
      
      {{#each this.friendsListData as |friendData|}}
      
      
      <img class="profile-pic" src={{friendData.img}} alt={{friendData.firstName}} />
      <p class="friend-name"> {{friendData.firstName}} {{friendData.lastName}}</p>
  
      {{/each}}
  
      {{else}}
      <p>This profile does not have any friends yet, try adding some now!</p>
  
  {{/if}}
  </div>
  
  */
  {"id":"oyZFCZQX","block":"{\"symbols\":[\"friendData\"],\"statements\":[[2,\"\\n\"],[2,\"\\n\"],[10,\"div\"],[14,0,\"container\"],[12],[2,\"\\n\"],[10,\"h3\"],[12],[2,\"Friends List\"],[13],[2,\"\\n\"],[6,[37,2],[[32,0,[\"friendsListData\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,0,[\"friendsListData\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \\n    \\n    \"],[10,\"img\"],[14,0,\"profile-pic\"],[15,\"src\",[32,1,[\"img\"]]],[15,\"alt\",[32,1,[\"firstName\"]]],[12],[13],[2,\"\\n    \"],[10,\"p\"],[14,0,\"friend-name\"],[12],[2,\" \"],[1,[32,1,[\"firstName\"]]],[2,\" \"],[1,[32,1,[\"lastName\"]]],[13],[2,\"\\n\\n\"]],\"parameters\":[1]}]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[10,\"p\"],[12],[2,\"This profile does not have any friends yet, try adding some now!\"],[13],[2,\"\\n\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\",\"if\"]}","meta":{"moduleName":"client/components/friends-list.hbs"}});

  let FriendsListComponent = (_dec = Ember._tracked, (_class = (_temp = class FriendsListComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "friendsListData", _descriptor, this);

      let fakeFriendsData = [{
        firstName: "Jasper",
        lastName: "Caballero",
        img: "http://placekitten.com/200/300"
      }, {
        firstName: "Daniel",
        lastName: "Dolan",
        img: "http://placekitten.com/300/300"
      }, {
        firstName: "Victoria",
        lastName: "Fischer",
        img: "http://placekitten.com/201/300"
      }];
      this.friendsListData = fakeFriendsData;
      console.log(this.friendsListData);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "friendsListData", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = FriendsListComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, FriendsListComponent);
});
;define("client/components/login-ui", ["exports", "@glimmer/component", "jquery", "client/config/environment"], function (_exports, _component, _jquery, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div style="border: 1px solid orange;">
      LOGIN COMPONENT
      <p>Username: <Input @value={{this.username}}/></p>
      <p>Password: <Input @value={{this.password}}/></p>
      <button onclick={{this.logIn}}>Log In</button>
  </div>
  
  */
  {"id":"KtGow+H9","block":"{\"symbols\":[],\"statements\":[[10,\"div\"],[14,5,\"border: 1px solid orange;\"],[12],[2,\"\\n    LOGIN COMPONENT\\n    \"],[10,\"p\"],[12],[2,\"Username: \"],[8,\"input\",[],[[\"@value\"],[[32,0,[\"username\"]]]],null],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Password: \"],[8,\"input\",[],[[\"@value\"],[[32,0,[\"password\"]]]],null],[13],[2,\"\\n    \"],[10,\"button\"],[15,\"onclick\",[32,0,[\"logIn\"]]],[12],[2,\"Log In\"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}","meta":{"moduleName":"client/components/login-ui.hbs"}});

  let LoginUIComponent = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._action, (_class = (_temp = class LoginUIComponent extends _component.default {
    constructor(owner, args) {
      super(owner, args);

      _initializerDefineProperty(this, "store", _descriptor, this);

      _initializerDefineProperty(this, "router", _descriptor2, this);

      _initializerDefineProperty(this, "username", _descriptor3, this);

      _initializerDefineProperty(this, "password", _descriptor4, this);
    }

    logIn() {
      if (this.username && this.password) {
        _jquery.default.post(`${_environment.default.APP.API_ENDPOINT}/auth/login`, {
          username: this.username,
          password: this.password
        }, result => {
          if (result && result.isLoggedIn) {
            this.router.transitionTo('/');
          }
        });
      }
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
=======
    
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
>>>>>>> Yeting--Navbar and Router added
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
<<<<<<< HEAD
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "username", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "password", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "logIn", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "logIn"), _class.prototype)), _class));
  _exports.default = LoginUIComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, LoginUIComponent);
});
;define("client/components/main-application", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div>
      <Navbar
          @changePage={{this.navigateTo}}
      />
      <button onclick={{this.logOut}}>LogOut</button>
  
  </div>
  
  
  {{#if this.isProfilePage}}
      <ProfilePage
          @model={{@model}}
      />
  {{/if}}
  */
  {"id":"yVX7ZCF2","block":"{\"symbols\":[\"@model\"],\"statements\":[[10,\"div\"],[12],[2,\"\\n    \"],[8,\"navbar\",[],[[\"@changePage\"],[[32,0,[\"navigateTo\"]]]],null],[2,\"\\n    \"],[10,\"button\"],[15,\"onclick\",[32,0,[\"logOut\"]]],[12],[2,\"LogOut\"],[13],[2,\"\\n\\n\"],[13],[2,\"\\n\\n\\n\"],[6,[37,0],[[32,0,[\"isProfilePage\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"profile-page\",[],[[\"@model\"],[[32,1]]],null],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"if\"]}","meta":{"moduleName":"client/components/main-application.hbs"}});

  let MainApplicationComponent = (_dec = Ember._tracked, _dec2 = Ember.inject.service, _dec3 = Ember._action, _dec4 = Ember._action, (_class = (_temp = class MainApplicationComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "activePage", _descriptor, this);

      _initializerDefineProperty(this, "router", _descriptor2, this);
    }

    get isProfilePage() {
      return this.activePage === 'profile';
    }

    navigateTo(page) {
      this.activePage = page;
    }

    logOut() {
      //log out request
      this.router.transitionTo('login');
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "activePage", [_dec], {
=======
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
>>>>>>> Yeting--Navbar and Router added
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
<<<<<<< HEAD
      return 'profile';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec2], {
=======
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
>>>>>>> Yeting--Navbar and Router added
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
<<<<<<< HEAD
  }), _applyDecoratedDescriptor(_class.prototype, "navigateTo", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "navigateTo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "logOut", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "logOut"), _class.prototype)), _class));
  _exports.default = MainApplicationComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, MainApplicationComponent);
});
;define("client/components/navbar", ["exports", "@glimmer/component", "jquery", "client/config/environment"], function (_exports, _component, _jquery, _environment) {
=======
  })), _class));
  _exports.default = IndividualBetComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, IndividualBetComponent);
});
;define("client/components/navbar", ["exports", "@glimmer/component"], function (_exports, _component) {
>>>>>>> Yeting--Navbar and Router added
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

<<<<<<< HEAD
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _temp;
=======
  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _temp;
>>>>>>> Yeting--Navbar and Router added

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
<<<<<<< HEAD
      <button class="btnSignOut" onclick={{logOut}}>Sign out</button> <!-- Sign out button links to Profile Page-->
  </nav>
  */
  {"id":"NoVs/OHB","block":"{\"symbols\":[],\"statements\":[[10,\"nav\"],[14,0,\"topnav\"],[12],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnHeader\"],[15,\"onclick\",[34,0]],[12],[2,\"Bet 511\"],[13],[2,\" \"],[3,\" Header button links to Active Bets Page\"],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnHome\"],[15,\"onclick\",[34,0]],[12],[2,\"Home\"],[13],[2,\" \"],[3,\" Home button links to Active Bets Page\"],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnProfile\"],[15,\"onclick\",[34,1]],[12],[2,\"Profile\"],[13],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnCreateBet\"],[15,\"onclick\",[34,2]],[12],[2,\"Create Bet\"],[13],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnSignUp\"],[15,\"onclick\",[34,3]],[12],[2,\"Sign Up\"],[13],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnSignOut\"],[15,\"onclick\",[34,4]],[12],[2,\"Sign out\"],[13],[2,\" \"],[3,\" Sign out button links to Profile Page\"],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"redirectToActiveBetsPage\",\"redirectToProfilePage\",\"redirectToCreateBetPage\",\"redirectToSignUpPage\",\"logOut\"]}","meta":{"moduleName":"client/components/navbar.hbs"}});

  const FAKE_COOKIES = 123123123;
  let NavbarComponent = (_dec = Ember.inject.service, _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, _dec5 = Ember._action, _dec6 = Ember._action, (_class = (_temp = class NavbarComponent extends _component.default {
=======
      <button class="btnSignOut" onclick={{redirectToProfilePage}}>Sign out</button> <!-- Sign out button links to Profile Page-->
  </nav>
  */
  {"id":"J4YFQ4d4","block":"{\"symbols\":[],\"statements\":[[10,\"nav\"],[14,0,\"topnav\"],[12],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnHeader\"],[15,\"onclick\",[34,0]],[12],[2,\"Bet 511\"],[13],[2,\" \"],[3,\" Header button links to Active Bets Page\"],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnHome\"],[15,\"onclick\",[34,0]],[12],[2,\"Home\"],[13],[2,\" \"],[3,\" Home button links to Active Bets Page\"],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnProfile\"],[15,\"onclick\",[34,1]],[12],[2,\"Profile\"],[13],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnCreateBet\"],[15,\"onclick\",[34,2]],[12],[2,\"Create Bet\"],[13],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnSignUp\"],[15,\"onclick\",[34,3]],[12],[2,\"Sign Up\"],[13],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btnSignOut\"],[15,\"onclick\",[34,1]],[12],[2,\"Sign out\"],[13],[2,\" \"],[3,\" Sign out button links to Profile Page\"],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"redirectToActiveBetsPage\",\"redirectToProfilePage\",\"redirectToCreateBetPage\",\"redirectToSignUpPage\"]}","meta":{"moduleName":"client/components/navbar.hbs"}});

  let NavbarComponent = (_dec = Ember.inject.service, _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, _dec5 = Ember._action, (_class = (_temp = class NavbarComponent extends _component.default {
>>>>>>> Yeting--Navbar and Router added
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    // @action
    // redirectToSignInPage(){
    //     //this.router.transitionTo('/');
    // }
<<<<<<< HEAD
    redirectToSignUpPage() {
      this.args.changePage('signup'); //this.router.transitionTo('signup');
    }

    redirectToProfilePage() {
      this.args.changePage('profile'); // this.router.transitionTo('home');
    }

    redirectToActiveBetsPage() {
      this.args.changePage('activebets'); //Active Bets Page is the Home Page
      //this.router.transitionTo('home');
    }

    redirectToCreateBetPage() {
      this.args.changePage('createbet'); //this.router.transitionTo('createbet');
    }

    logOut() {
      _jquery.default.post(`${_environment.default.APP.API_ENDPOINT}/auth/logout`, {
        cookie: FAKE_COOKIES
      }).done(didLogOut => {
        debugger;

        if (didLogOut) {
          this.router.transitionTo('login');
        }
      });
=======
    redirectToSignUpPage() {//this.router.transitionTo('signup');
    }

    redirectToProfilePage() {//this.router.transitionTo('profile');
    }

    redirectToActiveBetsPage() {//Active Bets Page is the Home Page
      //this.router.transitionTo('home');
    }

    redirectToCreateBetPage() {//this.router.transitionTo('createbet');
>>>>>>> Yeting--Navbar and Router added
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
<<<<<<< HEAD
  }), _applyDecoratedDescriptor(_class.prototype, "redirectToSignUpPage", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "redirectToSignUpPage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "redirectToProfilePage", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "redirectToProfilePage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "redirectToActiveBetsPage", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "redirectToActiveBetsPage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "redirectToCreateBetPage", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "redirectToCreateBetPage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "logOut", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "logOut"), _class.prototype)), _class));
=======
  }), _applyDecoratedDescriptor(_class.prototype, "redirectToSignUpPage", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "redirectToSignUpPage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "redirectToProfilePage", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "redirectToProfilePage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "redirectToActiveBetsPage", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "redirectToActiveBetsPage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "redirectToCreateBetPage", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "redirectToCreateBetPage"), _class.prototype)), _class));
>>>>>>> Yeting--Navbar and Router added
  _exports.default = NavbarComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, NavbarComponent);
});
<<<<<<< HEAD
;define("client/components/profile-page", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div style="border: 1px solid red;">
      <p>{{@model.username}}'s Profile Page</p>
      <p>Your are {{@model.age}} years old</p>
  </div>
  
  <div>
      <FriendsList/>
  </div>
  
  <div>
      <AddFriend/>
  </div>
  
  */
  {"id":"lhGQqVD6","block":"{\"symbols\":[\"@model\"],\"statements\":[[10,\"div\"],[14,5,\"border: 1px solid red;\"],[12],[2,\"\\n    \"],[10,\"p\"],[12],[1,[32,1,[\"username\"]]],[2,\"'s Profile Page\"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Your are \"],[1,[32,1,[\"age\"]]],[2,\" years old\"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"div\"],[12],[2,\"\\n    \"],[8,\"friends-list\",[],[[],[]],null],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"div\"],[12],[2,\"\\n    \"],[8,\"add-friend\",[],[[],[]],null],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}","meta":{"moduleName":"client/components/profile-page.hbs"}});

  class ProfilePageComponent extends _component.default {}

  _exports.default = ProfilePageComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ProfilePageComponent);
});
=======
>>>>>>> Yeting--Navbar and Router added
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
<<<<<<< HEAD
    this.route('login');
    this.route('home');
=======
    this.route('login', {
      path: '/'
    });
    this.route('home'); // this.route('signup');
    // this.route('profile');
    // this.route('activebets');
    // this.route('createbet');
>>>>>>> Yeting--Navbar and Router added
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
<<<<<<< HEAD
;define("client/routes/index", ["exports", "jquery", "client/config/environment"], function (_exports, _jquery, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const FAKE_COOKIES = 123123123;

  class IndexRoute extends Ember.Route {
    model() {
      return _jquery.default.get(`${_environment.default.APP.API_ENDPOINT}/auth/isloggedin?cookie=${FAKE_COOKIES}`);
    }

    afterModel(model, transition) {
      if (!model) {
        // if there model is empty, take us to log in route
        this.transitionTo('login');
      }
    }

  }

  _exports.default = IndexRoute;
});
;define("client/routes/login", ["exports", "jquery", "client/config/environment"], function (_exports, _jquery, _environment) {
=======
;define("client/routes/login", ["exports"], function (_exports) {
>>>>>>> Yeting--Navbar and Router added
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
<<<<<<< HEAD
  const FAKE_COOKIES = 123123123;

  class LoginRoute extends Ember.Route {
    model() {
      return _jquery.default.get(`${_environment.default.APP.API_ENDPOINT}/auth/isloggedin?cookie=${FAKE_COOKIES}`);
    }

    afterModel(model, transition) {
      debugger;

      if (model && model.isLoggedin) {
        // if there model is empty, take us to log in route
        this.transitionTo('/');
      }
    }

  }
=======

  class LoginRoute extends Ember.Route {}
>>>>>>> Yeting--Navbar and Router added

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
<<<<<<< HEAD
;define("client/serializers/application", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationSerializer extends _jsonApi.default {}

  _exports.default = ApplicationSerializer;
});
;define("client/serializers/index", ["exports", "ember-data"], function (_exports, _emberData) {
=======
;define("client/serializers/application", ["exports", "ember-data"], function (_exports, _emberData) {
>>>>>>> Yeting--Navbar and Router added
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
<<<<<<< HEAD
    "id": "d/Lx0B2v",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,5,\"border: 1px solid green;\"],[12],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"Bett Ya!\"],[13],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
=======
    "id": "p7EppQEa",
    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n\"],[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
>>>>>>> Yeting--Navbar and Router added
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
<<<<<<< HEAD
;define("client/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "EqeI2V/P",
    "block": "{\"symbols\":[\"@model\"],\"statements\":[[10,\"div\"],[14,5,\"border: 1px solid purple;\"],[12],[2,\"\\n\"],[10,\"p\"],[12],[2,\"WELCOME TO OUR PAGE\"],[13],[2,\"\\n    LOG OUT BUTTON\\n    \"],[10,\"p\"],[12],[2,\"Welcome \"],[1,[32,1,[\"username\"]]],[13],[2,\"\\n    \"],[8,\"main-application\",[],[[\"@model\"],[[34,0]]],null],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"model\"]}",
    "meta": {
      "moduleName": "client/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
=======
>>>>>>> Yeting--Navbar and Router added
;define("client/templates/login", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
<<<<<<< HEAD
    "id": "XQI7hWbp",
    "block": "{\"symbols\":[],\"statements\":[[10,\"h1\"],[12],[2,\"Login Component\"],[13],[2,\"\\n\"],[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\"],[8,\"login-ui\",[],[[],[]],null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
=======
    "id": "9dL65Wmh",
    "block": "{\"symbols\":[],\"statements\":[[10,\"h1\"],[12],[2,\"Login Component\"],[13]],\"hasEval\":false,\"upvars\":[]}",
>>>>>>> Yeting--Navbar and Router added
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
<<<<<<< HEAD
            require("client/app")["default"].create({"API_ENDPOINT":"http://localhost:4500","name":"client","version":"0.0.0+af4879d6"});
=======
            require("client/app")["default"].create({"API_ENDPOINT":"http://localhost:4500","name":"client","version":"0.0.0+dde3bbc9"});
>>>>>>> Yeting--Navbar and Router added
          }
        
//# sourceMappingURL=client.map
