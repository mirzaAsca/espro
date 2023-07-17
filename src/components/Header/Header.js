import React from 'react';
import './Header.scss';
import CircleIcon from '../common/CircleIcon';

const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__left">
                    <a href="/shop">SHOP</a>
                    <a href="/our-story">OUR STORY</a>
                </div>
                <div className="header__right">
                    <a href="/brew-guides">BREW GUIDES</a>
                    <a href="/blog">BLOG</a>
                    <img src='https://i.ibb.co/TMcpGTQ/search-line-2x.png' alt="Icon 1" />
                    <img src='https://i.ibb.co/xC6X3sW/My-Account-icon-2x.png' alt="Icon 2" />
                    <img src='https://i.ibb.co/2n1BLF8/Shopping-bag-icon-2x.png' alt="Icon 3" />
                    <CircleIcon number={0} />
                </div>
            </div>
            <div className="header__center">
                <img src='https://i.ibb.co/zsd27t0/ESPRO-Logo-2x.png' alt="Company logo" />
            </div>
        </header>
    );
};

export default Header;
