import React from "react";
import { Input, Card, Button, Spinner } from "react-rainbow-components";
import { useAuth } from "../providers/Auth";

function RegisterPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const auth = useAuth();

  const onSubmit = async () => {
    if (password !== confirmPassword) {
      return alert("Password not match");
    }
    await auth.register({ email, password });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          width: "500px",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {auth.userLoading ? (
          <Spinner />
        ) : (
          <>
            <h1>Register</h1>
            <Input
              label="Email"
              labelAlignment="left"
              placeholder="Placeholder text"
              style={{ width: "300px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              labelAlignment="left"
              placeholder="Password"
              type="password"
              style={{ width: "300px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Confirm Password"
              labelAlignment="left"
              placeholder="Confirm Password"
              type="password"
              style={{ width: "300px" }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              style={{ marginTop: "32px", width: "300px" }}
              variant="brand"
              onClick={onSubmit}
              label="Register"
            />
          </>
        )}
      </Card>
    </div>
  );
}

export default RegisterPage;
