/**
 * Created by Dmitri Avramets on 26.11.2017.
 */
import React, { Component } from 'react';
import Task from './Task';
import './main.css';

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    };

    add = (text) => {
        var arr = this.state.tasks;
        arr.push(text);
        this.setState ({tasks: arr});
    }
    deleteBlock = (i) => {
        var arr = this.state.tasks;
        arr.splice (i, 1);
        this.setState ({tasks: arr});
    };
    updateText = (text, i) => {
        var arr = this.state.tasks;
        arr[i] = text;
        this.setState ({tasks: arr});
    };
    eachTask = (item, i) => {
        return (
            <Task key={i} index={i} update={this.updateText} deleteBlock={this.deleteBlock}>
                {item}
            </Task>
        );
    };
    render() {
        return (
            <div className="field">
                <h1>Список дел</h1>
                <button onClick={this.add.bind(null, 'Новое задание')} className="btn new">Новое задание</button>
                {this.state.tasks.map (this.eachTask)}
            </div>
        );
    }
}

export default Field;
