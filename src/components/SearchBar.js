import React from 'react';
import {Paper, TextField} from '@material-ui/core';
 class SearchBar extends React.Component{
     state={
         searchTerm:'',
     }
     handleSubmit=(event)=>{
         const {onFormSubmit} =this.props;
         onFormSubmit(this.state.searchTerm);
         event.preventDefault();
     }
     handleChange=(event)=>{
         this.setState({
            searchTerm:event.target.value
         });
     }
     render(){
         return(
             <Paper elevation={6} style={{padding:"25px"}}>
             <form onSubmit={this.handleSubmit}>
                 <TextField fullWidth label="Search...." onChange={this.handleChange}></TextField>
             </form>
             </Paper>
         );
     }
 }
 export default SearchBar;