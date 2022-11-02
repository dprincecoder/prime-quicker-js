import React from "react";
import CustomRoutes from "./routes/Routes";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Input from "./components/form/Input";

function App() {
  return (
    <>
      <Navbar classes="nav-box-shadow nav-container nav-space-between nav-flex">
        <div className="">logo</div>
        <div className="nav-flex">
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
      </Navbar>
      <Button
        text="Buy your first domain"
        classes="btn space-letters-1 btn-shadow btn-success btn-circle"
        onClick={() => alert("Hello")}
      />
      <CustomRoutes
        components={[
          { item: <h1>Home</h1>, id: 1, path: "/" },
          { item: <h1>About</h1>, id: 2, path: "/about" },
          { item: <h1>Contact</h1>, id: 3, path: "/contact" },
        ]}
      />
      <Input
        required=""
        label="First Name"
        classes=" input-border-none input-border-bottom input-focus input-required-not-filled"
      />
      <Input
        label="Last Name"
        classes=" input-border-none input-border-bottom input-rounde input-focus input-required-not-filled"
      />
    </>
  );
}

export default App;
