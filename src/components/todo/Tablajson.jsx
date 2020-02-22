import React, { Component } from 'react';
//import ReactTable from "react-table";
//import "react-table/react-table.css"
//import ExportToExcel from ""

//import "react-table/react-table.css";

import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

class tablajson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : []
        }
    }


    
componentDidMount(){
    const url = "http://jsonplaceholder.typicode.com/posts";
    fetch(url,{
        method : "GET"
    }).then(response  => response.json()).then(posts =>{
   // console.log(posts)
        this.setState({
            posts : posts
        })



    })
}
deleteRow(id){
   // console.log("id",id)
const index = this.state.posts.findIndex(post =>{
    return post.id === id
}
)
console.log("index",index)

}


    render() {
        const columns =[
            {
             Header:"User ID",
             accessor:"userId",
             style : {
                 textAling : "right"
             },
             width:100,
             maxWidth:100,
             minWidth:100
        },
    
        {
            Header:"ID",
            accessor:"id",
            style : {
                textAling : "right"
            },
            width:100,
            maxWidth:100,
            minWidth:100
       },
       {
        Header:"Title",
        accessor:"title",
        sortable : false,
        filterable : true
   },


   {
    Header:"Content",
    accessor:"body",
    sortable : false,
    filterable : true

},{
    Header: "Actions",
    Cell: props =>{
        return(
            <button  style={{backgroundColor : "red" , color : "#fefefe"}}
            onClick={()=>{
               //console.log("props es ",props)

               this.deleteRow(props.original.id);
            }}
            
            >Delete</button>
        )
    },
    sortable : false,
    filterable : false,
    width:100,
            maxWidth:100,
            minWidth:100
}
    
    ]
        return (
            <div>
           
                <ReactTable 
                columns={columns}
                data={this.state.posts}
                filterable
                defaultPageSize={5}
                noDataText={ "please wait....." }
               // showPagination={false}
                >


                </ReactTable>
            </div>
        );
    }
}

export default tablajson;