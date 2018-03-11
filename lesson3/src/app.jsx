import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './app/components/KanbanBoard';

let cardList = [
    {
        id: 1,
        title: 'Прочитать книгу по ReactJS',
        description: 'Прочитать книгу по ReactJS v.14+',
        status: 'in-progress',
        tasks: []
    },
    {
        id: 2,
        title: 'Написать приложение на ReactJS',
        description: 'Kanban Board',
        status: 'todo',
        tasks: [
            {
                id: 1,
                name: 'Изучить базу синтаксиса ReactJs',
                done: true
            },
            {
                id: 1,
                name: 'Написать каркас приложения',
                done: false
            },
            {
                id: 1,
                name: 'Доработать приложение',
                done: false
            }
        ]
    }
];


const app = document.getElementById('app');

ReactDOM.render(
   <KanbanBoard cards={cardList}/>,
app);