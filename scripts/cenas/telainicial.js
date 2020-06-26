class TelaInicial {
  constructor() {

  }
  
  draw() {
    this._imagemDeFundo();
    this._textoDeFundo();
    this._botao();
  }
  
  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _textoDeFundo() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
    text('As aventuras de', width / 2, height / 3);
    textSize(150);
    text('Hipsta', width / 2, height / 5 * 3);
  }

  _botao() {
    gerenciador.y = height / 7 * 5;
    gerenciador.draw();
  }
}
