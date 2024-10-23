import FriendListItem from "../FriendListItem/FriendListItem";

// const FriendList = ({ friends }) => {
//   return (
//     <ul>
//       {friends.map(friend => (
//         <li key={friend.id}>
//           <FriendListItem
//             avatar={friend.avatar}
//             name={friend.name}
//             isOnline={friend.isOnline}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// };

const FriendList = ({ friends }) => {
  const friendItems = [];

  // Звичайний цикл для створення елементів списку
  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    friendItems.push(
      <li>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    );
  }
 return <ul>{friendItems}</ul>;
}

export default FriendList;