import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css"
import clsx from "clsx";

const FriendList = ({ friends }) => {
  const friendItems = [];

  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    friendItems.push(
      <li key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    );
  }
 return <ul className={clsx(s.list_return, s.container)}>{friendItems}</ul>;
}

export default FriendList;