export default class UserInfo {
  constructor(nameSelector, statusSelector, avatarSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._statusElement = document.querySelector(statusSelector); 
    this._avatarElement = document.querySelector(avatarSelector);
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

  setUserAvatar(link) {
    this._avatarElement.src = link;
  }
}