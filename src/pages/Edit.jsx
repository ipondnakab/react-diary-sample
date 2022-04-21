import React from "react";
import { Input, Textarea, Button, Spinner } from "react-rainbow-components";
import { editDiary, getDiaryById } from "../apis/diary";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

function EditPage() {
  const [title, setTitle] = React.useState();
  const [content, setContent] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  const { id } = useParams();

  React.useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const res = await getDiaryById(id);
        setTitle(res.title);
        setContent(res.content);
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [id]);

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      await editDiary({ title, content, diaryId: id });
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header title="Edit Diary" subtitle="You can edit diary with this page" />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
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
            label="Edit"
            onClick={onSubmit}
            style={{ width: "100%", marginTop: "16px" }}
          />
        </>
      )}
    </div>
  );
}

export default EditPage;
