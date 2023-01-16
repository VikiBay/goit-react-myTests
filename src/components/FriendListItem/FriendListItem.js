import PropTypes from "prop-types";
// import { Component } from "react";
import {CardWrapper, Avatar, Status, Name} from './FriendListItem.styled'

// export class FriendListItem extends Component {
//     state = {
//         isOpen: false
//     };

//     toggle = ()=>{
//         this.setState(prevState => ({
//             isOpen: !prevState.isOpen,
//         }))
//     }
//     render(){
//         const {isOpen} = this.state;
//         const {friend:{ avatar, name, isOnline }}= this.props;

//             return (
//             <CardWrapper onClick={this.toggle}>
//                 <Status isActive = {isOnline}></Status>
//                 <Avatar src={avatar} alt={name}/>
//                 {isOpen && <Name>{name}</Name>}
//                 {/* <Name>{name}</Name> */}
//               </CardWrapper>   
//             );
//     }
// }


export const FriendListItem = ({friend:{ avatar, name, isOnline }, onSelect, isSelected})=>{
    return <CardWrapper onClick={onSelect}>
        <Status isActive = {isOnline}></Status>
        <Avatar src={avatar} alt={name}/>
        {isSelected && <Name>{name}</Name>}
        </CardWrapper>   
}

FriendListItem.propTypes = {
  friend:PropTypes.exact({
      id:PropTypes.number.isRequired,
      avatar:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      isOnline:PropTypes.bool.isRequired
  })
  
}



