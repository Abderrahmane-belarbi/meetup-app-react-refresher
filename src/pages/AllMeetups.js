import { useEffect, useState } from "react";
import MeetItem from "../components/meets/MeetItem";
import { DUMMY_DATA } from "../components/meets/meetsList";
import classes from "./AllMeetup.module.css";

export default function AllMeetups() {
  const [meetsDataList, setMeetDataList] = useState([]);

  useEffect(() => {
    async function getdata() {
      await fetch(
        "https://meetup-66252-default-rtdb.firebaseio.com/meetup.json"
      ).then((res) => {
          return res.json();
        })
        .then((data) => {
          let list = [];
          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key],
            };
            list.push(meetup);
            
            console.log('meet: ', meetup);
          }
          console.log("list: ", list);
          setMeetDataList([...list, ...DUMMY_DATA]);
          console.log('meetsDataList: ',meetsDataList);
        });
    }
    getdata();
  }, []);

  return (
    <section>
      <ul className={classes.meetsList}>
        <p className={classes.allMeetsHeader}>All Meets</p>
        {meetsDataList.map((meet) => (
          <MeetItem
            title={meet.title}
            description={meet.description}
            address={meet.address}
            imgUrl={meet.image}
            key={meet.id}
          />
        ))}
      </ul>
    </section>
  );
}
