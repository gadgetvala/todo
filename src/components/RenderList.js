import React from "react";
	
const RenderList = props => {

	const passDeleteID = (id) => {
		props.deleteItem(id)
	}

	return (
		<div>
			<ul>
				{props.lists.map( item => {
					return(
						<li key={item.id}>
							{item.value}
							<button 
								onClick={() => passDeleteID(item.id)}
							>
								X
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	);

};

export default RenderList;