import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'
import './style.less'
import SearchInput from '../SearchInput'

class HomeHeader extends React.Component  {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div id="home-header" className="clear-fix">
                <Link to="/city">
                    <div className="home-header-left float-left">
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </div>
                </Link>
                <div className="home-header-right float-right"><i className="icon-user"></i></div>
                <div className="home-header-middle">
                <div className="search-container">
                    <i className="icon-search"></i>
                    <SearchInput defaultV="" confirmInputHandler={this.confirmInputHandler.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }

    confirmInputHandler(value) {
        this.props.history.push('/search/all/' + value);
    }
}

export default HomeHeader