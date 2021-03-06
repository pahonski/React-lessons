import React from 'react';
import CheckList from './KanbanChecklist';

class KanbanCard extends React.Component
{
    constructor() {
        super(...arguments);
        console.log('KanbanCard:constructor')

        this.state = {
            showDetails: false
        }
    }


    //Component Mount
    // getDefaultProps() {
    //     console.log('KanbanCard:getDefaultProps')
    // }
    //
    // getInitialState() {
    //     console.log('KanbanCard:getInitialState')
    // }
    //
    // componentWillMount() {
    //     console.log('KanbanCard:componentWillMount')
    // }
    //
    componentDidMount() {
        console.log('KanbanCard:componentDidMount')
        //setState - изменение состояния
        // this.setState({
        //     showDetails: true
        // });
    }

    //setState
    shouldComponentUpdate() {
        console.log('KanbanCard: shouldComponentUpdate');
        return true; //Если метод не возвращает TRUE  -  цепочка вызовов дальше не идет
                     //Следовательно, render вызван не будет
    }

    componentWillUpdate() {
        console.log('KanbanCard: componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('KanbanCard: componentDidUpdate');
    }

    render() {
        console.log('KanbanCard:componentRender');

        let cardDetails;

        if (this.state.showDetails) {
            cardDetails = (
            <div className="card__details">
                {this.props.description}
                <CheckList cardId={this.props.id} tasks={this.props.tasks} />
            </div>
            );
        }

        return <div className="card">
            <div className="card__title" onClick={() => {
                this.setState({
                    showDetails: !this.state.showDetails
                });
            }}>
                {this.props.title}
            </div>
            {cardDetails}
        </div>
    }
}

export default KanbanCard;