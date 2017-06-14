/**
 * Created by drunkengranite on 6/6/17.
 */
import React from "react";
import {connect} from "react-redux";
import Footer from "../Footer";
import Card from "../Card";


const Menu = (props) => {


	return (
		<div id="body">
			{
				props.menu.map((item, index) => {
					return (
						<div key={index} className="menu-section">
							<div className="menu-title">
								<div>
									{item.get("Name")}
								</div>
								<div>
									{item.get("Description")}
								</div>
							</div>
							{
								item.get("Items").map((item, index) =>

									<div key={index} className="menu-item">
										<div className="content">
											{item.get("Name")}
										</div>
										<div className="content" placeholder="true">

										</div>
										<div className="content">
											{item.get("Price")}
										</div>
									</div>
								)
							}
						</div>
					)
				})
			}

			<Footer/>
		</div>
	)
};

const MenuItem = (props) => {
	return (
		<div>

		</div>
	)
};

export default connect(
	(state) => ({
		text: state.data.placeHolder,
		menu: state.data.menu
	}),
	(dispatch) => ({})
)(Menu)