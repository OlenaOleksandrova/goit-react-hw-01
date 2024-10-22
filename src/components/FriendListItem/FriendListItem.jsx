const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? "online" : "offline";

  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={statusClass}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
export default FriendListItem