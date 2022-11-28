export default class UserInfo {
  constructor(nameSelector, statusSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._statusElement = document.querySelector(statusSelector); 
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      status: this._statusElement.textContent,
    }
  }

  setUserInfo(name, status) {
    this._nameElement.textContent = name;
    this._statusElement.textContent = status;
  }
}