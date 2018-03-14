import React, {Component} from 'react';

//<h1 class="my">Заголовок</h1>

let ell = <h1 className="">Заголовок</h1>;//JSX
let el2 = React.createElement('h1', {className: 'my'}, 'Заголовок');//ES5 Создание элементов

//<h1 class="my"><b>Полужирный</b></h1>

let el3 = <h1 className="my"><b>Полужирный</b></h1>;