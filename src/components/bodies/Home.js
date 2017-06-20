/**
 * Created by drunkengranite on 6/6/17.
 */
/**
 * Created by drunkengranite on 6/6/17.
 */
import React from "react";
import {connect} from "react-redux";
import Footer from "../Footer";
import Card from "../Card";
import MenuItem from "../MenuItem";
import img1 from "./EX3i8.jpg";
import img2 from "./about-image.png";
import Slider from "react-slick";

const Home = (props) => {
	let settings = {
		dots: false,
		infinite: true,
		speed: 5,
		autoplay: true,
		autoplaySpeed: 1000,
		className: "home-body",
		arrows: false,
		useCSS: true,
	};

	return (
		<div id="body">
			<Slider {...settings}>
				<div id="home-item">
					<img src={img2}/>
				</div>
				<div id="home-item">
					<img src={img1}/>
				</div>
			</Slider>
			{/*<div className="section">*/}
				{/*Featured Menu Items*/}
			{/*</div>*/}
			{/*<div className="featured-item-container">*/}
				{/*{*/}
					{/*props.featuredItems.map((item) => {*/}
						{/*return (*/}
							{/*<div className="featured-item">*/}
								{/*<div className="image">*/}
									{/*<img src={img1} />*/}
								{/*</div>*/}
								{/*<div className="meta">*/}
									{/*<p className="font-header-1">{item.title}</p>*/}
									{/*<p className="font-caption">{item.price}</p>*/}
									{/*<p className="font-body-copy">{item.description}</p>*/}
								{/*</div>*/}
							{/*</div>*/}
						{/*)*/}
					{/*})*/}
				{/*}*/}
			{/*</div>*/}
		</div>
	)
};

export default connect(
	(state) => ({
		featuredItems: state.data.featuredItems
	}),
	(dispatch) => ({})
)(Home)