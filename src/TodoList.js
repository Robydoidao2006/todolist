import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css'

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        if(this._inputElement.value !== ""){
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value = '';
        // console.log(this.state.items);

        e.preventDefault();

    }

    deleteItem(key){
        let filterItems = this.state.items.filter(function (item){
            return(item.key !== key)
        });

        this.setState({
            items: filterItems
        })
    }

    render(){
        return(
            <div className="todoListMain">
                <did className="header">
                    <form onSubmit={this.addItem}>
                        <input  ref={(a) => this._inputElement = a}
                        placeholder="enter task">                           
                        </input>
                        <button type="submit">add</button>
                    </form>
                    <TodoItems entries={this.state.items} 
                        delete={this.deleteItem}/>
                </did>
            </div>
        );
    }
}
 
export default TodoList;