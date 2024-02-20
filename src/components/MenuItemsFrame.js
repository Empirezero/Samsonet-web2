import { useMemo } from "react";

const MenuItemsFrame = ({
  image2,
  selection,
  selectionDisabled,
  selectionDisabled1,
  propPadding,
  propWidth,
}) => {
  const menuItemsFrameStyle = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  return (
    <div
      className="w-[327px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full text-left text-xl text-black font-radio-canada"
      style={menuItemsFrameStyle}
    >
      <div className="self-stretch bg-gainsboro-300 flex flex-col items-center justify-start pt-[7px] pb-[25px] pr-[45px] pl-7 box-border gap-[11px] max-w-full mq800:pr-5 mq800:box-border">
        <div className="w-[327px] h-[500px] relative bg-gainsboro-300 hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-4">
          <img
            className="h-[358px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[1]"
            loading="eager"
            alt=""
            src={image2}
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex flex-col items-end justify-start gap-[5px]">
            <div className="flex flex-row items-start justify-start gap-[11px]">
              <img
                className="h-[15px] w-[15px] relative min-h-[15px] z-[1]"
                loading="eager"
                alt=""
                src={selection}
              />
              <img
                className="h-[15px] w-[15px] relative min-h-[15px] z-[1]"
                alt=""
                src={selectionDisabled}
              />
              <img
                className="h-[15px] w-[15px] relative min-h-[15px] z-[1]"
                alt=""
                src={selectionDisabled1}
              />
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-[39px] pl-0">
              <div className="flex flex-col items-start justify-start">
                <b className="w-[120px] h-6 relative inline-block whitespace-nowrap z-[1] mq800:text-base">
                  MAJOR-LITE
                </b>
                <div className="w-[105px] h-[19px] relative text-base inline-block z-[1]">
                  Spinner 69cm
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start">
          <b className="h-6 w-[105px] relative inline-block z-[1] mq800:text-base">
            Ksh 61999
          </b>
        </div>
      </div>
    </div>
  );
};

export default MenuItemsFrame;
