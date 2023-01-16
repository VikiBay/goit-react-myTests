// import {BsAlarm} from 'react-icons/bs';
import PropTypes from "prop-types";
import {CardWrapper, Image, ProfileInfo, InfoBlock, BadgeList, Badge} from './TestProfile.styled'

export const TestProfile = ({data:{username, avatar, difficulty, stats:{followers,views,likes}}})=>{
    return <CardWrapper><h2>{username}</h2>
    <Image src={avatar} alt={username} width='240'></Image>
    <ProfileInfo>
    <InfoBlock>
    {/* <BsAlarm size={20}/> */}
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </InfoBlock>
    <InfoBlock>
    {/* <BsAlarm size={20}/> */}
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </InfoBlock>
    <InfoBlock>
    {/* <BsAlarm size={20}/> */}
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </InfoBlock>
    </ProfileInfo>
    <h3>Difficulty</h3>
    <BadgeList>
        <Badge variant = 'Easy' isActive = {difficulty==="Easy"}>Easy</Badge>
        <Badge variant = 'Medium' isActive = {difficulty==="Medium"}>Medium</Badge>
        <Badge variant = 'Hard' isActive = {difficulty==="Hard"}>Hard</Badge>
    </BadgeList>
    </CardWrapper>
}

TestProfile.propTypes = {
    data:PropTypes.exact({
        id:PropTypes.number.isRequired,
        avatar:PropTypes.string,
        username:PropTypes.string.isRequired,
        tag:PropTypes.string.isRequired,
        location:PropTypes.string.isRequired,
        stats:PropTypes.object.isRequired,
        difficulty:PropTypes.oneOf(['Easy', 'Medium', 'Hard']).isRequired



    })
    
}