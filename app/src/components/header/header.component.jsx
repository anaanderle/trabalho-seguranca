import "./header.css";
import { useGlobalUser } from "../../context/user";
import { useLogout, useGetUsers } from "../../hooks";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../index";
import iconLogout from "../../assets/icons/iconLogout.png";
import iconUser from "../../assets/icons/iconUser.png";
import logo from "../../assets/images/logo.png";
import { TextInput, CardUser } from "../index";
import { useEffect, useState } from "react";

export function Header() {
  const [, setGlobalUser] = useGlobalUser();
  const { logout } = useLogout();
  const navigate = useNavigate();
  const [searchUsers, setSearchUsers] = useState("");
  const { dataUsers, getUsers } = useGetUsers();

  function handleLogout() {
    logout();
    setGlobalUser(null);
    navigate("/");
  }

  function handleHome() {
    navigate("/home");
  }

  function handleUser() {
    navigate("/user");
  }

  function handleChange({ target }) {
    const { value } = target;

    setSearchUsers(value);
  }

  useEffect(() => {
    if (searchUsers) getUsers(searchUsers);
  }, [searchUsers]);

  function renderUsers() {
    if (searchUsers) {
      return (
        <div className="searchUsers">
          {dataUsers?.map((user, index) => (
            <Link key={index} to={`/user/${user.id}`} className="nav">
              <CardUser user={user} />
            </Link>
          ))}
        </div>
      );
    }
  }

  return (
    <div className="header">
      <Button extraClasses="headerButton" handleClick={handleHome}>
        <img className="headerIcon" src={logo} alt="Logo CatGram" />
      </Button>

      <TextInput
        placeholder="Pesquise um usuário aqui"
        handleChange={handleChange}
      />
      {renderUsers()}
      <Button extraClasses="headerButton" handleClick={handleUser}>
        <img className="headerIcon" src={iconUser} alt="Icon de User" />
      </Button>

      <Button extraClasses="headerButton" handleClick={handleLogout}>
        <img
          className="headerIconLogout"
          src={iconLogout}
          alt="Icon de logout"
        />
      </Button>
    </div>
  );
}
