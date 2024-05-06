import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import { useNavigate } from "react-router-dom";

export default function NewMeetupForm() {
  const navigate = useNavigate();

  const titleInputRef = useRef();
  const imgUrlInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    console.log("submit");

    const meetupData = {
      title: titleInputRef.current.value,
      imgUrl: imgUrlInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    };

    await fetch(
      "https://meetup-66252-default-rtdb.firebaseio.com/meetup.json",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(meetupData),
      }
    )
      .then(function (res) {
        navigate('/');
      })
      .catch(function (res) {
        console.log(res);
      });
  }
  return (
    <form
      className={classes.NewMeetupForm}
      onSubmit={(event) => {
        submitHandler(event);
      }}
    >
      <div className={classes.titleInputDiv}>
        <label className={classes.titleLabel} htmlFor="title">
          Title
        </label>
        <input
          className={classes.titleInput}
          type="text"
          required
          id="title"
          ref={titleInputRef}
        />
      </div>

      <div className={classes.titleInputDiv}>
        <label className={classes.titleLabel} htmlFor="image">
          Image
        </label>
        <input
          className={classes.titleInput}
          type="url"
          required
          id="image"
          ref={imgUrlInputRef}
        />
      </div>

      <div className={classes.titleInputDiv}>
        <label className={classes.titleLabel} htmlFor="address">
          Address
        </label>
        <input
          className={classes.titleInput}
          type="address"
          required
          id="title"
          ref={addressInputRef}
        />
      </div>

      <div className={classes.titleInputDiv}>
        <label className={classes.titleLabel} htmlFor="Description">
          Description
        </label>
        <textarea
          className={classes.descriptionTextArea}
          rows={5}
          required
          id="Description"
          ref={descriptionInputRef}
        />
      </div>
      <div className={classes.formButtonDiv}>
        <button className={classes.formButton} type="submit">
          Add Meetup
        </button>
      </div>
    </form>
  );
}
