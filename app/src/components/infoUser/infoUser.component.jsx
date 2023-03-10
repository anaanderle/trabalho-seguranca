import "./infoUser.css";
import { useEffect } from "react";
import { useGetMe } from "../../hooks";
import { useGlobalUser } from "../../context/user";
import photoUser from "../../assets/images/photoUser.jpeg";

export function InfoUser({ user }) {
  const [globalUser] = useGlobalUser();
  const { dataMe, getMe } = useGetMe();

  useEffect(() => {
    getMe();
  }, [globalUser]);

  return (
    <div className="infoUser">
      {dataMe ? (
        dataMe?.imagemUrl ? (
          <img className="infoUserImage" src={dataMe?.imagemUrl} />
        ) : (
          <img className="infoUserImage" src={photoUser} />
        )
      ) : null}

      {user ? (
        user?.imagemUrl ? (
          <img className="infoUserImage" src={user?.imagemUrl} />
        ) : (
          <img className="infoUserImage" src={photoUser} />
        )
      ) : null}

      <span className="infoUserItem">{dataMe?.nome}</span>
      <span className="infoUserItem">{dataMe?.email}</span>
      <span className="infoUserItem">{dataMe?.telefone}</span>
    </div>
  );
}
