import { useMemo } from "react";

const Footercontents = ({ propPadding }) => {
  const bottomLayoutContainerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[23px] box-border max-w-full text-left text-17xl text-gray-1100 font-lato">
      <div
        className="flex-1 flex flex-col items-end justify-start max-w-full"
        style={bottomLayoutContainerStyle}
      >
        <footer className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-xl text-white font-lato">
          <div className="h-12 w-[1171.8px] relative inline-block shrink-0 max-w-full box-border pr-5 z-[1] mq800:text-base">
            {`Copyright © 2024 Samsonite. All rights reserved. Visit our `}
            <a
              className="text-[inherit]"
              href="https://www.samsonite.com/investors/home.do"
              target="_blank"
            >
              <span className="[text-decoration:underline]">
                corporate site
              </span>
            </a>{" "}
            for more information. Samsonite and the Samsonite logo are
            registered trademarks of Samsonite IP Holdings S.àr.l.
          </div>
        </footer>
        <h2 className="m-0 w-[102px] h-[43px] relative text-inherit font-bold font-inherit inline-block z-[1] mt-[-8px] mq800:text-3xl mq1350:text-10xl">
          Kenya
        </h2>
      </div>
    </div>
  );
};

export default Footercontents;
