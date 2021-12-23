"use strict";

module.exports = class User {
  #email;
  #password;

  constructor(email, password) {
    this.#email = email;
    this.#password = password;
  }

  get email() {
    return this.#email;
  }

  get password() {
    return this.#password;
  }
};
