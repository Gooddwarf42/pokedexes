// Ideally I'll put here a way to access to the data I want to display.
// For now I do it in a stupid way.
// Ideally in the future I may want to do it... better? idk
// I wonder if one can avoid a class

import { MockData } from "../Types/mockData";

export class DataService {
    public static data : MockData[] = [
        {
            number : 4,
            name : 'gigi pethot',
            address : {
                city: 'Garganello',
                road: 'via dei fanciulli',
                number: 4
            }
        },
        {
            number : 6,
            name : 'andrew ronk',
            address : {
                city: 'Varnese',
                road: 'via dal progetto',
                number: 44
            }
        }
    ]

}