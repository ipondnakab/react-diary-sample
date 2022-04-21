import React from "react";
import { Sidebar, SidebarItem, Avatar } from "react-rainbow-components";
import { useNavigate } from "react-router-dom";
import { FcHome, FcAddImage } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";

function Layouts({ children }) {
  const [selectedItem, setSelectedItem] = React.useState("");
  const navigate = useNavigate();
  const pathname = window.location.pathname;

  React.useEffect(() => {
    if (pathname === "/create") {
      setSelectedItem("create");
    } else {
      setSelectedItem("home");
    }
  }, [pathname]);

  const handleOnSelect = (event, value) => {
    return setSelectedItem(value);
  };

  return (
    <div style={{ display: "flex", flex: 1, width: "100vw", height: "100vh" }}>
      <Sidebar
        selectedItem={selectedItem}
        onSelect={handleOnSelect}
        id="sidebar-1"
        style={{ width: "100px" }}
      >
        <div style={{ width: "100%" }}>
          <Avatar
            style={{ margin: "16px auto" }}
            className="rainbow-m-around_x-small"
            icon={<AiOutlineUser />}
            assistiveText="user icon"
            title="user icon"
          />
        </div>
        <SidebarItem
          name="home"
          label="Home"
          onClick={() => navigate("/")}
          icon={<FcHome size={50} />}
        />
        <SidebarItem
          name="create"
          label="Create"
          onClick={() => navigate("/create")}
          icon={<FcAddImage size={50} />}
        />
      </Sidebar>
      <div
        style={{
          flex: 1,
          padding: "32px",
          backgroundColor: "#f2f2f2",
          display: "flex",
          flexDirection: "column",
          overflow: "scroll",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Layouts;
