import { useMemo } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const GroupComponent = ({ name1, propWidth }) => {
  const nameStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[6px] max-w-full text-left text-5xl text-black font-lato">
      <div
        className="w-[63px] h-[26.2px] relative inline-block mq450:text-lgi"
        style={nameStyle}
      >
        {name1}
      </div>
      <div className="self-stretch flex flex-row items-start justify-end max-w-full">
        <TextField
          className="[border:none] bg-[transparent] h-[50.5px] w-[466px] relative"
          sx={{ width: 466 }}
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default GroupComponent;
