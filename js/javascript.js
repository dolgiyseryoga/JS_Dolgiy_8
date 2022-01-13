
 function on() {
    console.log('Лампочка выключена'); 
 }
elem2.addEventListener("click", off); 

function off() {

  let Calc = function cal() { // калькулятор электроэнергии
    this.get = function() {
      this.a = prompt('Введите мощность лампочки, Ватт '); //мощность лампочки
      this.b = prompt('Введите стоимость электроэнергии, руб. за 1 кв/ч \n На 01.01.2022 составляет = 0,1778 руб.'); //стоимость электроинергии кв. /ч
      this.t = prompt('Введите время работы лампочки, в часах '); // лампочки
      this.operation();
  };
    this.operation = function() {
      this.d = (this.a/1000); // перевод ватт в кв/ч 
console.log(this.d);
      this.e =  (this.d*this.b); // расход кв за время работы
console.log(this.e);
      this.result = (this.t*this.e); //
console.log(this.result);
  this.show();
    };
    this.show=function() {
  alert(('Ваш расход электроэнергии за введенное время работы составляет:    ')+(this.result)+ 'бел.р.');
  };
  };
  let calc = new Calc();
  calc.get();
  
  function Econom() {      // Экономте свет
    alert('Да выключите свет. Берегите электроэнергию!');
  }
  setTimeout(Econom, 2500);
//////////////////////////////
    console.log('Лампочка включена');
  }
elem.addEventListener("click", on); 
      





/*
Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
счетчик горения лампочки.
*/
// alert(('Ваш расход электроэнергии за введенное время работы составляет:    ')+(((parseInt(this.result/60) * 100)) / 100)+ 'бел.р.');//