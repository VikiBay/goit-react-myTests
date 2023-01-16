import { FriendList } from "./FriendList/FriendList";
import {Counter} from './Counter/Counter'
import friends from 'friends.json'
import { TestProfileList } from "./TestProfileList/TestProfileList"
import testusers from '../testusers.json'
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     
      <Counter></Counter>
      <FriendList friends = {friends}></FriendList>
      <TestProfileList content={testusers}/>
     </div>
  );
};
