export interface RegisterUserDTO {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
  photo?: string;
  age?:string;
  address?: {
    cep: string;
    complement?: string;
    number?:string;
  };
}
