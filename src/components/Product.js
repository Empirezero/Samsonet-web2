import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import GroupComponent1 from "./GroupComponent1";
import DeliveryShippingReturnsExch from "./DeliveryShippingReturnsExch";
import Footercontents from "./Footercontents";

const Product = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHOMESHOPClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // navigate to /checkout
  const onButtonContainedClick = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

  return (
    <div className="bg-white overflow-hidden flex flex-col items-center justify-start gap-[22px] tracking-[normal]">
      <div className="w-[1307px] h-[6452px] relative bg-white hidden max-w-full" />
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
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[19px] box-border gap-[20px] max-w-full text-left text-5xl text-black font-lato">
        <div className="flex flex-row items-start justify-start py-0 px-[55px] box-border max-w-full mq1350:pl-[27px] mq1350:pr-[27px] mq1350:box-border">
          <div
            className="h-[29px] w-[526px] relative font-light inline-block cursor-pointer"
            onClick={onHOMESHOPClick}
          >{`HOME > SHOP > LUGGAGE > SBL RICHMOND II`}</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-xl">
          <div className="h-6 w-[145px] absolute my-0 mx-[!important] right-[309px] bottom-[-13px] font-semibold inline-block z-[2] mq800:text-base">
            SPINNER 55/20
          </div>
          <div className="flex-1 flex flex-row items-start justify-between pt-[158px] pb-[15px] pr-[152px] pl-[102px] box-border bg-cover bg-no-repeat bg-[top] gap-[20px] max-w-full mq800:pl-5 mq800:pr-5 mq800:box-border mq1350:flex-wrap mq1350:pl-[51px] mq1350:pr-[76px] mq1350:box-border">
            <img
              className="h-[245px] w-[1440px] relative object-cover hidden max-w-full"
              alt=""
              src="/samsonitecoverfallbackfinal-1@2x.png"
            />
            <div className="h-6 w-[149px] relative font-medium inline-block z-[2] mq800:text-base">
              PRODUCT INFO
            </div>
            <div className="flex flex-col items-start justify-start gap-[5px]">
              <div className="w-[195px] h-6 relative inline-block z-[2] mq800:text-base">
                Samsonite Black Label
              </div>
              <h2 className="m-0 w-[302px] h-[43px] relative text-17xl font-semibold font-inherit inline-block z-[2] mq800:text-3xl mq1350:text-10xl">
                SBL RICHMOND II
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1280px] flex flex-row items-start justify-end pt-0 px-5 pb-[191px] box-border max-w-full shrink-0 text-left text-5xl text-black font-lato mq800:pb-[34px] mq800:box-border mq450:pb-[53px] mq450:box-border mq1150:pb-[81px] mq1150:box-border">
        <div className="w-[969px] flex flex-col items-end justify-start gap-[22px] max-w-full">
          <div className="w-[958px] flex flex-row items-start justify-start relative max-w-full text-base text-gray-900">
            <img
              className="h-[624px] w-[415px] absolute my-0 mx-[!important] top-[-129px] left-[0px] object-cover z-[2]"
              loading="eager"
              alt=""
              src="/prod-col-133763-1041-front3421-1@2x.png"
            />
            <div className="flex-1 flex flex-col items-end justify-start pt-0 px-0 pb-2 box-border gap-[42px] max-w-full mq1350:gap-[21px]">
              <div className="w-[484px] flex flex-col items-end justify-start gap-[20px] max-w-full">
                <div className="self-stretch h-px relative box-border opacity-[0.75] z-[2] border-t-[1px] border-solid border-black" />
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[7px] pr-2.5 pl-0 box-border max-w-full shrink-0">
                  <div className="flex-1 grid flex-row items-start justify-start gap-[11px] max-w-full grid-cols-[repeat(4,_minmax(83px,_1fr))] z-[2] mq800:justify-center mq800:grid-cols-[minmax(83px,_1fr)]">
                    <GroupComponent1
                      pRODCOL1337631041FRONT342="/prod-col-133763-1041-front3421-2@2x.png"
                      cM="55 CM"
                      propBackgroundColor="#000"
                      propBackgroundColor1="#000"
                      propColor="rgba(255, 255, 255, 0.8)"
                    />
                    <GroupComponent1
                      pRODCOL1337631041FRONT342="/prod-col-133763-1041-front3421-2-1@2x.png"
                      cM="68 CM"
                      propBackgroundColor="#fff"
                      propBackgroundColor1="#fff"
                      propColor="rgba(0, 0, 0, 0.8)"
                    />
                    <DeliveryShippingReturnsExch
                      pRODCOL1337631041FRONT342="/prod-col-133763-1041-front3421-2-2@2x.png"
                      cM="75 CM"
                    />
                    <DeliveryShippingReturnsExch
                      pRODCOL1337631041FRONT342="/prod-col-133763-1041-front3421-2-3@2x.png"
                      cM="81 CM"
                    />
                  </div>
                </div>
                <div className="self-stretch h-[41px] flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[13px]">
                  <div className="self-stretch h-px relative box-border opacity-[0.75] z-[2] border-t-[1px] border-solid border-black" />
                  <div className="flex flex-row items-start justify-start py-0 px-2">
                    <div className="h-[19px] w-[118px] relative font-medium inline-block z-[2]">
                      Select your color
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] shrink-0">
                  <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[26px]">
                    <img
                      className="h-10 w-[35.8px] relative min-h-[40px] z-[2]"
                      loading="eager"
                      alt=""
                      src="/selection.svg"
                    />
                    <img
                      className="h-10 w-[35.8px] relative min-h-[40px] z-[2]"
                      loading="eager"
                      alt=""
                      src="/selectiondisabled.svg"
                    />
                    <img
                      className="h-10 w-[35.8px] relative min-h-[40px] z-[2]"
                      alt=""
                      src="/selectiondisabled-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[474px] flex flex-row items-start justify-start pt-0 pb-[11px] px-0 box-border max-w-full text-xl">
                <b className="h-6 w-[105px] relative inline-block z-[2] mq800:text-base">
                  Dimensions
                </b>
              </div>
              <div className="w-[482px] h-px relative box-border opacity-[0.75] max-w-full z-[2] border-t-[1px] border-solid border-black" />
              <div className="self-stretch flex flex-row items-center justify-start gap-[68px] max-w-full text-5xl text-black mq1350:gap-[17px] mq450:flex-wrap mq450:gap-[34px]">
                <div className="h-[630px] w-[407px] flex flex-col items-start justify-start pt-[97px] px-0 pb-0 box-border min-w-[407px] max-w-full mq1350:pt-[63px] mq1350:box-border mq1350:min-w-full mq450:flex-1">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[2] mq450:self-stretch mq450:w-auto"
                    loading="eager"
                    alt=""
                    src="/prod-col-133763-1041-front1-1@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[314px] max-w-full mq1350:gap-[16px]">
                  <div className="w-[427px] h-[544px] relative leading-[34px] inline-block max-w-full z-[2] mq800:text-lgi mq800:leading-[27px]">
                    <ul className="m-0 font-inherit text-inherit pl-8">
                      <li className="mb-0">Free garment bag</li>
                      <li className="mb-0">Free Luggage cover</li>
                      <li className="mb-0">Free Shirt cover</li>
                      <li className="mb-0">Free Shoe pouch</li>
                      <li className="mb-0">TSA Lock</li>
                      <li className="mb-0">Double Wheels</li>
                      <li className="mb-0">Anti-theft Security Zipper</li>
                      <li className="mb-0">Leather Wrapped Handle</li>
                      <li className="mb-0">Shoe Pouch</li>
                      <li className="mb-0">Aero-Trac™ Suspension Wheels</li>
                      <li className="mb-0">Colour:  BLACK</li>
                      <li className="mb-0">
                        Material:  2% PU 1% Leather 97% PC
                      </li>
                      <li className="mb-0">Dimension: 55.0 x 40.0 x 24.0cm</li>
                      <li className="mb-0">Volume: 38L</li>
                      <li className="mb-0">Weight: 3.69kg</li>
                      <li>Warranty: Limited lifetime warranty</li>
                    </ul>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end pt-0 px-14 pb-[61px] box-border max-w-full mq800:pl-5 mq800:pr-5 mq800:box-border">
                    <div className="w-[325px] flex flex-col items-center justify-start gap-[32px] max-w-full mq800:gap-[16px]">
                      <div className="w-36 h-[34px] relative leading-[34px] inline-block z-[2] mq800:text-lgi mq800:leading-[27px]">
                        <span>KES</span>
                        <span className="text-17xl"> 3,500</span>
                      </div>
                      <button onClick={onButtonContainedClick}
                        className="self-stretch h-[72px] z-[2] border-[3px] border-solid border-black text-black font-bold text-xl bg-white hover:cursor-pointer hover:text-white hover:bg-black transition-all duration-300 ease-in-out"
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[51px] mq1350:gap-[25px]">
                    <div className="self-stretch h-px relative box-border opacity-[0.75] z-[2] border-t-[1px] border-solid border-black" />
                    <div className="self-stretch h-[400px] relative leading-[40px] font-light inline-block z-[2] mq800:text-lgi mq800:leading-[32px]">
                      SBL Richmond combines a timeless classic, elegant look
                      with refined materials and rich detailing. Meet SBL
                      Richmond and enjoy the soft-touch real leather touch
                      points, fully-featured interior and smooth rolling double
                      wheels. SBL Richmond II is the update version of our hero
                      SBL Richmond. Continue the signature contrast trimming
                      design details, this new version, designer has made the
                      line with modern updates.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[69px] max-w-full mq1350:gap-[17px] mq450:flex-wrap mq450:gap-[34px]">
            <img
              className="h-[589px] w-[418px] relative object-cover max-w-full z-[2] mq450:flex-1"
              loading="eager"
              alt=""
              src="/prod-col-133763-1041-back-1@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[42px] px-0 pb-0 box-border min-w-[313px] max-w-full mq1350:pt-[27px] mq1350:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[70px] max-w-full mq1350:gap-[35px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[29px] max-w-full shrink-0">
                  <div className="self-stretch h-px relative box-border opacity-[0.75] z-[2] border-t-[1px] border-solid border-black" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full shrink-0">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[3px] max-w-full">
                      <b className="w-[152px] h-10 relative leading-[40px] inline-block z-[2] mq800:text-lgi mq800:leading-[32px]">
                        DIMENSIONS
                      </b>
                      <div className="self-stretch flex flex-col items-center justify-start max-w-full text-xl text-gray-800">
                        <img
                          className="self-stretch h-[362px] relative max-w-full overflow-hidden shrink-0 object-cover z-[2]"
                          loading="eager"
                          alt=""
                          src="/s-1@2x.png"
                        />
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[21px] box-border max-w-full">
                          <div className="flex flex-row items-start justify-start gap-[21px] max-w-full mq800:flex-wrap">
                            <div className="rounded-6xs bg-black flex flex-row items-center justify-center py-[9px] pr-0.5 pl-[5px] whitespace-nowrap z-[3] text-gray-700 border-[1px] border-solid border-black">
                              <div className="h-11 w-[74px] relative rounded-6xs bg-black box-border hidden border-[1px] border-solid border-black" />
                              <div className="h-6 w-[65px] relative inline-block z-[1]">
                                55 CM
                              </div>
                            </div>
                            <div className="rounded-6xs bg-white flex flex-row items-center justify-center py-[9px] pr-0.5 pl-[5px] whitespace-nowrap z-[3] border-[1px] border-solid border-black">
                              <div className="h-11 w-[74px] relative rounded-6xs bg-white box-border hidden border-[1px] border-solid border-black" />
                              <div className="h-6 w-[65px] relative inline-block z-[1]">
                                68 CM
                              </div>
                            </div>
                            <div className="rounded-6xs bg-white flex flex-row items-center justify-center py-[9px] pr-0.5 pl-[5px] whitespace-nowrap z-[3] border-[1px] border-solid border-black">
                              <div className="h-11 w-[74px] relative rounded-6xs bg-white box-border hidden border-[1px] border-solid border-black" />
                              <div className="h-6 w-[65px] relative inline-block z-[1]">
                                75 CM
                              </div>
                            </div>
                            <div className="rounded-6xs bg-white flex flex-row items-center justify-center py-[9px] pr-0.5 pl-[5px] whitespace-nowrap z-[3] border-[1px] border-solid border-black">
                              <div className="h-11 w-[74px] relative rounded-6xs bg-white box-border hidden border-[1px] border-solid border-black" />
                              <div className="h-6 w-[65px] relative inline-block z-[1]">
                                81 CM
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
                      <div className="self-stretch h-px relative box-border opacity-[0.75] z-[2] border-t-[1px] border-solid border-black" />
                      <b className="w-[175px] h-[29px] relative inline-block z-[2] mq800:text-lgi">
                        BARCODE/EAN
                      </b>
                      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[58px] text-xl mq800:pl-5 mq800:box-border">
                        <div className="w-[228px] flex flex-col items-center justify-start">
                          <img
                            className="self-stretch h-9 relative max-w-full overflow-hidden shrink-0 object-cover z-[3]"
                            loading="eager"
                            alt=""
                            src="/image15517-ean13-5400520073334-1@2x.png"
                          />
                          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-[33px]">
                            <div className="h-6 w-[151px] relative inline-block z-[2] mq800:text-base">
                              5400520073334
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border opacity-[0.75] z-[2] border-t-[1px] border-solid border-black" />
              </div>
            </div>
          </div>
          <div className="w-[888px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1350:flex-wrap">
            <img
              className="h-[563px] w-[255px] relative object-cover z-[2] mq1350:flex-1"
              loading="eager"
              alt=""
              src="/prod-col-133763-1041-side-1@2x.png"
            />
            <div className="w-[482px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border min-w-[482px] max-w-full mq1350:flex-1 mq1350:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                <b className="w-[172px] h-[29px] relative inline-block z-[2] mq800:text-lgi">
                  AIRLINE GUIDE
                </b>
                <div className="self-stretch h-[25px] relative text-lg">
                  <img
                    className="absolute top-[1px] left-[458px] w-6 h-6 overflow-hidden z-[2]"
                    loading="eager"
                    alt=""
                    src="/gridiconsdropdown.svg"
                  />
                  <div className="absolute top-[25px] left-[0px] box-border w-[482px] h-px z-[3] border-t-[1px] border-solid border-black" />
                  <div className="absolute top-[0px] left-[0px] z-[2]">
                    Select Airline
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[20px] text-xl">
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[15px]">
                    <div className="flex flex-row items-center justify-start gap-[11px]">
                      <div className="h-[34px] w-16 relative [text-decoration:underline] leading-[34px] inline-block z-[2] mq800:text-base mq800:leading-[27px]">
                        SHARE
                      </div>
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 z-[2]"
                        loading="eager"
                        alt=""
                        src="/solarsharebold.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-[57px] relative text-base inline-block z-[2]">
                    The toggles are working. Please, note, that you have to add
                    a template to the library in order to be able to display it
                    inside the toggles.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[576px] flex flex-row items-start justify-start pt-0 px-5 pb-[238px] box-border max-w-full mq800:pb-[101px] mq800:box-border mq450:pb-[155px] mq450:box-border">
        <img
          className="h-[587px] w-[279px] relative object-cover z-[2]"
          loading="eager"
          alt=""
          src="/prod-col-133763-1041-side-2-1@2x.png"
        />
      </div>
      <div className="w-[800px] flex flex-row items-start justify-start pt-0 px-5 pb-[145px] box-border max-w-full mq1350:pb-[94px] mq1350:box-border">
        <img
          className="h-[479px] w-[539px] relative object-cover max-w-full z-[2]"
          loading="eager"
          alt=""
          src="/prod-col-133763-1041-interior-2-1@2x.png"
        />
      </div>
      <div className="w-[800px] flex flex-row items-start justify-start pt-0 px-5 pb-[101px] box-border max-w-full mq1350:pb-[66px] mq1350:box-border">
        <img
          className="h-[409px] w-[547px] relative object-cover max-w-full z-[2]"
          loading="eager"
          alt=""
          src="/material-28-1@2x.png"
        />
      </div>
      <section className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[82px] box-border gap-[63px] max-w-full text-left text-xl text-black font-lato mq800:gap-[16px] mq1350:gap-[31px] mq1350:pb-[22px] mq1350:box-border mq1150:pb-[34px] mq1150:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-[88px] max-w-full mq800:gap-[22px] mq1350:gap-[44px]">
          <div className="w-[670px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
            <img
              className="h-[766px] w-[417px] relative object-cover max-w-full z-[2]"
              loading="eager"
              alt=""
              src="/prod-col-133763-1041-material-2-1@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq1150:flex-wrap">
            <img
              className="h-[806px] w-[579px] relative object-cover max-w-full z-[2] mq1150:flex-1"
              loading="eager"
              alt=""
              src="/prod-col-133763-1139-top-1@2x.png"
            />
            <img
              className="h-[900px] w-[600px] relative object-cover max-w-full z-[2] mq1150:flex-1"
              loading="eager"
              alt=""
              src="/prod-col-133763-1139-wheel-1@2x.png"
            />
          </div>
        </div>
        <div className="w-[356px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
          <div className="h-6 w-[252px] relative font-light inline-block mq800:text-base">
            You may also be interested in
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-[138px] box-border relative gap-[63px] max-w-full text-base mq800:gap-[16px] mq800:pl-5 mq800:box-border mq1350:gap-[31px] mq1350:pl-[69px] mq1350:box-border mq1150:flex-wrap">
          <div className="h-[683px] w-96 flex flex-row items-start justify-start py-0 pr-[51px] pl-0 box-border gap-[20px] max-w-full mq800:pr-5 mq800:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[19px]">
              <div className="flex flex-row items-start justify-end py-0 pr-[49px] pl-[60px] mq800:pl-5 mq800:pr-5 mq800:box-border">
                <img
                  className="h-[359px] w-[203px] relative object-cover"
                  loading="eager"
                  alt=""
                  src="/samsonitestem70cmivoryluggage511-1@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-[73px] h-[19px] relative inline-block">
                    Samsonite
                  </div>
                  <div className="w-9 h-[19px] relative inline-block z-[1]">
                    Stem
                  </div>
                </div>
                <div className="w-[115px] h-[19px] relative inline-block">
                  SPINNER 70/26
                </div>
              </div>
              <div className="w-60 flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border gap-[24px] text-xl">
                <div className="w-[92px] h-6 relative inline-block mq800:text-base">
                  KES 3,000
                </div>
                <div className="flex flex-row items-start justify-end py-0 pr-[39px] pl-[73px]">
                  <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-0 gap-[20px]">
                    <img
                      className="h-8 w-[28.7px] relative min-h-[32px]"
                      alt=""
                      src="/selection-1.svg"
                    />
                    <img
                      className="h-8 w-[28.7px] relative min-h-[32px]"
                      alt=""
                      src="/selectiondisabled-2.svg"
                    />
                    <img
                      className="h-8 w-[28.7px] relative min-h-[32px]"
                      alt=""
                      src="/selectiondisabled-3.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end text-gray-700">
                  <div className="flex flex-row items-start justify-start gap-[19px]">
                    <div className="rounded-6xs bg-black flex flex-row items-center justify-center py-[9px] pr-0.5 pl-[5px] whitespace-nowrap border-[1px] border-solid border-black">
                      <div className="h-11 w-[74.5px] relative rounded-6xs bg-black box-border hidden border-[1px] border-solid border-black" />
                      <div className="h-6 w-[65px] relative inline-block z-[1]">
                        70 CM
                      </div>
                    </div>
                    <div className="rounded-6xs bg-white flex flex-row items-center justify-center py-[9px] pr-0.5 pl-[5px] whitespace-nowrap text-gray-800 border-[1px] border-solid border-black">
                      <div className="h-11 w-[74px] relative rounded-6xs bg-white box-border hidden border-[1px] border-solid border-black" />
                      <div className="h-6 w-[65px] relative inline-block z-[1]">
                        76 CM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[15px]">
                  <button className="h-[42px] flex-1 border-[2px] border-solid border-black text-black font-medium text-xl bg-white">
                    ADD TO CART
                  </button>
                  <button className="h-[42px] flex-1 border-[2px] border-solid border-black text-black font-medium text-xl bg-white">
                    DETAILS
                  </button>
                </div>
              </div>
            </div>
            <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-black" />
          </div>
          <div className="h-[701px] w-[332px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[20px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[19px]">
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[49px] pl-[60px] mq800:pl-5 mq800:pr-5 mq800:box-border">
                  <img
                    className="h-[359px] w-[203px] relative object-cover"
                    alt=""
                    src="/samsonitestem70cmivoryluggage511-1@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[73px] h-[19px] relative inline-block">
                      Samsonite
                    </div>
                    <div className="w-9 h-[19px] relative inline-block z-[1]">
                      Stem
                    </div>
                  </div>
                  <div className="w-[115px] h-[19px] relative inline-block">
                    SPINNER 70/26
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[23px] text-xl">
                  <div className="w-[92px] h-6 relative inline-block mq800:text-base">
                    KES 3,000
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[73px] mq800:pl-5 mq800:pr-5 mq800:box-border">
                    <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-0 gap-[20px]">
                      <img
                        className="h-8 w-[28.7px] relative min-h-[32px]"
                        alt=""
                        src="/selection-1.svg"
                      />
                      <img
                        className="h-8 w-[28.7px] relative min-h-[32px]"
                        alt=""
                        src="/selectiondisabled-2.svg"
                      />
                      <img
                        className="h-8 w-[28.7px] relative min-h-[32px]"
                        alt=""
                        src="/selectiondisabled-3.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[71px] pl-[77px] text-gray-700 mq800:pl-5 mq800:pr-5 mq800:box-border">
                    <div className="flex flex-row items-start justify-start gap-[19px]">
                      <div className="rounded-6xs bg-black flex flex-row items-center justify-center py-[9px] pr-0.5 pl-[5px] whitespace-nowrap border-[1px] border-solid border-black">
                        <div className="h-11 w-[74.5px] relative rounded-6xs bg-black box-border hidden border-[1px] border-solid border-black" />
                        <div className="h-6 w-[65px] relative inline-block z-[1]">
                          70 CM
                        </div>
                      </div>
                      <div className="rounded-6xs bg-white flex flex-row items-center justify-center py-[9px] pr-0.5 pl-[5px] whitespace-nowrap text-gray-800 border-[1px] border-solid border-black">
                        <div className="h-11 w-[74px] relative rounded-6xs bg-white box-border hidden border-[1px] border-solid border-black" />
                        <div className="h-6 w-[65px] relative inline-block z-[1]">
                          76 CM
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[15px]">
                    <button className="h-[42px] flex-1 border-[2px] border-solid border-black text-black font-medium text-xl bg-white">
                    ADD TO CART
                  </button>
                  <button className="h-[42px] flex-1 border-[2px] border-solid border-black text-black font-medium text-xl bg-white">
                    DETAILS
                  </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-black" />
            </div>
          </div>
          <div className="w-[429px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                <div className="w-[369px] flex flex-row items-center justify-start relative max-w-full">
                  <img
                    className="h-[359px] w-[203px] relative object-cover"
                    alt=""
                    src="/samsonitestem70cmivoryluggage511-1@2x.png"
                  />
                  <img
                    className="h-16 w-16 absolute my-0 mx-[!important] right-[0px] bottom-[3px]"
                    loading="eager"
                    alt=""
                    src="/group-48.svg"
                  />
                </div>
              </div>
              <div className="w-[312px] flex flex-col items-start justify-start">
                <div className="w-[73px] h-[19px] relative inline-block">
                  Samsonite
                </div>
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[19px] gap-[4px]">
                  <div className="w-9 h-[19px] relative inline-block z-[1]">
                    Stem
                  </div>
                  <div className="w-[115px] h-[19px] relative inline-block">
                    SPINNER 70/26
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[23px] text-xl">
                  <div className="w-[92px] h-6 relative inline-block mq800:text-base">
                    KES 3,000
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[73px] mq800:pl-5 mq800:pr-5 mq800:box-border">
                    <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-0 gap-[20px]">
                      <img
                        className="h-8 w-[28.7px] relative min-h-[32px]"
                        alt=""
                        src="/selection-1.svg"
                      />
                      <img
                        className="h-8 w-[28.7px] relative min-h-[32px]"
                        alt=""
                        src="/selectiondisabled-2.svg"
                      />
                      <img
                        className="h-8 w-[28.7px] relative min-h-[32px]"
                        alt=""
                        src="/selectiondisabled-3.svg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-[71px] pl-[77px] text-gray-700 mq800:pl-5 mq800:pr-5 mq800:box-border">
                    <div className="flex flex-row items-start justify-start gap-[19px]">
                      <div className="rounded-6xs bg-black flex flex-row items-center justify-center py-[9px] pr-0.5 pl-[5px] whitespace-nowrap border-[1px] border-solid border-black">
                        <div className="h-11 w-[74.5px] relative rounded-6xs bg-black box-border hidden border-[1px] border-solid border-black" />
                        <div className="h-6 w-[65px] relative inline-block z-[1]">
                          70 CM
                        </div>
                      </div>
                      <div className="rounded-6xs bg-white flex flex-row items-center justify-center py-[9px] pr-0.5 pl-[5px] whitespace-nowrap text-gray-800 border-[1px] border-solid border-black">
                        <div className="h-11 w-[74px] relative rounded-6xs bg-white box-border hidden border-[1px] border-solid border-black" />
                        <div className="h-6 w-[65px] relative inline-block z-[1]">
                          76 CM
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[15px]">
                    <button className="h-[42px] flex-1 border-[2px] border-solid border-black text-black font-medium text-xl bg-white">
                    ADD TO CART
                  </button>
                  <button className="h-[42px] flex-1 border-[2px] border-solid border-black text-black font-medium text-xl bg-white">
                    DETAILS
                  </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-16 w-16 absolute my-0 mx-[!important] top-[310px] left-[19.5px]"
            loading="eager"
            alt=""
            src="/group-50.svg"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-col items-end justify-start pt-[70px] px-0 pb-0 box-border gap-[26px] bg-[url('/public/sand-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 text-left text-11xl text-white font-lato mq800:pt-[29px] mq800:box-border mq450:pt-[45px] mq450:box-border">
        <img
          className="self-stretch h-[827px] relative max-w-full overflow-hidden max-h-full object-cover hidden"
          alt=""
          src="/sand-1@2x.png"
        />
        <div className="w-[1388px] flex flex-row items-start justify-start pt-0 pb-[22px] pr-[25px] pl-5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq1150:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[20px]">
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
            <div className="w-[502px] flex flex-col items-start justify-start py-0 pr-9 pl-0 box-border gap-[20px] max-w-full">
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
            <div className="w-[281px] flex flex-col items-start justify-start gap-[14px]">
              <h3 className="m-0 w-[113px] h-9 relative text-inherit font-extrabold font-inherit inline-block z-[1] mq800:text-lg mq1350:text-5xl">
                Account
              </h3>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-[15px] text-gray-1000">
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
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[72px] box-border max-w-full text-13xl text-gray-1000 mq450:pl-9 mq450:pr-9 mq450:box-border">
          <div className="w-[681px] flex flex-row items-end justify-start gap-[38px] max-w-full mq1350:flex-wrap mq1350:gap-[19px]">
            <div className="h-[230px] flex-1 relative min-w-[291px] max-w-full">
              <img
                className="absolute top-[38px] left-[256px] w-48 h-48 object-cover z-[1]"
                loading="eager"
                alt=""
                src="/americantouristerlogo-1@2x.png"
              />
              <h2 className="m-0 absolute top-[0px] left-[0px] text-inherit [text-decoration:underline] font-bold font-inherit inline-block w-[278.2px] z-[1] mq800:text-lgi mq1350:text-7xl">
                Our other brands:
              </h2>
            </div>
            <div className="h-[163px] w-[195px] flex flex-col items-start justify-start pt-0 px-0 pb-[29px] box-border min-w-[195px] mq1350:flex-1">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1] mq1350:self-stretch mq1350:w-auto"
                loading="eager"
                alt=""
                src="/hign-sierra-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[14px] max-w-full">
          <img
            className="w-[1390px] h-[60px] relative max-w-full z-[1]"
            loading="eager"
            alt=""
            src="/bottom.svg"
          />
          <Footercontents />
        </div>
      </section>
    </div>
  );
};

export default Product;
