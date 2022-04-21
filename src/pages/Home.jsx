import React from "react";
import { ActivityTimeline, Spinner } from "react-rainbow-components";
import CardDiary from "../components/CardDiary";
import { useNavigate } from "react-router-dom";
import { getAllDiary } from "../apis/diary";

function HomePage() {
  const [diarys, setDiarys] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const res = await getAllDiary();
        setDiarys(res);
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <div className="rainbow-m-around_xx-large">
      <ActivityTimeline>
        {isLoading ? (
          <Spinner />
        ) : diarys.length === 0 ? (
          <p>No Data</p>
        ) : (
          diarys.map((item, index) => (
            <CardDiary
              onClick={() => navigate(`/diary/${item.diaryId}`)}
              key={index}
              title={item.title}
              date={item.date}
              content={item.content}
            />
          ))
        )}
      </ActivityTimeline>
    </div>
  );
}

export default HomePage;
