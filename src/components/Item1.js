import { useMemo } from "react";

const Item1 = ({
  image2,
  selection,
  selectionDisabled,
  selectionDisabled1,
  propPadding,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="w-[314px] bg-gainsboro-300 shrink-0 flex flex-col items-center justify-start pt-[7px] pb-6 pr-[42px] pl-[26px] box-border gap-[11px] text-left text-xl text-black font-radio-canada">
      <div className="w-[314.3px] h-[482px] relative bg-gainsboro-300 hidden" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-4">
        <img
          className="h-[345.1px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[1]"
          alt=""
          src={image2}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start">
        <div
          className="w-[153px] flex flex-col items-end justify-start gap-[5px]"
          style={frameDiv1Style}
        >
          <div className="h-[15px] flex flex-row items-start justify-start gap-[11px]">
            <img
              className="h-[14.5px] w-[14.4px] relative z-[1]"
              alt=""
              src={selection}
            />
            <img
              className="h-[14.5px] w-[14.4px] relative z-[1]"
              alt=""
              src={selectionDisabled}
            />
            <img
              className="h-[14.5px] w-[14.4px] relative z-[1]"
              alt=""
              src={selectionDisabled1}
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <b className="w-[123px] h-[23px] relative inline-block z-[1] mq800:text-base">
              MAJOR-LITE
            </b>
            <div className="self-stretch h-[19.2px] relative text-base inline-block z-[1]">
              Spinner 69cm
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start">
        <b className="h-[23px] w-[152.9px] relative inline-block shrink-0 z-[1] mq800:text-base">
          Ksh 61999
        </b>
      </div>
    </div>
  );
};

export default Item1;
