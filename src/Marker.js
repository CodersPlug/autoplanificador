/*
TODO:
+ Agregar defaults
+ Agregar TYPES
+ Mostrar alertas como SNACKBARS
*/
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

const Marker = ({ operadorID, operadorNombre, unidad, estado, litros }) => {
  const url =
    "https://faces-img.xcdn.link/image-lorem-face-" + operadorID + ".jpg";
  const tip = unidad + " | " + operadorNombre + " | " + estado;
  const color = estado === "Disponible" ? "lightGreen" : "yellow";

  return (
    <Tooltip title={tip} TransitionComponent={Zoom} arrow placement="top">
      <Badge
        sx={{
          "& .MuiBadge-badge": {
            backgroundColor: color,
            width: 60,
            height: 20
          }
        }}
        overlap="circular"
        badgeContent={litros}
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
            borderWidth: "3px",
            borderColor: color
          }}
        />
      </Badge>
    </Tooltip>
  );
};

export default Marker;
