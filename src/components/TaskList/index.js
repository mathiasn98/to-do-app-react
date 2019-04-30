import React, { Component } from 'react';

class TaskList extends Component {
    constructor(props){
        super(props);
    };
    render(){
        let daftarKegiatan = ["abc","def","hij"];
        let listSekolahTable = daftarKegiatan.map((infoSekolah) =>
            <div>
                <div class="card bg-light text-dark">
                        <div class="card-body">{infoSekolah}</div>
                </div>
            </div>
        );

        return(
            <div className="task-list-div center">
                {listSekolahTable}
            </div>
        );
    }

}

export default TaskList;