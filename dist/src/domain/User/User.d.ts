interface UserCreationProps {
    name: string;
    email: string;
    cpf: string;
    phone: string;
    password: string;
}
interface UserProps extends UserCreationProps {
    address?: {
        cep: string;
        complement: string;
    };
}
export declare class User {
    props: UserProps;
    private address?;
    constructor(props: UserProps);
    private handle;
    private isValid;
}
export {};
