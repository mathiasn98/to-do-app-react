import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
    };
    render(){
        
        return(
            <div className="search-bar-div center">
                <div className="form-group">
                    <label for="activity">Kegiatan Baru</label>
                    <textarea class="form-control" id="inputActivity" rows="3"></textarea>
                </div>
            </div>
        );
    }

}

export default SearchBar;