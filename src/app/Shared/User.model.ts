export class User {
  constructor(
    private email: string,
    private id: string,
    public _token: string,
    public _tokenExpirationDate: Date
  ) {}
  getToken() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
