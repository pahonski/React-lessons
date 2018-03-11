import React from 'react';

class KanbanChecklist extends React.Component
{
    render() {
        let tasks = this.props.tasks.map((task, index) => {
            return (
                <li className="checklist__task">
                    <input type="checkbox" defaultChecked={task.done}/>
                    {task.name}
                    <a href="#" className="checklist__task--remove" />
                </li>
            )
        });

        return <div className="checklist">
            <ul>{tasks}</ul>
        </div>
    }
}

export default KanbanChecklist;