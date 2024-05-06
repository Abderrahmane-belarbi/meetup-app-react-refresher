import NewMeetupForm from '../components/form/newMeetupForm';
import classes from './NewMeetup.module.css'

export default function NewMeetup() {

  return <section>
    <p className={classes.addNewMeetHeader} >Add New Meetup</p>
    <NewMeetupForm />
  </section>;
}