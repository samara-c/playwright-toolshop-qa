import { Product, UserCredentials, SearchOptions } from "./types";

const productHammer:Product = {

    id: 1,
    name: "hammer",
    price: 5
}

const productThorHammer:Product = {

    id: 2,
    name: "thor hammer",
    price: 6
}

const userCredentials:UserCredentials ={

    email: "user1@gmail.com",
    password: "123"
}

const searchOptions:SearchOptions = {

    term : "produto"
}

export {productHammer, productThorHammer, userCredentials, searchOptions}
