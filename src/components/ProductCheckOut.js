import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GroupComponent from "./GroupComponent";
import Footercontents from "./Footercontents";

const ProductCheckOut = () => {
  const navigate = useNavigate();

  const onHOMESHOPClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className=" bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal] ">
      <header className="self-stretch h-[111px] relative bg-white hidden" />
      <section className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full shrink-0 text-left text-5xl text-black font-lato">
        <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[9px] box-border gap-[38px] max-w-full text-gray-200 mq800:gap-[19px]">
          <div className="self-stretch h-[65px] bg-gray-500 box-border flex flex-row items-center justify-center pt-2 px-2 pb-[9px] relative max-w-full border-[3px] border-solid border-black">
            <div className="h-[65px] w-[1446px] relative bg-gray-500 box-border hidden max-w-full z-[0] border-[3px] border-solid border-black" />
            <a
              className="h-[42px] w-[460px] absolute my-0 mx-[!important] top-[8px] left-[490px] text-[inherit] inline-block [text-decoration:none] z-[1] mq450:text-lgi"
              href="https://www.samsonite.in/shipping-and-delivery.html"
              target="_blank"
            >{`Free shipping on all orders *T&C apply`}</a>
          </div>
          <div className="w-[914px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xs text-white">
            <div className="w-[746px] flex flex-row items-start justify-between gap-[20px] max-w-full mq800:flex-wrap mq800:justify-center">
              <img
                className="h-[37px] w-[220px] relative object-cover z-[1]"
                loading="eager"
                alt=""
                src="/image-1@2x.png"
              />
              <div className="w-[225px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <img
                    className="h-10 w-10 relative overflow-hidden shrink-0 z-[1]"
                    loading="eager"
                    alt=""
                    src="/miuser.svg"
                  />
                  <img
                    className="h-10 w-10 relative overflow-hidden shrink-0 z-[1]"
                    loading="eager"
                    alt=""
                    src="/carbonlocation.svg"
                  />
                  <img
                    className="h-10 w-10 relative overflow-hidden shrink-0 z-[1]"
                    loading="eager"
                    alt=""
                    src="/iconamoonsearchlight.svg"
                  />
                  <div className="flex flex-col items-end justify-start py-0 pr-0 pl-[26px] relative gap-[3px] z-[1]">
                    <img
                      className="w-10 h-10 absolute my-0 mx-[!important] top-[0px] left-[0px] overflow-hidden shrink-0"
                      loading="eager"
                      alt=""
                      src="/bytesizecart.svg"
                    />
                    <div className="w-4 h-4 relative rounded-[50%] bg-darkslateblue z-[1] text-center text-white text-2xl font-bold leading-4" >
                      1
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-1">
                      <div className="h-[22px] w-[7px] relative inline-block z-[1]">
                        {/* 0 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-gray-400 flex flex-row items-start justify-start pt-4 pb-[11px] pr-[68px] pl-[55px] box-border gap-[35.43px] top-[0] z-[99] sticky max-w-full text-white font-radio-canada mq800:gap-[18px] mq800:pl-[27px] mq800:pr-[34px] mq800:box-border mq1150:hidden">
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/carbonlocation.svg"
          />
          <div className="h-[62px] w-[1440px] relative bg-gray-400 hidden max-w-full" />
          <b className="h-8 w-[153px] relative inline-block whitespace-nowrap z-[1]">
            New Arrivals
          </b>
          <div className="w-[141px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <b className="w-[100px] h-8 relative inline-block z-[1]">Luggage</b>
          </div>
          <div className="w-[162px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <b className="w-[121px] h-8 relative inline-block z-[1]">
              Backpacks
            </b>
          </div>
          <div className="w-[108px] flex flex-col items-start justify-start">
            <b className="w-14 h-8 relative inline-block z-[1]">Bags</b>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <b className="w-[133px] h-8 relative inline-block z-[1]">
              Accessories
            </b>
          </div>
          <div className="w-[116px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border text-gray-100">
            <b className="w-[75px] h-8 relative inline-block z-[1]">Labels</b>
          </div>
          <div className="w-[117px] flex flex-col items-start justify-start text-gray-100">
            <b className="w-[71px] h-8 relative inline-block z-[1]">Offers</b>
          </div>
          <b className="h-8 w-[99px] relative inline-block text-gray-100 z-[1]">
            Discover
          </b>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[55px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div
            className="h-[29px] w-[250px] relative font-light inline-block cursor-pointer mq450:text-lgi"
            onClick={onHOMESHOPClick}
          >{`HOME > SHOP > CART`}</div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start max-w-full text-17xl">
          <img
            className="self-stretch h-[245px] relative max-w-full overflow-hidden max-h-full object-cover"
            loading="eager"
            alt=""
            src="/samsonitecoverfallbackfinal-1@2x.png"
          />
          <div className="w-[1307px] rounded-3xs bg-white box-border flex flex-col items-center justify-start pt-[35px] pb-[38px] pr-[54px] pl-9 gap-[34px] max-w-full z-[1] mt-[-122px] border-[1px] border-solid border-black mq800:gap-[17px] mq800:pb-5 mq800:box-border mq1350:pr-[27px] mq1350:pb-[25px] mq1350:box-border mq1350:w-[calc(100%_-_40px)]">
            <div className="w-[1307px] h-[1237px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-black" />
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[17px]">
              <h3 className="m-0 h-[43px] w-[94px] relative text-inherit font-semibold font-inherit inline-block z-[2] mq800:text-10xl mq450:text-3xl">
                CART
              </h3>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[43px] max-w-full text-xl mq800:gap-[21px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[33px] max-w-full mq800:gap-[16px] mq1150:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[401px] max-w-full mq800:min-w-full">
                  <div className="w-[258px] h-6 relative font-medium whitespace-pre-wrap inline-block z-[2] mq450:text-base">
                    PRODUCTS IN YOUR CART:
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[14px] max-w-full text-base text-gray-900">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[61px] px-0 pb-0 box-border max-w-[calc(100%_-_15px)]">
                      <div className="self-stretch flex flex-col items-end justify-start gap-[10px] max-w-full">
                        <div className="w-[542px] flex flex-row items-start justify-start py-0 px-[60px] box-border max-w-full mq800:pl-[30px] mq800:pr-[30px] mq800:box-border">
                          <div className="flex-1 flex flex-row items-start justify-between py-0 pr-px pl-0 box-border gap-[20px] max-w-full mq450:flex-wrap">
                            <div className="h-[19px] w-[57px] relative font-medium inline-block z-[2]">
                              Product
                            </div>
                            <div className="h-[19px] w-[37px] relative font-medium inline-block z-[2]">
                              Price
                            </div>
                            <div className="h-[19px] w-[63px] relative font-medium inline-block z-[2]">
                              Quantity
                            </div>
                            <div className="h-[19px] w-[60px] relative font-medium inline-block z-[2]">
                              Subtotal
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch bg-gainsboro-100 flex flex-row items-start justify-between pt-[38px] pb-[42px] pr-[29px] pl-0 box-border gap-[20px] max-w-full z-[2] text-lg text-black mq800:flex-wrap mq800:pl-5 mq800:pr-5 mq800:box-border">
                          <div className="h-[149px] w-[603px] relative bg-gainsboro-100 hidden max-w-full" />
                          <div className="flex flex-row items-start justify-start gap-[2px] text-xl">
                            <img
                              className="h-[69px] w-[103px] relative object-cover z-[1]"
                              alt=""
                              src="/support-f-a-qs-group@2x.png"
                            />
                            <div className="h-6 w-[65px] relative inline-block z-[1] mq450:text-base">
                              Be-Her
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pr-[45px] pl-0 gap-[38px]">
                            <b className="h-[22px] w-[78px] relative inline-block z-[1]">
                              KSH2399
                            </b>
                            <div className="h-6 w-3 relative text-xl inline-block z-[1] mq450:text-base">
                              1
                            </div>
                          </div>
                          <b className="h-[22px] w-[78px] relative inline-block z-[1]">
                            KSH2399
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="h-[942px] w-px relative bg-black box-border z-[2] border-r-[1px] border-solid border-black" />
                  </div>
                </div>
                <div className="w-[565px] flex flex-col items-start justify-start gap-[43px] min-w-[565px] max-w-full mq800:gap-[21px] mq800:min-w-full mq1150:flex-1">
                  <div className="w-[538px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-center justify-start gap-[26px] max-w-full">
                      <div className="w-[204px] flex flex-row items-start justify-start">
                        <div className="h-6 w-32 relative font-semibold inline-block z-[2] mq450:text-base">
                          CART TOTALS
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-end justify-start gap-[7px] max-w-full">
                        <div className="w-[502px] h-0 flex flex-row items-start justify-start py-0 pr-[9px] pl-2.5 box-border max-w-full">
                          <div className="h-px flex-1 relative box-border opacity-[0.75] max-w-full z-[2] border-t-[1px] border-solid border-black" />
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                          <div className="flex flex-col items-start justify-start gap-[48px]">
                            <div className="w-[109px] h-6 relative font-semibold inline-block whitespace-nowrap z-[2] mq450:text-base">
                              SUBTOTALS
                            </div>
                            <div className="w-[93px] h-6 relative font-semibold inline-block z-[2] mq450:text-base">
                              SHIPPING
                            </div>
                            <div className="w-[67px] h-6 relative font-semibold inline-block z-[2] mq450:text-base">
                              TOTAL:
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5 text-lg text-gray-900">
                            <div className="flex flex-col items-start justify-start gap-[46px]">
                              <b className="w-[75px] h-[22px] relative inline-block whitespace-nowrap z-[2]">
                                KSH2399
                              </b>
                              <b className="w-[75px] h-[22px] relative inline-block whitespace-nowrap z-[2]">
                                KSH2399
                              </b>
                              <b className="w-[75px] h-[22px] relative inline-block whitespace-nowrap z-[2]">
                                KSH2399
                              </b>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-0 flex flex-row items-start justify-start py-0 pr-2.5 pl-8 box-border max-w-full">
                        <div className="h-px flex-1 relative box-border opacity-[0.75] max-w-full z-[2] border-t-[1px] border-solid border-black" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2 pr-0 pl-9 box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start max-w-full z-[2]">
                      <GroupComponent name1="Name" />
                      <GroupComponent name1="Email" propWidth="59px" />
                      <GroupComponent name1="Phone" propWidth="83px" />
                      <GroupComponent
                        name1="Country/Region"
                        propWidth="169px"
                      />
                      <GroupComponent name1="City" propWidth="63px" />
                      <GroupComponent name1="Postal code" propWidth="145px" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[19px] max-w-full text-5xl">
                    <div className="flex flex-row items-end justify-start gap-[31px] mq450:flex-wrap mq450:gap-[15px]">
                      <div className="flex flex-row items-end justify-start gap-[7px]">
                        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
                          <div className="w-[13px] h-[13px] relative rounded-[50%] bg-gainsboro-100 z-[2]" />
                        </div>
                        <div className="h-[29px] w-[172px] relative inline-block z-[2] mq450:text-lgi">
                          Visa/Mastercard
                        </div>
                      </div>
                      <img
                        className="self-stretch w-[103px] relative max-h-full object-cover min-h-[32px] z-[2]"
                        loading="eager"
                        alt=""
                        src="/visa-mastercard-1@2x.png"
                      />
                    </div>
                    <div className="w-[316px] flex flex-col items-start justify-start gap-[8px]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                        <div className="flex flex-row items-end justify-start gap-[7px]">
                          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
                            <div className="w-[13px] h-[13px] relative rounded-[50%] bg-gainsboro-100 z-[2]" />
                          </div>
                          <div className="h-[29px] w-20 relative inline-block z-[2] mq450:text-lgi">
                            PayTabs
                          </div>
                        </div>
                        <img
                          className="h-6 w-[72px] relative object-cover z-[2]"
                          loading="eager"
                          alt=""
                          src="/valu-1@2x.png"
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1.5">
                          <div className="flex flex-row items-end justify-start gap-[7px]">
                            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
                              <div className="w-[13px] h-[13px] relative rounded-[50%] bg-gainsboro-100 z-[2]" />
                            </div>
                            <div className="h-[29px] w-[66px] relative inline-block z-[2] mq450:text-lgi">
                              Mpesa
                            </div>
                          </div>
                        </div>
                        <img
                          className="h-[57px] w-[77px] relative object-cover z-[2]"
                          loading="eager"
                          alt=""
                          src="/images-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[478px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <button
                  className="h-[62px] w-[314px] z-[2] border-[3px] border-solid border-black text-black font-bold text-xl bg-white hover:bg-black hover:text-white hover:border-white hover:cursor-pointer"
                  sx={{ width: 314 }}
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-end justify-start pt-[70px] pb-0 pr-0 pl-[25px] box-border gap-[48px] bg-[url('/public/sand-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 text-left text-11xl text-white font-lato mq800:gap-[24px] mq450:pt-[29px] mq450:box-border mq1150:pt-[45px] mq1150:box-border">
        <img
          className="self-stretch h-[827px] relative max-w-full overflow-hidden max-h-full object-cover hidden"
          alt=""
          src="/sand-1@2x.png"
        />
        <div className="w-[1393px] flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq1350:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="w-[214.1px] h-9 relative font-extrabold inline-block z-[1] mq800:text-5xl mq450:text-lg">
                Support / FAQS
              </div>
              <div className="flex flex-row items-start justify-end py-0 pr-0 pl-10 text-gray-1000">
                <div className="h-[189px] w-[278.2px] relative font-medium inline-block shrink-0 z-[1] mq800:text-5xl mq450:text-lg">
                  <p className="[margin-block-start:0] [margin-block-end:15px]">{`Delivery & Shipping`}</p>
                  <p className="[margin-block-start:0] [margin-block-end:15px]">{`Returns & Exchanges`}</p>
                  <p className="[margin-block-start:0] [margin-block-end:15px]">
                    Warranty
                  </p>
                  <p className="m-0">Contact Us</p>
                </div>
              </div>
            </div>
            <div className="w-[502px] flex flex-col items-start justify-start py-0 pr-9 pl-0 box-border gap-[20px] max-w-full">
              <div className="w-[188.1px] h-9 relative font-extrabold inline-block z-[1] mq800:text-5xl mq450:text-lg">
                Our Company
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-8 box-border max-w-full text-gray-1000">
                <div className="h-60 flex-1 relative font-medium inline-block max-w-full z-[1] mq800:text-5xl mq450:text-lg">
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
                </div>
              </div>
            </div>
            <div className="w-[281px] flex flex-col items-start justify-start gap-[14px]">
              <div className="w-[113px] h-9 relative font-extrabold inline-block z-[1] mq800:text-5xl mq450:text-lg">
                Account
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-[15px] text-gray-1000">
                <div className="h-[174px] flex-1 relative font-medium inline-block z-[1] mq800:text-5xl mq450:text-lg">
                  <p className="[margin-block-start:0] [margin-block-end:15px]">
                    Track Order
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:15px]">
                    Sign In
                  </p>
                  <p className="m-0">Samsonite Loyalty Program</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[14px] max-w-full text-13xl text-gray-1000">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[26px] max-w-full">
            <div className="w-[775px] flex flex-row items-start justify-start py-0 px-[47px] box-border max-w-full mq800:pl-[23px] mq800:pr-[23px] mq800:box-border">
              <div className="flex-1 flex flex-row items-end justify-start gap-[38px] max-w-full mq800:flex-wrap mq800:gap-[19px]">
                <div className="h-[230px] flex-1 relative min-w-[291px] max-w-full">
                  <img
                    className="absolute top-[38px] left-[256px] w-48 h-48 object-cover z-[1]"
                    loading="eager"
                    alt=""
                    src="/americantouristerlogo-1@2x.png"
                  />
                  <b className="absolute top-[0px] left-[0px] [text-decoration:underline] inline-block w-[278.2px] z-[1] mq800:text-7xl mq450:text-lgi">
                    Our other brands:
                  </b>
                </div>
                <div className="h-[163px] w-[195px] flex flex-col items-start justify-start pt-0 px-0 pb-[29px] box-border min-w-[195px] mq800:flex-1">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1] mq800:self-stretch mq800:w-auto"
                    loading="eager"
                    alt=""
                    src="/hign-sierra-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <img
              className="self-stretch h-[60px] relative max-w-full overflow-hidden max-h-full z-[1]"
              loading="eager"
              alt=""
              src="/bottom.svg"
            />
          </div>
          <Footercontents propPadding="0px 0px 0px" />
        </div>
      </section>
    </div>
  );
};

export default ProductCheckOut;
