export class Reservation {
    nom:string;
    prenom:string;
    email:string;
    message: string;
    creation : Date;

    constructor(
        nom:string,
        prenom:string,
        email:string,
        message:string,
        creation: Date,
    ){
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.message = message;
        this.creation = creation;

    }
}
