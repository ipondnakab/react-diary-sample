import React from "react";
import { Input, Textarea, Button } from "react-rainbow-components";
import Header from "../components/Header";

function EditPage() {
  const [title, setTitle] = React.useState();
  const [content, setContent] = React.useState();

  React.useEffect(() => {
    setTitle("Hello world!!");
    setContent(`Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s
      with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.`);
  }, []);

  const onSubmit = () => {
    console.log({ title, content });
  };

  return (
    <div>
      <Header title="Edit Diary" subtitle="You can edit diary with this page" />
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
      <Button
        label="Create"
        onClick={onSubmit}
        style={{ width: "100%", marginTop: "16px" }}
      />
    </div>
  );
}

export default EditPage;
