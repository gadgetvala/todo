import React from "react";
import "./css/RenderList.css";

const RenderList = props => {

	const passDeleteID = (id) => {
		props.deleteItem(id)
	}

	return (
		<div className="list">
			<ul>
				{props.lists.map( item => {
					return(
						<li key={item.id}>
								<input type="checkbox" id="fruit1" name="fruit-1" value="Apple"/>
								<label>{item.value}</label>															
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