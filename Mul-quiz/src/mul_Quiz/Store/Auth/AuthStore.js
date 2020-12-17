import { observable, computed, action } from "mobx";

export default class AuthStore {
    constructor(root){
        this.root = root;
    }

    //login
    @observable login = false;
    @observable user = "test";
    @observable passwd = "123";
    @observable error = "";
    @observable idValue = "";
    @observable pwValue = "";
    @observable preventDefault = "";

    @computed
    get getlogin() {
      return this.login ? this.login : false;
    }

    //로그인
    @action
    changeId(value) {
        this.idValue = value;
    }
    @action
    changePw(value) {
        this.pwValue = value;
    }

}