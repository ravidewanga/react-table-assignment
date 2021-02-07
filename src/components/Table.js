import React,{Component} from "react";

const selectedArr = [];
class Table extends Component{
    state = {add_color:false}

    evenHandle =(event) =>{
        var checkExist = selectedArr.includes(event);
        if(checkExist){
            selectedArr.pop(event);
        }else{
            selectedArr.push(event);
        }
        console.log(selectedArr);
        this.setState({
            add_color:!this.state.add_color
        })
    }
    render(){
        console.log(selectedArr.includes(1));
        return(
            <>
            <table>
                <thead>
                <tr>
                    <th>Select</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                <tr className={selectedArr.includes(1) ? "row_color":null}>
                    <td><input onChange={()=>this.evenHandle(1)} type="checkbox" /></td>
                    <td>Ravi</td>
                    <td>30</td>
                </tr>
                <tr className={selectedArr.includes(2) ? "row_color":null}>
                    <td><input onChange={()=>this.evenHandle(2)} type="checkbox" /></td>
                    <td>Rahul</td>
                    <td>30</td>
                </tr>
                <tr className={selectedArr.includes(3) ? "row_color":null}>
                    <td><input onChange={()=>this.evenHandle(3)} type="checkbox" /></td>
                    <td>Sandeep</td>
                    <td>30</td>
                </tr>
                </tbody>
            </table>
            </>
        )
    }
}
export default Table;