export default class Funcionamento {
  constructor(functionamento, activeClass) {
    this.funcionamento = document.querySelector(functionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
    this.break = this.funcionamento.dataset.break.split(',').map(Number);
    this.weekend = this.funcionamento.dataset.weekend.split(',').map(Number);
    this.breakWeekend = this.funcionamento.dataset.breakweekend.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    if (this.diaAgora === this.diasSemana[6]) {
      const horarioAberto = (this.horarioAgora >= this.weekend[0]
      && this.horarioAgora < this.weekend[1]
      && this.horarioAgora < this.breakWeekend[0]
      || this.horarioAgora >= this.breakWeekend[1]);
      return horarioAberto;
    } else if (this.diaAgora === this.diasSemana[0]) {
      const horarioAberto = (this.horarioAgora >= this.weekend[0]
      && this.horarioAgora < this.weekend[1]
      && this.horarioAgora < this.breakWeekend[0]);
      return horarioAberto;
    } else {
      const horarioAberto = (this.horarioAgora >= this.horarioSemana[0]
      && this.horarioAgora < this.horarioSemana[1]
      && this.horarioAgora < this.break[0]
      || this.horarioAgora >= this.break[1]);
      return horarioAberto;
    }
    console.log(this.diasSemana[0]);
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
      this.funcionamento.innerHTML = 'open';
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}