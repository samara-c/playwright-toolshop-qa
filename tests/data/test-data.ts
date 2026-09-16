import { Product, UserCredentials, SearchOptions } from "./types";

const product:Product = {

    id: 1,
    name: "hammer",
    price: 5
}

const userCredentials:UserCredentials ={

    email: "user1@gmail.com",
    password: "123"
}

const searchOptions:SearchOptions = {

    term : "produto"
}

export {product, userCredentials, searchOptions}
