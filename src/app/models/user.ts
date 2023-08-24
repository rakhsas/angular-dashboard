import { profile } from "./profile";
import { departement } from "./departement";
export interface User {
    id: string;
    prenomUser: string;
    actif: boolean;
    nomUser: string;
    login: string;
    motPasse: string;
    co_NO: string;
    toutDocument: boolean;
    updatePassword: boolean;
    profil: profile;
    assignedCaisses: { caisseId: number }[];
    departement: departement;
}
