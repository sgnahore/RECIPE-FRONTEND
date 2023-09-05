import { Link } from "react-router-dom";
export function Welcome(): JSX.Element {
    return (
        <div>
            Welcome to the home of recipes {"  "}
            <Link to="/recipes">Click for recipes </Link>
        </div>
    );
}
