/**
 * Created by drunkengranite on 7/10/17.
 */

import * as React from "react";
import {connect} from "react-redux";
export const GalleryBody = (props) => {


	return (
		<div className="location-container">

			<div className="map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d800.0243085592106!2d-122.80565611736877!3d38.54785188890775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6a6c94f9aa5d3d!2sSkillets+Cafe!5e0!3m2!1sen!2sus!4v1497289403255"/>
			</div>
			<div className="address">8776 Lakewood Dr<br/>
				Windsor, Ca <br/>
				95492 <br/><br/>
				Located in the Raleys Shopping Center<br/>
			</div>
		</div>

	);
}


export default connect(
	(state) => ({}),
	(dispatch) => ({})
)(GalleryBody)
