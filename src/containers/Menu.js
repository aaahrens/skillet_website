/**
 * Created by drunkengranite on 6/6/17.
 */
import React from 'react';
import { connect } from 'react-redux';

const MenuBody = (props) => {
    const { menu } = props;

    return (
        <div>
            {menu.map((item, index) => (
                <div key={index} className="menu-section">
                    <div className="menu-title">
                        <div className="title">{item.get('Name')}</div>
                        <div className="content">{item.get('Description')}</div>
                    </div>
                    <div className="menu-items-container">
                        {item.get('Items').map((menuItem, innerIndex) => (
                            <div key={innerIndex} className="menu-item">
                                <div className="title">
                                    <div className="name">
                                        {menuItem.get('Name')}
                                    </div>
                                    <div className="price">
                                        {menuItem.get('Price')}
                                    </div>
                                </div>
                                <div className="content">
                                    {menuItem.get('Description')}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default connect((state) => ({
    menu: state.data.get('menu')
}))(MenuBody);
