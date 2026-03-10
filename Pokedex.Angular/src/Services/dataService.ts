// Ideally I'll put here a way to access to the data I want to display.
// For now I do it in a stupid way.
// Ideally in the future I may want to do it... better? idk
// I wonder if one can avoid a class

import {  createAddress, MockData } from "../Types/mockData";

export class DataService {
    public static data : MockData[] = [
        {
            number : 4,
            name : 'gigi pethot',
            address: createAddress('Via dei fanciulli', 4, 'Garganello')
        },
        {
            number : 6,
            name : 'andrew ronk',
            address: createAddress('Via dal Progetto', 44, 'Varnese')
        }
    ]

}