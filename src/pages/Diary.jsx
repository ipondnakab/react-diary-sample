import React from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Spinner } from "react-rainbow-components";
import { deleteDiary, getDiaryById } from "../apis/diary";
import Swal from "sweetalert2";

function DiaryPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [diary, setDiary] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const res = await getDiaryById(id);
        setDiary(res);
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [id]);

  const onDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this diary?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await deleteDiary(id);
      navigate("/");
    }
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header title={diary?.title || ""} subtitle={diary?.date || ""} />
          <Button
            label="Edit"
            onClick={() => navigate(`/edit/${diary?.diaryId || ""}`)}
          />
          <Button
            label="Delete"
            style={{ marginLeft: "8px" }}
            onClick={onDelete}
          />
          <p>{diary?.content || ""}</p>
        </>
      )}
    </div>
  );
}

export default DiaryPage;
