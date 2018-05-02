import React,{Component} from 'react';
import  {connect} from 'react-redux';

class BookDetail extends Component{

	render(){
		if(!this.props.book){
			return<div>please select book</div>
		}
		return(
			<div>
              <h4>BookDetail</h4>
			<h2>{this.props.book.title}</h2>
			<h4>{this.props.book.pages}</h4></div>
			);
	}
}


function mapStateToProps(state){
	return {
		book:state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);
