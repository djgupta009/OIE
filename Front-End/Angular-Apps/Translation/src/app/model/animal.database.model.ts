export class AnimalDatabaseModel {
    animal_id: string
    name: string
    gender: string
    type: string
    species: string
    country: string
    weigth: number
    about: string
    healthCondition: string
    disease: string
    allergic: string

    constructor(x: Object){
        Object.assign(this , x);
    }

}