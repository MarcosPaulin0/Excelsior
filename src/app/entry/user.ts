export class User {

  nickname!: string
  fistName!: string;
  lastName!: string;
  email!: string;
  contact!: string;
  password!: string;
  cardNumber!: string;


  constructor(nickname: string,  firstName: string, laststName: string, email: string,
    contact: string, password: string) {
    this.nickname = nickname;
    this.fistName = firstName;
    this.lastName = laststName;
    this.contact = contact;
    this.password = password;
  }

}
