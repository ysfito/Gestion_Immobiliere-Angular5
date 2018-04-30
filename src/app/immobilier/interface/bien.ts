export interface Bien {

    id: number;
    nom_bien: string;
    etat: number;
    description: string;
    prix_location: number;
    parentbien_id: number;
    typebien: any;
    localite: any;
    images: Blob;

}
