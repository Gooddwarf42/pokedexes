export interface MockData {
    number : number,
    name : string,
    address : Address
}

interface Address{
    road: string,
    city : string,
    number : number,
    toString(): string
    readonly __brand: "Address"
}

export const createAddress = (
    road: string,
    number: number,
    city: string
): Address => ({
    road,
    number,
    city,
    __brand: "Address",
    toString() { return `${road} ${number}, ${city}`}
})