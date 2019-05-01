import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'resources/images/logo.png';
import { connect } from 'react-redux';
import { logoutUser } from 'app/actions/authentication';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
    state = {
        isActive: false,
    };

    toggleNav() {
        this.setState(prevState => ({
            isActive: !prevState.isActive,
        }));
    }
    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }
    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <div className="navbar-end">
                <a className="navbar-item" onClick={e => this.onLogout(e)}>
                    <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                        <i className="fas fa-sign-out-alt" />
                    </span>
                    Logout of {user.email}
                </a>
            </div>
        );
        const guestLinks = (
            <div className="navbar-end">
                <NavLink className="navbar-item" to={'/login'} activeClassName="is-active">
                    <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                        <i className="fas fa-sign-in-alt" />
                    </span>
                    Login
                </NavLink>

                <NavLink className="navbar-item" to={'/register'} activeClassName="is-active">
                    <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                        <i className="fas fa-user" />
                    </span>
                    Register
                </NavLink>
            </div>
        );
        return (
            <nav
                className="navbar"
                aria-label="main navigation"
                style={{
                    borderBottom: 'solid 1px #dddddd',
                }}
            >
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img
                            style={{
                                marginRight: 15,
                            }}
                            src={logo}
                            alt=""
                        />
                        <span>AMS</span>
                    </a>
                    <button className="button navbar-burger" onClick={() => this.toggleNav()}>
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
                <div className={this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
                    <div className="navbar-start">
                        <NavLink className="navbar-item" to={'/'} activeClassName="is-active">
                            <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                                <i className="fas fa-code" />
                            </span>
                            Attendance
                        </NavLink>
                        <a className="navbar-item">
                            <span className="icon" style={{ marginRight: 5 }}>
                                <i className="fab fa-lg fa-medium" />
                            </span>
                            Data
                        </a>
                    </div>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(
    mapStateToProps,
    { logoutUser },
)(withRouter(Header));
