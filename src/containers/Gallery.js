/**
 * Created by drunkengranite on 7/10/17.
 */

import * as React from "react";
import { connect } from "react-redux";

const GalleryBody = (props) => {
    const { images } = props;

    return (
        <div>
            <div className="gallery-container">
                {images.map((item, index) => (
                    <div key={index} className="gallery-image">
                        <div className="gallery-image-mask">
                            {item.get("text")}
                        </div>
                        <img src={item.get("image")} alt="gallery" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default connect((state) => ({
    images: state.data.get("images")
}))(GalleryBody);
