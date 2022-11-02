import React from "react";
import CustomRoutes from "./routes/Routes";
import Button from "./form/Button";
import Navbar from "./components/Navbar";
import Input from "./form/Input";
import SelectFile from "./form/SelectFile";
import ToggleNav from "./components/Navbar/ToggleNav";

function App() {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <>
      <Navbar
        classes={`nav-box-shadow nav-container nav-space-between nav-flex ${
          showNav ? "open-menu" : ""
        }`}
      >
        <div className="nav-logo">logo</div>
        <div className="nav-flex responsive-navbar">
          <ul className="nav-lists">
            <li className="nav-list-item large">Home</li>
            <li className="nav-list-item medium">About</li>
            <li className="nav-list-item small">Contact</li>
          </ul>
          <Button
            text="Page Update"
            classes="btn space-left-right  btn-info btn-semi-rounded space-letters-2"
          />
          <Button
            text="Sign Up"
            classes="btn btn-primary btn-shadow btn-hover-box-shadow-transition btn-semi-rounded"
          />
        </div>
        <ToggleNav handleClick={() => setShowNav(!showNav)} />
      </Navbar>
      <Button
        text="Buy your first domain"
        classes="btn space-letters-1 btn-shadow space-around btn-circle"
        onClick={() => alert("Hello")}
      />
      <CustomRoutes
        components={[
          { item: <h1>Home</h1>, id: 1, path: "/" },
          { item: <h1>About</h1>, id: 2, path: "/about" },
          { item: <h1>Contact</h1>, id: 3, path: "/contact" },
        ]}
      />
      <Input required="required" label="First Name" />
      <Input label="Last Name" />

      <SelectFile classes="space-left space-top" />
    </>
  );
}

export default App;
