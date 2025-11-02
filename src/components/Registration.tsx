import { useState } from "react";
import "./Registration.css";

export interface User {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const Registration = () => {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((newUser) => {
      const updatedUser = { ...newUser, [name]: value };

      if (name === "email" && value.includes("@") && newUser.username === "") {
        updatedUser.username = value.split("@")[0];
      }
      return updatedUser;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulář byl odeslán:", user);

    setUser({
      username: "",
      email: "",
      password: "",
      passwordConfirm: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          id="email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="username">Jméno uživatele:</label>
        <input
          type="text"
          name="username"
          placeholder="jméno uživatele"
          id="username"
          value={user.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Heslo</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="zadej heslo"
          value={user.password}
          onChange={handleChange}
        />
        <label htmlFor="confirm">Potvrzení hesla:</label>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder="zadej heslo znovu."
          value={user.passwordConfirm}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </div>
    </form>
  );
};
