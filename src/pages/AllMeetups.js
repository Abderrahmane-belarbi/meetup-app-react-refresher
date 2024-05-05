import MeetItem from "../components/meets/MeetItem";
import { DUMMY_DATA } from "../components/meets/meetsList";
import classes from './AllMeetup.module.css'

export default function AllMeetups() {
  return (
    <section>
      <div className={classes.emptyDiv}/>
      <ul className={classes.meetsList}>
      <p className={classes.allMeetsHeader}>All Meets</p>
        {DUMMY_DATA.map((meet) => (
          <MeetItem title={meet.title} description={meet.description} address={meet.address} imgUrl={meet.image} key={meet.id} />
        ))}
      </ul>
    </section>
  );
}
