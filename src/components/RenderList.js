import React,{useState} from "react";
import "./css/RenderList.css";

class RenderList extends React.Component {

	/**edited 
	 * converted functional component to class based component
	 * fixed bug of getting sticks on all elements
	 * created a checkbox class which stricks its text
	 * checkbox class toggle on checkboxchange
	*/

	constructor(props) {
		super(props);
	}
	/*added */
	onCheck = (e) => {
		if(e.target.className === '') {
			e.target.className = 'checkbox';
		} else {
			e.target.className = '';
		}
	}

	state = {isChecked: false};

	//const [ isChecked ,setisChecked ] = useState(false);
	//const [ addStrike ,setaddStrike ] = useState("");

	//Function : For adding and remove Strike
	//const checkStrike = () => {

	//Function : Passing the list id for removing the item
	passDeleteID = (id) => {
		this.props.deleteItem(id)
	}

	
	render() {

		return (
			<div className="list">
				<ul>
					{this.props.lists.map( item => {
						return(
							<li key={item.id}>
								<input 
									defaultChecked={this.state.isChecked} 
									onChange={this.onCheck} 
									type="checkbox" 
									value="Apple"
									className={''}
								/>
								<label className={"labelFormat"}>{item.value}</label>															
								<a className="round-button"
									onClick={() => this.passDeleteID(item.id)}
								>
									X
								</a>
							</li>
						)
					})}
				</ul>
			</div>
		);
	}

};

export default RenderList;