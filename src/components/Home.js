import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import MenuItemsFrame from "./MenuItemsFrame";
import Item1 from "./Item1";
import Item from "./Item";

const Home = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  return (
    <div className="bg-white overflow-auto flex flex-col items-end justify-start gap-[53px] tracking-[normal] text-left text-5xl text-gray-200 font-lato mq1350:gap-[26px]">
      
      <section className="self-stretch h-[233px] flex flex-col items-start justify-start gap-[1px] max-w-full text-left text-5xl text-gray-200 font-lato">
        <div className="self-stretch h-[65px] bg-gray-500 box-border flex flex-row items-center justify-center pt-2 px-2 pb-[9px] relative max-w-full border-[3px] border-solid border-black">
          <div className="h-[65px] w-[1446px] relative bg-gray-500 box-border hidden max-w-full z-[0] border-[3px] border-solid border-black" />
          <a
            className="h-[42px] w-[460px] absolute my-0 mx-[!important] top-[8px] left-[490px] text-[inherit] inline-block [text-decoration:none] z-[1] mq800:text-lgi"
            href="https://www.samsonite.in/shipping-and-delivery.html"
            target="_blank"
          >{`Free shipping on all orders *T&C apply`}</a>
        </div>
        <header className="self-stretch flex-1 flex flex-col items-start justify-start max-w-full text-left text-xs text-white font-lato">
          <div className="self-stretch flex-1 flex flex-row items-start justify-end py-[26px] px-[85px] relative">
            <img
              className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[1px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-2.svg"
            />
            <div
              className="h-[54px] flex flex-col items-end justify-start pt-0 px-0 pb-0 box-border gap-[1px] cursor-pointer z-[1]"
              onClick={onGroupContainerClick}
            >
              <div className="flex flex-row items-start justify-start py-0 px-1">
                <div className="h-[13.8px] w-[7px] relative inline-block">
                  {/* 0 */}
                </div>
              </div>
              <div className="w-[42px] h-10 relative">
                <img
                  className="absolute top-[-0.2px] left-[0px] w-10 h-10 overflow-hidden"
                  loading="eager"
                  alt=""
                  src="/bytesizecart1.svg"
                />
                <div className="absolute top-[-0.2px] left-[26px] rounded-[50%] bg-darkslateblue w-4 h-4 z-[1] text-center text-white text-2xl font-bold leading-4
                ">
                  1
                </div>
              </div>
            </div>
          </div>
          <Navigation
            propAlignSelf="stretch"
            propMarginTop="-50px"
            propFlex="1"
          />
        </header>
      </section>
      <section className="w-full flex flex-col items-start justify-start pt-[252px] px-[97px] pb-[253px] box-border gap-[18px] bg-[url('/public/pic1-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 text-left text-[27px] text-white font-lato mq800:py-[107px] mq800:px-5 mq800:box-border mq1350:py-[164px] mq1350:px-12 mq1350:box-border">
        <img
          className="w-[1440.2px] h-[761.3px] relative object-cover hidden max-w-full"
          alt=""
          src="/pic1-1@2x.png"
        />
        <h3 className="m-0 w-[529.2px] h-[136.9px] relative text-inherit inline-block shrink-0 max-w-full z-[1] font-inherit mq800:text-3xl">
          <p className="m-0 font-extrabold">{`STYLE AND PERFORMANCE `}</p>
          <p className="m-0 font-medium">{`REACH NEW HEIGHTS `}</p>
          <p className="m-0 font-medium">THANKS TO LITE-BOX ALU</p>
        </h3>
        <TextField
          className="[border:none] bg-[transparent] w-[423px] h-[103px] font-lato font-extrabold text-3xl text-black z-[1]"
          sx={{ width: 423 }}
          variant="outlined"
        />
      </section>
      <div className="w-full flex flex-row items-start justify-start py-0 px-[63px] box-border max-w-full shrink-0 text-black font-radio-canada mq800:pl-5 mq800:pr-5 mq800:box-border">
        <b className="h-7 w-[296px] relative inline-block shrink-0 mq800:text-lgi">
          OUR RECOMENDATIONS
        </b>
      </div>
      <section className="w-full flex flex-row items-start justify-center py-0 pr-[29px] pl-5 box-border max-w-full shrink-0 text-left text-3xl text-black font-lato">
        <div className="flex flex-col items-start justify-start gap-[66px] max-w-full mq1350:gap-[16px] mq1150:gap-[33px]">
          <div className="flex flex-row items-start justify-start gap-[56px] max-w-full mq1350:gap-[28px] mq1150:flex-wrap">
            <MenuItemsFrame
              image2="/image-2@2x.png"
              selection="/selection1.svg"
              selectionDisabled="/selectiondisabled.svg"
              selectionDisabled1="/selectiondisabled-11.svg"
              propPadding="2px 0px 0px"
              propWidth="327px"
            />
            <div
              className="w-[365px] flex flex-col items-start justify-start max-w-full cursor-pointer"
              onClick={onGroupContainer2Click}
            >
              <div className="self-stretch bg-whitesmoke flex flex-col items-center justify-start pt-[180px] pb-2 pr-[76px] pl-8 box-border gap-[41px] max-w-full mq800:gap-[20px] mq800:pr-5 mq800:box-border mq1350:pt-[117px] mq1350:pb-5 mq1350:box-border">
                <div className="w-[365px] h-[509px] relative bg-whitesmoke hidden max-w-full" />
                <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-2">
                  <img
                    className="h-[143px] w-[213px] relative object-cover z-[1]"
                    loading="eager"
                    alt=""
                    src="/rectangle-6@2x.png"
                  />
                </div>
                <div className="w-[111px] flex flex-row items-start justify-end">
                  <div className="flex flex-row items-start justify-start gap-[11px]">
                    <img
                      className="h-[15px] w-[15px] relative min-h-[15px] z-[1]"
                      alt=""
                      src="/selection1.svg"
                    />
                    <img
                      className="h-[15px] w-[15px] relative min-h-[15px] z-[1]"
                      alt=""
                      src="/selectiondisabled.svg"
                    />
                    <img
                      className="h-[15px] w-[15px] relative min-h-[15px] z-[1]"
                      alt=""
                      src="/selectiondisabled-11.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="w-[79px] h-[26px] relative font-extrabold inline-block z-[1] mq800:text-lg">
                        BE-HER
                      </div>
                      <div className="w-[129px] h-[22px] relative text-lg text-gray-900 inline-block z-[1] mt-[-1px]">
                        Shoulder bag XS
                      </div>
                    </div>
                    <b className="w-[152px] h-[22px] relative text-lg inline-block text-gray-900 z-[1]">
                      KSH2399 incl. VAT
                    </b>
                  </div>
                </div>
              </div>
              <button className="self-stretch h-[59px] border-[3px] border-solid border-black bg-white hover:cursor-pointer hover:text-white hover:bg-black transition-all duration-300 ease-in-out
               text-black font-bold text-xl
              ">
                Add to Cart
              </button>
            </div>
            <MenuItemsFrame
              image2="/image-2@2x.png"
              selection="/selection1.svg"
              selectionDisabled="/selectiondisabled.svg"
              selectionDisabled1="/selectiondisabled-11.svg"
              propPadding="9px 0px 0px"
              propWidth="327px"
            />
          </div>
          <div className="w-[1131px] overflow-x-auto flex flex-row items-end justify-start gap-[68px] max-w-full text-xl font-radio-canada mq1350:gap-[17px] mq1150:gap-[34px]">
            <MenuItemsFrame
              image2="/image-2@2x.png"
              selection="/selection1.svg"
              selectionDisabled="/selectiondisabled.svg"
              selectionDisabled1="/selectiondisabled-11.svg"
              propPadding="0px 0px 7px"
              propWidth="327px"
            />
            <MenuItemsFrame
              image2="/image-2@2x.png"
              selection="/selection1.svg"
              selectionDisabled="/selectiondisabled.svg"
              selectionDisabled1="/selectiondisabled-11.svg"
              propPadding="0px 14px 0px 0px"
              propWidth="341px"
            />
            <div className="w-[327px] bg-gainsboro-300 shrink-0 flex flex-col items-center justify-start pt-[7px] pb-[25px] pr-[45px] pl-7 box-border gap-[11px]">
              <div className="w-[327px] h-[500px] relative bg-gainsboro-300 hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-4">
                <img
                  className="h-[358px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[1]"
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex flex-col items-end justify-start gap-[5px]">
                  <div className="flex flex-row items-start justify-start gap-[11px]">
                    <img
                      className="h-[15px] w-[15px] relative min-h-[15px] z-[1]"
                      alt=""
                      src="/selection1.svg"
                    />
                    <img
                      className="h-[15px] w-[15px] relative min-h-[15px] z-[1]"
                      alt=""
                      src="/selectiondisabled.svg"
                    />
                    <img
                      className="h-[15px] w-[15px] relative min-h-[15px] z-[1]"
                      alt=""
                      src="/selectiondisabled-11.svg"
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
        </div>
      </section>
      <section className="w-full bg-gainsboro-200 box-border flex flex-row flex-wrap items-start justify-center py-0 pr-[49px] pl-[9px] relative gap-[36px] max-w-full shrink-0 text-left text-mini text-black font-inter border-b-[1px] border-solid border-gray-600 mq1350:gap-[18px] mq1350:pr-6 mq1350:box-border">
        <div className="self-stretch w-[1438px] relative bg-gainsboro-200 box-border hidden max-w-full z-[0] border-b-[1px] border-solid border-gray-600" />
        <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[435px] max-w-full shrink-0 mq1350:min-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-[25px] max-w-full mq1350:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <img
                className="w-[106px] h-[106px] relative overflow-hidden shrink-0 z-[1]"
                loading="eager"
                alt=""
                src="/mdistopwatchoutline.svg"
              />
              <img
                className="w-[106px] h-[106px] relative overflow-hidden shrink-0 z-[1]"
                loading="eager"
                alt=""
                src="/mdiencryptionsecureoutline.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[350px] max-w-full mq800:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[55px] max-w-full mq1350:gap-[27px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full">
                  <div className="w-[450px] h-[18px] relative font-semibold inline-block max-w-full z-[1]">
                    FAST AND STANDARD DELIVERY FOR ORDERS OVER KES1000
                  </div>
                  <div className="self-stretch h-[34px] relative text-sm font-medium inline-block z-[1]">
                    Samsonite uses only the best courier services and guarantees
                    the safe delivery of all your online orders.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
                  <div className="w-[137px] h-[18px] relative font-semibold inline-block z-[1]">
                    SECURE PAYMENT
                  </div>
                  <div className="self-stretch h-[34px] relative text-sm font-medium inline-block z-[1]">
                    Secure Socket Layer (SSL) encryption is used for every
                    transaction in order to ensure that your order is secure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[318px] w-px relative box-border z-[1] border-r-[1px] border-solid border-black mq1150:w-full mq1150:h-px" />
        <div className="w-[637px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full shrink-0">
          <div className="self-stretch flex flex-row items-center justify-start gap-[20px] max-w-full mq1350:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <img
                className="w-[106px] h-[106px] relative overflow-hidden shrink-0 z-[1]"
                loading="eager"
                alt=""
                src="/materialsymbolsquestionexchangerounded.svg"
              />
              <img
                className="w-[106px] h-[106px] relative overflow-hidden shrink-0 z-[1]"
                loading="eager"
                alt=""
                src="/biglobe.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[69px] min-w-[332px] max-w-full mq800:gap-[17px] mq1350:gap-[34px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="w-[145px] h-[18px] relative font-semibold inline-block z-[1]">
                  RETURNS ARE FREE
                </div>
                <div className="self-stretch h-[34px] relative text-sm font-medium inline-block z-[1]">
                  Shopping at Samsonite is risk-free. We guarantee your
                  satisfaction by offering free returns.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[22px] text-sm">
                <div className="w-[241px] h-[17px] relative font-semibold inline-block z-[1]">
                  GLOBAL COMMERCIAL WARRANTY
                </div>
                <div className="self-stretch h-[34px] relative font-semibold inline-block z-[1]">
                  Samsonite gurantees worldwide commercial warranty services to
                  ensure your Samsonite luggage can always stay by your side.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px w-[calc(100%_+_1px)] absolute my-0 mx-[!important] top-[150.3px] right-[-1.4px] left-[0.4px] box-border z-[2] border-t-[1px] border-solid border-black" />
      </section>
      <section className="w-full flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[29px] max-w-full shrink-0 text-left text-5xl text-black font-radio-canada">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq800:flex-wrap mq800:justify-center">
          <b className="h-7 w-[71px] relative inline-block mq800:text-lgi">
            SORT
          </b>
          <b className="h-7 w-[154px] relative inline-block shrink-0 mq800:text-lgi">
            FILTER BY
          </b>
        </div>
        <div className="w-full  justify-center h-[1514px] overflow-x-auto shrink-0 flex flex-row flex-wrap items-start  box-border  max-w-full text-xl mq1350:gap-[15px]">
          <Item1
            image2="/image-2-5@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-12.svg"
            selectionDisabled1="/selectiondisabled-13.svg"
          />
          <Item
            image2="/image-2-6@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-14.svg"
            selectionDisabled1="/selectiondisabled-15.svg"
          />
          <div className="w-[315px] bg-gainsboro-300 shrink-0 flex flex-col items-center justify-start pt-[7px] pb-6 pr-[42px] pl-[27px] box-border gap-[11px]">
            <div className="w-[314.3px] h-[482px] relative bg-gainsboro-300 hidden" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-[15px]">
              <img
                className="h-[345.1px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[1]"
                alt=""
                src="/image-2-7@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="w-[153px] flex flex-col items-end justify-start gap-[5px]">
                <div className="h-[15px] flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[10px]">
                  <img
                    className="h-[14.5px] w-[14.4px] relative z-[1]"
                    alt=""
                    src="/selection-6.svg"
                  />
                  <img
                    className="h-[14.5px] w-[14.4px] relative z-[1]"
                    alt=""
                    src="/selectiondisabled-14.svg"
                  />
                  <img
                    className="h-[14.5px] w-[14.4px] relative z-[1]"
                    alt=""
                    src="/selectiondisabled-15.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-0">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <b className="w-[123px] h-[23px] relative inline-block z-[1] mq800:text-base">
                      MAJOR-LITE
                    </b>
                    <div className="self-stretch h-[19.2px] relative text-base inline-block z-[1]">
                      Spinner 69cm
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <b className="h-[23px] w-[151px] relative inline-block shrink-0 z-[1] mq800:text-base">
                Ksh 61999
              </b>
            </div>
          </div>
          <Item1
            image2="/image-2-8@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-14.svg"
            selectionDisabled1="/selectiondisabled-15.svg"
            propPadding="0px 0px 0px 2px"
          />
          <Item1
            image2="/image-2-5@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-12.svg"
            selectionDisabled1="/selectiondisabled-13.svg"
            propPadding="unset"
          />
          <Item
            image2="/image-2-6@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-14.svg"
            selectionDisabled1="/selectiondisabled-15.svg"
          />
          <div className="w-[315px] bg-gainsboro-300 shrink-0 flex flex-col items-center justify-start pt-[7px] pb-6 pr-[42px] pl-[27px] box-border gap-[11px]">
            <div className="w-[314.3px] h-[482px] relative bg-gainsboro-300 hidden" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-[15px]">
              <img
                className="h-[345.1px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[1]"
                alt=""
                src="/image-2-7@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="w-[153px] flex flex-col items-end justify-start gap-[5px]">
                <div className="h-[15px] flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[10px]">
                  <img
                    className="h-[14.5px] w-[14.4px] relative z-[1]"
                    alt=""
                    src="/selection-6.svg"
                  />
                  <img
                    className="h-[14.5px] w-[14.4px] relative z-[1]"
                    alt=""
                    src="/selectiondisabled-14.svg"
                  />
                  <img
                    className="h-[14.5px] w-[14.4px] relative z-[1]"
                    alt=""
                    src="/selectiondisabled-15.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-0">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <b className="w-[123px] h-[23px] relative inline-block z-[1] mq800:text-base">
                      MAJOR-LITE
                    </b>
                    <div className="self-stretch h-[19.2px] relative text-base inline-block z-[1]">
                      Spinner 69cm
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <b className="h-[23px] w-[151px] relative inline-block shrink-0 z-[1] mq800:text-base">
                Ksh 61999
              </b>
            </div>
          </div>
          <Item1
            image2="/image-2-8@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-14.svg"
            selectionDisabled1="/selectiondisabled-15.svg"
            propPadding="0px 0px 0px 2px"
          />
          <Item1
            image2="/image-2-5@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-12.svg"
            selectionDisabled1="/selectiondisabled-13.svg"
            propPadding="unset"
          />
          <Item
            image2="/image-2-6@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-14.svg"
            selectionDisabled1="/selectiondisabled-15.svg"
          />
          <div className="w-[315px] bg-gainsboro-300 shrink-0 flex flex-col items-center justify-start pt-[7px] pb-6 pr-[42px] pl-[27px] box-border gap-[11px]">
            <div className="w-[314.3px] h-[482px] relative bg-gainsboro-300 hidden" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-[15px]">
              <img
                className="h-[345.1px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[1]"
                alt=""
                src="/image-2-7@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="w-[153px] flex flex-col items-end justify-start gap-[5px]">
                <div className="h-[15px] flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[10px]">
                  <img
                    className="h-[14.5px] w-[14.4px] relative z-[1]"
                    alt=""
                    src="/selection-6.svg"
                  />
                  <img
                    className="h-[14.5px] w-[14.4px] relative z-[1]"
                    alt=""
                    src="/selectiondisabled-14.svg"
                  />
                  <img
                    className="h-[14.5px] w-[14.4px] relative z-[1]"
                    alt=""
                    src="/selectiondisabled-15.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-0">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <b className="w-[123px] h-[23px] relative inline-block z-[1] mq800:text-base">
                      MAJOR-LITE
                    </b>
                    <div className="self-stretch h-[19.2px] relative text-base inline-block z-[1]">
                      Spinner 69cm
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <b className="h-[23px] w-[151px] relative inline-block shrink-0 z-[1] mq800:text-base">
                Ksh 61999
              </b>
            </div>
          </div>
          <Item1
            image2="/image-2-8@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-14.svg"
            selectionDisabled1="/selectiondisabled-15.svg"
            propPadding="0px 0px 0px 2px"
          />
        </div>
      </section>
      <section className="w-full bg-gainsboro-100 flex flex-col items-center justify-start pt-[29px] pb-[19px] pr-[63px] pl-5 box-border gap-[28px] max-w-full shrink-0 text-left text-[40px] text-black font-radio-canada mq800:pr-5 mq800:box-border">
        <div className="w-[1439px] h-[209px] relative bg-gainsboro-100 hidden max-w-full" />
        <div className="flex flex-col items-center justify-start">
          <h1 className="m-0 w-[272px] h-[49px] relative text-inherit font-bold font-inherit inline-block z-[1] mq800:text-5xl mq1350:text-13xl">
            NEWSLETTER
          </h1>
          <div className="w-[242px] flex flex-row items-start justify-start py-0 pr-0 pl-1.5 box-border text-10xl">
            <h3 className="m-0 h-[33px] flex-1 relative text-inherit font-normal font-inherit inline-block z-[1] mq800:text-[23px]">
              Stay by our side
            </h3>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-2.5">
          <button className="cursor-pointer [border:none] pt-[11px] pb-2.5 pr-1.5 pl-2.5 bg-gray-300 flex flex-row items-center justify-center whitespace-nowrap z-[1] hover:bg-darkslategray">
            <div className="h-[51px] w-[194px] relative bg-gray-300 hidden" />
            <b className="h-[30px] w-[177px] relative text-xl inline-block font-radio-canada text-white text-center z-[1]">
              SUBSCRIBE NOW
            </b>
          </button>
        </div>
      </section>
      <section className="w-full flex flex-col items-end justify-start pt-[70px] pb-0 pr-0 pl-[25px] box-border gap-[48px] bg-[url('/public/sand-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 text-left text-11xl text-white font-lato mq800:pt-[29px] mq800:box-border mq1350:gap-[24px] mq450:pt-[45px] mq450:box-border">
        <img
          className="self-stretch h-[827px] relative max-w-full overflow-hidden max-h-full object-cover hidden"
          alt=""
          src="/sand-1@2x.png"
        />
        <div className="w-[1393px] flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq1150:flex-wrap">
            <div className="w-[906px] flex flex-row items-start justify-start gap-[122px] max-w-full mq800:gap-[30px] mq450:flex-wrap mq450:gap-[61px]">
              <div className="flex flex-col items-start justify-start gap-[20px] min-w-[318px] mq450:flex-1">
                <h3 className="m-0 w-[214.1px] h-9 relative text-inherit font-extrabold font-inherit inline-block z-[1] mq800:text-lg mq1350:text-5xl">
                  Support / FAQS
                </h3>
                <div className="flex flex-row items-start justify-end py-0 pr-0 pl-10 text-gray-1000">
                  <h3 className="m-0 h-[189px] w-[278.2px] relative text-inherit font-medium font-inherit inline-block shrink-0 z-[1] mq800:text-lg mq1350:text-5xl">
                    <p className="[margin-block-start:0] [margin-block-end:15px]">{`Delivery & Shipping`}</p>
                    <p className="[margin-block-start:0] [margin-block-end:15px]">{`Returns & Exchanges`}</p>
                    <p className="[margin-block-start:0] [margin-block-end:15px]">
                      Warranty
                    </p>
                    <p className="m-0">Contact Us</p>
                  </h3>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[303px] max-w-full">
                <h3 className="m-0 w-[188.1px] h-9 relative text-inherit font-extrabold font-inherit inline-block z-[1] mq800:text-lg mq1350:text-5xl">
                  Our Company
                </h3>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-8 box-border max-w-full text-gray-1000">
                  <h3 className="m-0 h-60 flex-1 relative text-inherit font-medium font-inherit inline-block max-w-full z-[1] mq800:text-lg mq1350:text-5xl">
                    <p className="[margin-block-start:0] [margin-block-end:15px]">
                      About Samsonite
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:15px]">
                      Careers
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:15px]">
                      Investor Relations
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:15px]">
                      Store and Service Centre Locator
                    </p>
                    <p className="m-0">Sustainability</p>
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-[280px] flex flex-col items-start justify-start gap-[14px]">
              <h3 className="m-0 w-[113px] h-9 relative text-inherit font-extrabold font-inherit inline-block z-[1] mq800:text-lg mq1350:text-5xl">
                Account
              </h3>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[15px] text-gray-1000">
                <h3 className="m-0 h-[174px] flex-1 relative text-inherit font-medium font-inherit inline-block z-[1] mq800:text-lg mq1350:text-5xl">
                  <p className="[margin-block-start:0] [margin-block-end:15px]">
                    Track Order
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:15px]">
                    Sign In
                  </p>
                  <p className="m-0">Samsonite Loyalty Program</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[413px] relative max-w-full text-13xl text-gray-1000 mq1350:h-auto mq1350:min-h-[413]">
          <div className="absolute top-[0px] left-[47px] w-[682px] flex flex-row items-end justify-start gap-[39px] max-w-full mq1350:flex-wrap">
            <div className="h-[230px] flex-1 relative min-w-[291px] max-w-full">
              <img
                className="absolute top-[38.3px] left-[256.2px] w-48 h-48 object-cover z-[1]"
                loading="eager"
                alt=""
                src="/americantouristerlogo-11@2x.png"
              />
              <h2 className="m-0 absolute top-[0.3px] left-[0.2px] text-inherit [text-decoration:underline] font-bold font-inherit inline-block w-[278.2px] z-[1] mq800:text-lgi mq1350:text-7xl">
                Our other brands:
              </h2>
            </div>
            <div className="h-[163px] w-[195px] flex flex-col items-start justify-start pt-0 px-0 pb-[29px] box-border min-w-[195px] mq1350:flex-1">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1] mq1350:self-stretch mq1350:w-auto"
                loading="eager"
                alt=""
                src="/hign-sierra-11@2x.png"
              />
            </div>
          </div>
          <img
            className="absolute top-[256px] left-[0px] w-[1390px] h-[60px] z-[1]"
            alt=""
            src="/bottom.svg"
          />
          <div className="absolute top-[330px] left-[23.1px] text-xl text-white inline-block w-[1151.8px] z-[1] mq800:text-base">
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
          <h2 className="m-0 absolute top-[370px] left-[1315px] text-17xl font-bold font-inherit text-gray-1100 z-[1] mq800:text-3xl mq1350:text-10xl">
            Kenya
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
