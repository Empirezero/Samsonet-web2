import { useState } from "react";

const DeliveryShippingReturnsExch = ({ pRODCOL1337631041FRONT342, cM }) => {
  const [kES3500Text2Value, setKES3500Text2Value] = useState("");
  return (
    <div className="h-[244px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border text-left text-xl text-gray-800 font-lato">
      <div className="self-stretch flex-1 flex flex-col items-center justify-start">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={pRODCOL1337631041FRONT342}
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-[9px]">
          <div className="flex-1 flex flex-col items-center justify-start gap-[11px]">
            <div className="flex flex-row items-start justify-start py-0 pr-3.5 pl-2.5">
              <div className="rounded-6xs bg-white flex flex-row items-center justify-center py-[9px] pr-0.5 pl-[5px] whitespace-nowrap border-[1px] border-solid border-black">
                <div className="h-11 w-[74px] relative rounded-6xs bg-white box-border hidden border-[1px] border-solid border-black" />
                <div className="h-6 w-[65px] relative inline-block z-[1]">
                  {cM}
                </div>
              </div>
            </div>
            <input
              className="[border:none] [outline:none] font-lato text-xl bg-[transparent] self-stretch h-6 relative text-black text-left inline-block min-w-[58px] mq800:text-base"
              placeholder="KES 3,500"
              type="text"
              value={kES3500Text2Value}
              onChange={(event) => setKES3500Text2Value(event.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryShippingReturnsExch;
