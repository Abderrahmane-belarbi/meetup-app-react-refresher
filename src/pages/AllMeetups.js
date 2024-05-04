import MeetItem from "../components/meets/MeetItem";
import { DUMMY_DATA } from "../components/meets/meetsList";


export default function AllMeetups() {
  return (
    <section>
      <h1>All Meets</h1>
      <ul>
        {DUMMY_DATA.map((meet) => (
          <MeetItem title={meet.title} description={meet.description} address={meet.address} imgUrl={meet.image} key={meet.id} />
        ))}
      </ul>
    </section>
  );
}
