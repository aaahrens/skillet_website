/**
 * Created by drunkengranite on 6/6/17.
 */
import React from "react";
import {connect} from "react-redux";


const MenuBody = (props) => {


	return (
		<div>
			{
				props.menu.map((item, index) => {
					return (
						<div key={index} className="menu-section">
							<div className="menu-title">
								<div className="title">
									{item.get("Name")}
								</div>
								<div className="content">
									{item.get("Description")}
								</div>
							</div>

							<div className="menu-items-container">
								{
									item.get("Items").map((item, index) =>

										<div key={index} className="menu-item">
											<div className="title">
												<div className="name">
													{item.get("Name")}
												</div>
												<div className="price">
													{item.get("Price")}
												</div>
											</div>
											<div className="content">
												{item.get("Description")}
											</div>
										</div>
									)
								}
							</div>
						</div>
					)
				})
			}
		</div>
	)
};

export default connect(
	(state) => ({
		text: state.data.placeHolder,
		menu: state.data.menu
	}),
	(dispatch) => ({})
)(MenuBody)