import s from "./FriendListItem.module.css"
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? "online" : "offline";

  return (
    <div className={clsx(s.list_friends, s.container)}>
      <img className={s.image_two}  src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={'friend-status ${statusClass}'}> {statusClass}</p>
    </div>
  );
};
export default FriendListItem