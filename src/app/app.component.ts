import { Component } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Endereco } from 'src/models/endereco.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  correios: Array<any> = [];

  listaJson = {
    "erro": false,
    "mensagem": "DADOS ENCONTRADOS COM SUCESSO.",
    "total": 1,
    "dados": [
      {
        "uf": "SP",
        "localidade": "S\u00e3o Paulo",
        "locNoSem": "",
        "locNu": "",
        "localidadeSubordinada": "",
        "logradouroDNEC": "Rua Planta da Sorte",
        "logradouroTextoAdicional": "",
        "logradouroTexto": "",
        "bairro": "Vila Verde",
        "baiNu": "",
        "nomeUnidade": "",
        "cep": "08235010",
        "tipoCep": "2",
        "numeroLocalidade": "",
        "situacao": "",
        "faixasCaixaPostal": [Endereco],
        "faixasCep": [Endereco]
      }
    ]
  }

  ngOnInit() {
    this.returnarCorreios();
  }

  returnarCorreios() {
    this.correios = this.listaJson.dados;
  }


  title = 'aula3';
}
