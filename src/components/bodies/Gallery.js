/**
 * Created by drunkengranite on 7/10/17.
 */

import * as React from "react";
import {connect} from "react-redux";

const GalleryBody = (props) => {


	return (
		<div className="gallery-container container">
			{
				props.images.map((item, index) =>
					<div key={index} className="gallery-image">


						<img src={item.get("image").replace("\"", "")}/>

					</div>
				)
			}

		</div>

	);
}


export default connect(
	(state) => ({
		images: state.data.images
	}),
	(dispatch) => ({})
)(GalleryBody);
