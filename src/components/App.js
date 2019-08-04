import React from 'react';
import InputBar from "./InputBar";
import RenderList from "./RenderList";
import "./css/App.css"

class App extends React.Component {

    state = {
        list: []
    };

    //Function : For Updating the state with list.
    setList(term) {
        //Create item with unique id.
        const newItem = {
            id: 1 + Math.random(),
            value: term.slice()
        };
        //Destructing old state and adding new Item.
        const list = [...this.state.list, newItem];
        //Update the state with new List.
        this.setState({
            list
        });
    };

    //Function : For Deleting the item.
    deleteItem(id) {
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id !== id);
        this.setState({
            list: updatedList
        });
    };

    //Function : Render Method
    render() {
        return ( 
            <div className="App">
                <InputBar setList={ this.setList.bind(this) }/> 
                <RenderList 
                    lists={ this.state.list }
                    deleteItem = { this.deleteItem.bind(this) }
                /> 
            </div>
        )
    }
}

export default App;