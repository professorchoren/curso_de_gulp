"use strict";

export default class User {
  #email: string;
  #password: string;

  constructor(email: string, password: string) {
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
