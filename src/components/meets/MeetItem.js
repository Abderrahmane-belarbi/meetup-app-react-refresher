import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import classes from './MeetItem.module.css'

export default function MeetItem({ title, address, description, imgUrl }) {
  return (
    <li className={classes.Li}>
          <div className={classes.IconTitleDiv}>
          <h3 className={classes.infoTitle}>{title}</h3>
        {/* <FaStar onClick={()=>{}} className={classes.Icon} size={20} color='#86c5af'/> */}
        <FaRegStar onClick={()=>{}} className={classes.Icon} size={30} color='#86c5af'/>
      </div>
      <div className={classes.imageDiv}>
        <img className={classes.image} src={imgUrl} alt={title}/>
      </div>

      <div className={classes.infoDiv}>
        
        <address className={classes.infoAdress}>{address}</address>
        <p className={classes.infoDescription}>{description}</p>
      </div>
    </li>
  )
}