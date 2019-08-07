import React,{useState} from "react";
import "./css/RenderList.css";

const RenderList = props => {

	const [ isChecked ,setisChecked ] = useState(false);
	const [ addStrike ,setaddStrike ] = useState("");

	//Function : For adding and remove Strike
	const checkStrike = () => {
		if(isChecked === false) {
			setaddStrike("addStrike");
			setisChecked(true);
		}else {
			setaddStrike("");
			setisChecked(false);
		}
	}

	//Function : Passing the list id for removing the item
	const passDeleteID = (id) => {
		props.deleteItem(id)
	}

	return (
		<div className="list">
			<ul>
				{props.lists.map( item => {
					return(
						<li key={item.id}>
							<input 
								defaultChecked={isChecked} 
								onChange={checkStrike} 
								type="checkbox" 
								value="Apple"
							/>
							<label className={`labelFormat ${addStrike}`}>{item.value}</label>															
							<a className="round-button"
								onClick={() => passDeleteID(item.id)}
							>
								X
							</a>
						</li>
					)
				})}
			</ul>
		</div>
	);

};

export default RenderList;