import React from "react";
import { TimelineMarker } from "react-rainbow-components";
function CardDiary({ title, date, content, onClick }) {
  return (
    <TimelineMarker label={title} datetime={date}>
      <div
        title={title}
        style={{
          padding: "16px",
          cursor: "pointer",
          backgroundColor: "#fff",
          borderRadius: "16px",
        }}
        onClick={onClick}
      >
        {content}
      </div>
    </TimelineMarker>
  );
}

export default CardDiary;
