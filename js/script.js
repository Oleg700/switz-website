//если город не выбран устанавливаем первый в списке
var input = document.querySelector('.input');
if(input.innerHTML){
  var cityName = document.querySelector('.select-options li span');
  input.innerHTML = cityName.innerHTML;
}

var listOptions = document.querySelectorAll('.select-options li');
[].forEach.call(listOptions, function (link) {
  link.addEventListener('click', addCity);
});

//передает название выбранного города в input
function addCity() {
  var input = document.querySelector('.input');
  var span = this.querySelector('span');
  input.innerHTML = span.innerHTML;
}

//добавляет и удаляет видимость при нажатии на input
var select = document.querySelector('.select');
select.addEventListener('click', function(){
  var options =  document.querySelector('.select-options');
  if (options.classList) {
    options.classList.toggle('visible');
  } else {
    var classes = options.className.split(' ');
    var existingIndex = classes.indexOf('visible');

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push('visible');
    options.visible = classes.join(' ');
  }
});

//меняет цвет p и span
var list = document.querySelectorAll('.select-options li');
[].forEach.call(list, function (link) {
  link.addEventListener('mouseover', coloringHandler);
  link.addEventListener('mouseout', decoloringHandler);
});

function coloringHandler() {
 p = this.querySelector('p');
 p.style.color = '#ffffff';
 this.style.color = '#ffffff';
}

function decoloringHandler() {
 p = this.querySelector('p');
 p.style.color = '#e16f6c';
 this.style.color = '#303030';
}

//дублируется код для 2 каруселей, в дальнейшем будет исправлено
//код для 1 карусели
'use strict';
var multiItemSlider = (function () {
  return function (selector, config) {
    var
          _mainElement = document.querySelector(selector), // основный элемент блока
          _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
          _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
          _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
          _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
          _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
          _positionLeftItem = 0, // позиция левого активного элемента
          _transform = 0, // значение транфсофрмации .slider_wrapper
          _step = (_itemWidth + 33)  / _wrapperWidth * 100, // величина шага (для трансформации)
          _items = []; // массив элементов
        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
          _items.push({ item: item, position: index, transform: 0 });
        });

        var position = {
          getMin: 0,
          getMax: _items.length - 1,
        }

        var _transformItem = function (direction) {
          if (direction === 'right') {
            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
              return;
            }
            _positionLeftItem++;
            _transform -= _step;
          }

          if (direction === 'left') {
            if (_positionLeftItem <= position.getMin) {
              return;
            }

            _positionLeftItem--;
            _transform += _step;
          }
          _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
          var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
          e.preventDefault();
          _transformItem(direction);
        };

        var _setUpListeners = function () {
          // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
          _sliderControls.forEach(function (item) {
            item.addEventListener('click', _controlClick);
          });
        }

        // инициализация
        _setUpListeners();

        return {
          right: function () { // метод right
            _transformItem('right');
          },
          left: function () { // метод left
            _transformItem('left');
          }
        }

      }
    }());

var slider = multiItemSlider('.slider');

/*код для 2 карусели*/
var multiItemSliderSecond = (function () {
  return function (selector, config) {
    var
          _mainElement = document.querySelector(selector), // основный элемент блока
          _sliderWrapper = _mainElement.querySelector('.slider__wrapper_second'), // обертка для .slider-item
          _sliderItems = _mainElement.querySelectorAll('.slider__item_second'), // элементы (.slider-item)
          _sliderControls = _mainElement.querySelectorAll('.slider__control_second'), // элементы управления
          _sliderControlLeft = _mainElement.querySelector('.slider__control_left_second'), // кнопка "LEFT"
          _sliderControlRight = _mainElement.querySelector('.slider__control_right_second'), // кнопка "RIGHT"
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
          _positionLeftItem = 0, // позиция левого активного элемента
          _transform = 0, // значение транфсофрмации .slider_wrapper
          _step = (_itemWidth + 33)  / _wrapperWidth * 100, // величина шага (для трансформации)
          _items = []; // массив элементов
        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
          _items.push({ item: item, position: index, transform: 0 });
        });

        var position = {
          getMin: 0,
          getMax: _items.length - 1,
        }

        var _transformItem = function (direction) {
          if (direction === 'right') {
            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
              return;
            }
            _positionLeftItem++;
            _transform -= _step;
          }
          if (direction === 'left') {
            if (_positionLeftItem <= position.getMin) {
              return;
            }
            _positionLeftItem--;
            _transform += _step;
          }
          _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
          var direction = this.classList.contains('slider__control_right_second') ? 'right' : 'left';
          e.preventDefault();
          _transformItem(direction);
        };

        var _setUpListeners = function () {
          // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
          _sliderControls.forEach(function (item) {
            item.addEventListener('click', _controlClick);
          });
        }

        // инициализация
        _setUpListeners();

        return {
          right: function () { // метод right
            _transformItem('right');
          },
          left: function () { // метод left
            _transformItem('left');
          }
        }

      }
    }());
var slider = multiItemSliderSecond('.slider_second');

