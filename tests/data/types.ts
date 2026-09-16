type Product = {
    id: number;
    name: string;
    price: number;

};

type UserCredentials = {
    email : string;
    password: string;

}

type SearchOptions = { 
    term : string;

}

export {Product, UserCredentials, SearchOptions}