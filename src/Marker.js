import { Icon } from "@iconify/react";

const Marker = ({ lat, lng, onClick }) => {
  return (
    <Icon
      icon="fluent:vehicle-truck-profile-16-filled"
      hFlip={true}
      style={{ color: "red", fontSize: "2rem" }}
    />
  );
};

export default Marker;
