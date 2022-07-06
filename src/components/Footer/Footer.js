import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
	return (
		<>
			<footer className="footer-mobile">
				<Link to="/tasks">
					<span className="links">
						<i className="fas fa-tasks"></i> Task
					</span>
				</Link>
				<Link to="/pomodoro">
					<span className="links">
						<i className="fa fa-stopwatch"></i> Pomodoro
					</span>
				</Link>
			</footer>
		</>
	);
};

export default Footer;
