import { useState, useMemo } from "react";

const GroupComponent1 = ({
  pRODCOL1337631041FRONT342,
  cM,
  propBackgroundColor,
  propBackgroundColor1,
  propColor,
}) => {
  const [kES3500TextValue, setKES3500TextValue] = useState("");
  const groupDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const cMStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="h-[242px] flex flex-col items-center justify-start text-left text-xl text-gray-700 font-lato">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="eager"
        alt=""
        src={pRODCOL1337631041FRONT342}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-2">
        <div className="flex-1 flex flex-col items-center justify-start gap-[11px]">
          <div className="flex flex-row items-start justify-start py-0 pr-[15px] pl-[9px]">
            <div
              className="rounded-6xs bg-black flex flex-row items-center justify-center py-[9px] pr-0.5 pl-[5px] whitespace-nowrap border-[1px] border-solid border-black"
              style={groupDivStyle}
            >
              <div
                className="h-11 w-[74.5px] relative rounded-6xs bg-black box-border hidden border-[1px] border-solid border-black"
                style={rectangleDivStyle}
              />
              <div
                className="h-6 w-[65px] relative inline-block z-[1]"
                style={cMStyle}
              >
                {cM}
              </div>
            </div>
          </div>
          <input
            className="[border:none] [outline:none] font-lato text-xl bg-[transparent] self-stretch h-6 relative text-black text-left inline-block shrink-0 min-w-[58px] mq800:text-base"
            placeholder="KES 3,500"
            type="text"
            value={kES3500TextValue}
            onChange={(event) => setKES3500TextValue(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
