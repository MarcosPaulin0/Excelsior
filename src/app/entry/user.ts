export class User {

  nickname!: string
  fistName!: string;
  lastName!: string;
  email!: string;
  contact!: string;
  password!: string;
  cardNumber!: string;
  validity!: string;
  cvv!: string;
  cardholderName!: string;
  cpf!: string;
  cep!: string;
  adress!: string;
  number!: string;
  complement!: string;
  district!: string;
  city!: string;


  constructor(
    nickname: string,  firstName: string, laststName: string, email: string,contact: string, password: string,
    cardNumber: string, validity: string, cvv: string, cardholderName: string, cpf: string,
    cep: string, adress: string, number: string, complement: string, district: string, city: string
    ){
    this.nickname = nickname;
    this.fistName = firstName;
    this.lastName = laststName;
    this.email = email
    this.contact = contact;
    this.password = password;
    this.cardNumber = cardNumber;
    this.validity = validity;
    this.cvv = cvv;
    this.cardholderName = cardholderName;
    this.cpf = cpf;
    this.cep = cep;
    this.adress = adress;
    this.number = number;
    this.complement = complement;
    this.district = district;
    this.city = city;
  }

}
