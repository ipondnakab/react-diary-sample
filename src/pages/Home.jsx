import React from "react";
import {
  ActivityTimeline,
  TimelineMarker,
  Card,
} from "react-rainbow-components";

function HomePage() {
  return (
    <div className="rainbow-m-around_xx-large">
      <ActivityTimeline>
        <TimelineMarker label="User first post." datetime="3 hours ago">
          <Card title="Inside Content" style={{ padding: "16px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Card>
        </TimelineMarker>
        <TimelineMarker label="User first post." datetime="3 hours ago">
          <Card title="Inside Content" style={{ padding: "16px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Card>
        </TimelineMarker>
        <TimelineMarker label="User first post." datetime="3 hours ago">
          <Card title="Inside Content" style={{ padding: "16px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Card>
        </TimelineMarker>
      </ActivityTimeline>
    </div>
  );
}

export default HomePage;
