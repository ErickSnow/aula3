import { Endereco } from "./endereco.model";

export class RespostaEndereco {
    erro: boolean;
    mensagem: string;
    total: number;
    dados: Array<Endereco>;
}