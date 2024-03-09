import React from "react";
import Nav from "react-bootstrap/Nav";

export const Header = ({ userId, setUserId, showEnroll }) => {
  const logout = () => {
    setUserId(null);
  };

  return (
    <header>
      <Nav className="align-items-center">
        <Nav.Item>
          <Nav.Link eventKey="logo" disabled>
            <img alt="Telecom System" src="/images/telecom.png" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="app" disabled>
            <h3>Telecom System </h3>
          </Nav.Link>
        </Nav.Item>
        {userId && (
          <>
            <Nav.Item>
              <Nav.Link eventKey="profile" onClick={() => showEnroll(false)}>
                <h5>Profile</h5>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="enroll" onClick={() => showEnroll(true)}>
                <h5>Enroll</h5>
              </Nav.Link>
            </Nav.Item>
          </>
        )}
      </Nav>
      <Nav className="justify-content-end">
        {userId && (
          <Nav.Item>
            <Nav.Link eventKey="logout" href="/" onClick={logout}>
              <h5>Log out</h5>
            </Nav.Link>
          </Nav.Item>
        )}
      </Nav>
    </header>
  );
};
