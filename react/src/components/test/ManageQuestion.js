import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from "../../components/layout/Header";
import {loadAllData,loadAllProduct, deleteProduct} from "./../../actions/dataAction"
import ReactTable from "react-table";
import "react-table/react-table.css";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            questionList:[],
        }
    }
    // load all data in store
    componentDidMount = () =>{
        if(!localStorage.getItem('token')){
            this.props.history.push('/');
        }
        // this.props.loadAllData({id:12,name:'vikask'});
        // console.log("------",this.props.allQuestion.questionList);
        this.props.loadAllProduct();
    }

    addProduct = (event) =>{
        event.preventDefault();
        // console.log("------",this.props.allQuestion.questionList);
        
        this.props.history.push('/add-product');
    }

    render(){
        console.log('this.props',this.props);
        
        let questionList;
        if(this.props.allQuestion){
            questionList = this.props.allQuestion;
        }
          const columns = [
            {
                Header: 'q_type',
                accessor: 'q_type',
                headerClassName:'text-left'
            },{
                Header: 'question',
                accessor: 'question',
                headerClassName:'text-left'
            },
            {
                Header: 'q_level',
                accessor: 'q_level',
                headerClassName:'text-left'
            },
            {
                Header: 'answer',
                accessor: 'answer',
                headerClassName:'text-left'
            },
            {
                Header: "View",
                id:'view',
                headerClassName:'text-left',
                accessor: str => "view",
                Cell: (row)=> (
                <span style={{cursor:'pointer',color:'blue',textDecoration:'underline'}}
                      onClick={() => {
                              console.log("you can edit");
                                this.props.history.push(`/view-product`,{
                                _id:questionList[row.index]._id,
                                name:questionList[row.index].name,
                                description:questionList[row.index].description,
                                price:questionList[row.index].price
                            })
                        }}>
                          View
                        </span> 
                )},
                {
                Header: "Edit",
                id:'edit',
                headerClassName:'text-left',
                accessor: str => "edit",
                Cell: (row)=> (
                <span style={{cursor:'pointer',color:'blue',textDecoration:'underline'}}
                      onClick={() => {
                        //   let data = this.state.questionList;
                          if(localStorage.getItem('token') === questionList[row.index].created_by){
                              console.log("you can edit");
                                this.props.history.push(`/edit-product`,{
                                _id:questionList[row.index]._id,
                                name:questionList[row.index].name,
                                description:questionList[row.index].description,
                                price:questionList[row.index].price
                            })
                          }else{
                              alert("You are not owner,you haven't permission to edit");
                          }
                        }}>
                          Edit
                        </span> 
                )},
                {
                    Header: "Delete",
                    id:'delete',
                    headerClassName:'text-left',
                    accessor: str => "delete",
                    Cell: (row)=> (
                    <span style={{cursor:'pointer',color:'blue',textDecoration:'underline'}}
                          onClick={() => {
                              console.log("---",questionList[row.index]);
                          if(localStorage.getItem('token') === questionList[row.index].created_by){
                                this.props.deleteProduct({productId:questionList[row.index]._id,index:row.index});
                                this.props.loadAllProduct();
                                }else{
                                    alert("You are not owner,you haven't permission to delete");
                                }
                            }}>
                              Delete
                            </span> 
                    )}
        ];
        return(
            <div className="container">
              <Header/>
              <h2 className="sub-header">product List<br></br>
              <button onClick={this.addProduct} className="btn btn-primary" type="submit">Add product</button>
              </h2>
              <ReactTable
                    data={questionList}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
        allData: state.allData,
        allQuestion: state.allQuestion.allProduct
	}	
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loadAllData,
    loadAllProduct,
    deleteProduct
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);