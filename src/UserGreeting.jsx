import PropTypes from "prop-types";

function UserGreeting(props) {
   const msg1 = <h2 className="welcome">Welcome {props.username}</h2>;
   const msg2 = <h2 className="login">Please log in to continue</h2>;
   return props.isLoggedIn ? msg1 : msg2;
}

UserGreeting.propTypes = {
   isLoggedIn: PropTypes.bool,
   username: PropTypes.string,
};

UserGreeting.defaultProps = {
   isLoggedIn: false,
   username: "guest",
};

export default UserGreeting;
