import CircularProgress from "@mui/material/CircularProgress";
import "./modules/loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Loading;
