import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <section className="welcome">
      <h3 className="welcome__text">Welcome to Heavy Locomotive</h3>
      <Link to="/signup" className="btn btn--yellow btn--animated">
        Truck with Us
      </Link>
    </section>
  );
}
