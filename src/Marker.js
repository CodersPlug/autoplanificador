/*
TODO:
+ Agregar defaults
+ Agregar TYPES
+ Mostrar alertas como SNACKBARS
*/
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

const Marker = ({ operador, estado }) => {
  const url =
    "https://faces-img.xcdn.link/image-lorem-face-" + operador + ".jpg";

  return (
    <Badge
      sx={{
        "& .MuiBadge-badge": {
          backgroundColor: estado,
          width: 50,
          height: 20
        }
      }}
      overlap="circular"
      badgeContent="19.200"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
    >
      <Avatar
        src={url}
        sx={{
          width: 80,
          height: 80,
          borderStyle: "solid",
          borderWidth: "2px"
        }}
      />
    </Badge>
  );
};

export default Marker;
