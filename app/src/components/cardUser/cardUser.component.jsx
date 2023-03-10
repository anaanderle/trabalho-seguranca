import "./cardUser.css";
import { Button } from "..";
import photoUser from "../../assets/images/photoUser.jpeg";

export function CardUser({ user, textButton, handleClick, inviteId }) {
  return (
    <div className="cardUser">
      <div className="cardInfos">
        {user.imagemUrl ? (
          <img className="cardUserImage" src={user.imagemUrl} />
        ) : (
          <img className="cardUserImage" src={photoUser} />
        )}

        <div className="cardUserInfos">
          <span>{user.nome}</span>
          <span>{user.email}</span>
        </div>
      </div>

      {textButton ? (
        <Button
          extraClasses="miniButton"
          color="Red"
          handleClick={() => handleClick(inviteId)}
        >
          {textButton}
        </Button>
      ) : null}
    </div>
  );
}
