import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AtividadeF2022';
  dadosTotais: Array<any>;

  constructor() {
    this.dadosTotais = [
      { Nome: 'Ana Raio', RU: '123456', Curso: ' Ferramenta de Desenvolvimento ', DN: '10.03.1990' },
      { Nome: 'Xuxa Dias', RU: '4080103', Curso: 'Canto', DN: '18.04.1990' },
      { Nome: 'Sergio Silva', RU: '5030158', Curso: 'Teatro', DN: '15.03.2000' },
      { Nome: 'Angelica Bahia', RU: '6039104', Curso: 'Dança', DN: '10.04.1980' },
      { Nome: 'Eduardo Alencar', RU: '7015224', Curso: 'Piano', DN: '14.04.1990' },



    ];
  }
}






