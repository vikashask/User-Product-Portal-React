import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from "../../components/layout/Header";
import {loadAllData,loadAllQuestion} from "./../../actions/dataAction"
import ReactTable from "react-table";
import "react-table/react-table.css";

class ManageQuestion extends Component {
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
        this.props.loadAllQuestion();
    }

    allQuestion = (event) =>{
        event.preventDefault();
        // console.log("------",this.props.allQuestion.questionList);
        this.props.history.push('/add-question');
    }

    render(){
        console.log('this.props',this.props);
        
        let questionList;
        if(this.props.allQuestion){
            questionList = this.props.allQuestion;
        }
          const columns = [
            {
                Header: 'Question type',
                accessor: 'q_type',
                headerClassName:'text-left'
            },
            {
                Header: 'Question Level',
                accessor: 'q_level',
                headerClassName:'text-left'
            },
            {
                Header: 'Subject',
                accessor: 'subject',
                headerClassName:'text-left'
            },
            {
                Header: 'Question',
                accessor: 'question',
                headerClassName:'text-left'
            },
            {
                Header: 'Answer',
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
                                this.props.history.push(`/view-question`,{
                                _id:questionList[row.index]._id,
                                question:questionList[row.index].question,
                                q_type:questionList[row.index].q_type,
                                q_level:questionList[row.index].q_level,
                                a:questionList[row.index].a,
                                b:questionList[row.index].b,
                                c:questionList[row.index].c,
                                d:questionList[row.index].d,
                                e:questionList[row.index].e,
                                subject:questionList[row.index].subject,
                                answer:questionList[row.index].answer
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
                                this.props.history.push(`/edit-question`,{
                                    _id:questionList[row.index]._id,
                                    question:questionList[row.index].question,
                                    q_type:questionList[row.index].q_type,
                                    q_level:questionList[row.index].q_level,
                                    a:questionList[row.index].a,
                                    b:questionList[row.index].b,
                                    c:questionList[row.index].c,
                                    d:questionList[row.index].d,
                                    e:questionList[row.index].e,
                                    subject:questionList[row.index].subject,
                                    answer:questionList[row.index].answer
                            })
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
                                this.props.deletequestion({questionId:questionList[row.index]._id,index:row.index});
                                // this.props.loadAllquestion();
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
              <h2 className="sub-header">question List<br></br>
              <button onClick={this.allQuestion} className="btn btn-primary" type="submit">Add question</button>
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
        allQuestion: state.allQuestion.allQuestion,
        isAuthenticate:state.isAuthenticate
	}	
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loadAllData,
    loadAllQuestion,
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ManageQuestion);