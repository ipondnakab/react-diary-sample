import React from "react";
import {
  Input,
  Textarea,
  Calendar,
  Button,
  Card,
} from "react-rainbow-components";
import { useNavigate } from "react-router-dom";
import { createDiary } from "../apis/diary";
import Header from "../components/Header";

function CreatePage() {
  const [date, setDate] = React.useState();
  const [title, setTitle] = React.useState();
  const [content, setContent] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const onSubmit = async () => {
    if (!date || !title || !content) {
      return alert("Please fill all the fields");
    }
    setIsLoading(true);
    try {
      await createDiary({ date, title, content });
      navigate("/");
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
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
        placeholder="Title..."
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
        required
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
        disabled={isLoading}
      />
    </div>
  );
}

export default CreatePage;
