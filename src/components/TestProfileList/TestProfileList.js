import { TestProfile } from "../TestProfile/TestProfile";
import PropTypes from "prop-types";
import {TestList} from './TestProfileList.styled'

export const TestProfileList = ({content})=>{
    return (
        <TestList>
      {content.map(user =>(
        <li key={user.id}>
            <TestProfile data={user}/>
        </li>
         ))}
        </TestList>
            );
};

TestProfileList.propTypes = {
content: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired}))
}