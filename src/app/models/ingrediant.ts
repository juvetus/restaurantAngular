export class Ingrediant {
    libelle: string;
    description : string;
    sauce: string;
    preparation: string;
    type: Array<string>;
    urlPhoto : string;
    price : number;

    constructor(
        libelle:string,
        description : string,
        sauce: string,
        preparation: string,    
        type:Array<string>,
        urlPhoto: string,
        price: number
    ){
        this.libelle = libelle;
        this.description = description;
        this.sauce = sauce;
        this.preparation = preparation;
        this.type = type;
        this.urlPhoto = urlPhoto;
        this.price = price;
    }
}
