import s from "./FriendListItem.module.css"
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  // const statusClass = isOnline ? "online" : "offline";

  return (
    <div className={clsx(s.list_friends, s.container)}>
      <img className={s.image_two}  src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={clsx(s.status, isOnline ? s.statusOnline : s.statusOffline)}> {isOnline ? "online" : "offline"}</p>
    </div>
  );
};
export default FriendListItem