import React,{Component} from "react";
import axios from 'axios';
class File extends Component{
    state={
        file:null
    }
    handleFile(e){
        let file=e.target.files[0]
        this.setState({file:file})
    }
    handleUpload(e){
       let file=this.state.file
       let formdata=new FormData()
       formdata.append('file',file)
        axios({
            url:'http://localhost:8080/api/csv/upload',
            method:'POST',
            headers:{
                authorization:'token'
            },
            data:formdata
        }).then((res)=>{
alert("file upload successfully");
        })
        .catch(error => {
            console.log('Something went wrong', error);
          }) 
    }
    render(){
        return(
            <div className="file">
                <h1>The Form</h1>
                <form>
                    <div className="">
                        <label>Select File</label>
                        <input type="file" name="file" onChange={(e)=>this.handleFile(e)}/>
                    
                    </div>
                    <button type="button" onClick={(e)=>this.handleUpload(e)}>upload</button>
                </form>
            </div>
        );
        }
}
export default File;