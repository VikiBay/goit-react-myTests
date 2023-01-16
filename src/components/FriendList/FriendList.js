import {FriendListItem} from "../FriendListItem/FriendListItem"
import PropTypes from "prop-types";
import {Wrapper} from './FriendList.styled'
import { Component } from "react";


export class FriendList extends Component {
    state = {
        selectedIndex:null,
    }

    changeIdx =idx => {
        this.setState({
            selectedIndex:idx
        })
    }
   render(){
    const {friends} = this.props;
    const {selectedIndex} = this.state;
    return (
        <Wrapper>
        {friends.map((friend,idx)=>(
        <FriendListItem key={friend.id} friend={friend} onSelect={() => this.changeIdx(idx)}
        isSelected={selectedIndex===idx} />
        ))}
        </Wrapper>
            );
        }
}

    


FriendList.propTypes = {
  
    friends: PropTypes.arrayOf(PropTypes.exact({
        id:PropTypes.number.isRequired,
        avatar:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        isOnline:PropTypes.bool.isRequired
    }))
    }