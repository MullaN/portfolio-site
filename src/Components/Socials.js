import React from 'react'
import {Icon} from 'semantic-ui-react'

const Socials = () => {
 return(
     <div className="socials">
         <a href="https://www.linkedin.com/in/andrew-mullan-b7909b108/" target="_blank" rel="noreferrer"><Icon name="linkedin" size="big" /></a>
         <a href="https://twitter.com/NotMulan" target="_blank" rel="noreferrer"><Icon name="twitter" size="big" /></a>
         <a href="https://github.com/MullaN" target="_blank" rel="noreferrer"><Icon name="github" size="big" /></a>
         <a href="mailto:admullan@gmail.com" target="_blank" rel="noreferrer"><Icon name="mail" size="big" /></a>
     </div>
 )
}

export default Socials