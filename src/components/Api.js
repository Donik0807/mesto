export default class Api {
  constructor(options) {
    this._options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUser() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: {
        authorization: this._options.headers.authorization
      }
    }).then(res => {
      return this._checkResponse(res);
    })
  }

  editUser(userData) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: this._options.headers.authorization
      }, 
      body: JSON.stringify({
        name: userData.name,
        about: userData.about
      })
    })
    .then(res => {
      return this._checkResponse(res);
    })
  }

  getInitialCards() {
    return fetch(`${this._options.baseUrl}/cards`, {
      headers: {
        authorization: this._options.headers.authorization
      }
    })
    .then(res => {
      return this._checkResponse(res);
    })
  }

  postCard(card) {
    return fetch(`${this._options.baseUrl}/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: this._options.headers.authorization
      },
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    }).then(res => {
      return this._checkResponse(res);
    })
  }
  
  deleteCard(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._options.headers.authorization
      }
    });
  }

  likeCard(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._options.headers.authorization
      }
    }).then(res => {
      return this._checkResponse(res);
    })
  }

  dislikeCard(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._options.headers.authorization
      }
    }).then(res => {
      return this._checkResponse(res);
    })
  }

  updateProfilePicture(avatar) {
    return fetch(`${this._options.baseUrl}/users/me/avatar`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
        authorization: this._options.headers.authorization
      },
      body: JSON.stringify({avatar: avatar})
    }).then(res => {
      return this._checkResponse(res);
    })
  }
}
