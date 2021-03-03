import { Forms, Comment, Radio, Button } from "./styles";

const accountDeletingComment = "Comment...";
const accountDeletingRadio = ["1", "2", "3", "4", "5"];
const accountDeletingText = " To evaluate the Team's work";
const accountDeletingButton = "Send";
const formType = "Account deleting";

export const withAccountDeleting = () => ({
  comment,
  onCommentChange,
  rate,
  onRateChange,
}) => (
  <Forms>
    <h2>{formType}</h2>
    <Comment
      onChange={(event) => onCommentChange(event.target.value)}
      value={comment}
      placeholder={accountDeletingComment}
    />
    <p>{accountDeletingText}</p>
    <Radio onChange={(event) => onRateChange(event.target.value)}>
      {accountDeletingRadio.map((elem) => (
        <label key={elem}>
          <input
            name="rate"
            type="radio"
            value={elem}
            defaultChecked={elem === rate}
          />
          {elem}
        </label>
      ))}
    </Radio>
    <Button>{accountDeletingButton}</Button>
  </Forms>
);
