interface AddressProps {
    cep: string;
    complement: string;
}
export declare class Address {
    props: AddressProps;
    constructor(props: AddressProps);
    private handle;
    private isValid;
}
export {};
