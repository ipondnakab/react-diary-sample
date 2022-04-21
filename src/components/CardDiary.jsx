import React from "react";
import { TimelineMarker, Card } from "react-rainbow-components";
function CardDiary({ title, date, content, onClick }) {
  return (
    <TimelineMarker label={title} datetime={date} onClick={onClick}>
      <Card title={title} style={{ padding: "16px" }}>
        {content}
      </Card>
    </TimelineMarker>
  );
}

export default CardDiary;
