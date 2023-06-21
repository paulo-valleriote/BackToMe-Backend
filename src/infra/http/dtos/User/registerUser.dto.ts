export interface RegisterUserDTO {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
  address?: {
    cep: string;
    complement: string;
  };
}
