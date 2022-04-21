import React from "react";
import {
  Input,
  Textarea,
  Calendar,
  Button,
  Card,
} from "react-rainbow-components";
import Header from "../components/Header";

function CreatePage() {
  const [date, setDate] = React.useState();
  const [title, setTitle] = React.useState();
  const [content, setContent] = React.useState();

  const onSubmit = () => {
    console.log({ date, title, content });
  };

  return (
    <div>
      <Header
        title="Create Diary"
        subtitle="You can create diary with this page"
      />
      <Input
        label="Title"
        labelAlignment="left"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        label="Content"
        rows={4}
        placeholder="Content..."
        labelAlignment="left"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Card style={{ marginTop: "16px", padding: "16px" }}>
        <Calendar
          id="calendar-1"
          locale="th"
          value={date}
          onChange={(value) => setDate(value)}
        />
      </Card>
      <Button
        label="Create"
        onClick={onSubmit}
        style={{ width: "100%", marginTop: "16px" }}
      />
    </div>
  );
}

export default CreatePage;
