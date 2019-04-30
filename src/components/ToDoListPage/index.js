import React, { Component } from 'react';
import TaskList from '../TaskList';
import SearchBar from '../SearchBar';

class ToDoListPage extends Component {
    constructor(props){
        super(props);
    };
    render(){
        
        return(
            <div className="page-div">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">To Do List</h1>
                        <p class="lead">Catat kegiatanmu!</p>
                    </div>
                </div>
                <SearchBar></SearchBar>
                <TaskList></TaskList>
            </div>

        );
    }

}

export default ToDoListPage;