/**
 * Created by drunkengranite on 6/6/17.
 */
/**
 * Created by drunkengranite on 6/6/17.
 */
import React from "react";
import {connect} from "react-redux";

const Home = (props) => {


	return (
		<div>
			<div className="special-wrapper">
				<div className="special-title">
					Specials
				</div>
				<div className="special-items">
					{
						props.specialItems.map((item, index) =>

							<div key={index}>
								<div className="special-name-price-content">
									<div className="name">
										{item.get("name")}
									</div>
									<div className="price">
										{item.get("price")}
									</div>
								</div>
								<div className="content">
									{item.get("description")}
								</div>
							</div>
						)
					}
				</div>
			</div>

		</div>


	)
};

export default connect(
	(state) => ({
		specialItems: state.data.specials
	}),
	(dispatch) => ({})
)(Home)


