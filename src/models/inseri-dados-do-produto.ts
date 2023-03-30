import { Localizacao } from "./inseri-local-produto";

export class itens {
    "nome": string;
    "categoria": string;
    "preco": number;
    "marca": string;
    "locais": [Localizacao];
    "ingredientes": [string]
}