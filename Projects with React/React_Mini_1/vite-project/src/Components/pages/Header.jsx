import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="second_part">
      <div className="option">
        <p>Extensions List</p>
        <div className="T_buttons">
          <Link className="but" to="/all">
            All
          </Link>
          <Link className="but" to="/active">
            Active
          </Link>
          <Link className="but" to="/inactive">
            Inactive
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
