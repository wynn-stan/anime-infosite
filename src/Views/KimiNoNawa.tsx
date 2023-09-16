import styled from "styled-components";

export default function KimiNoNawa() {
  return (
    <>
      <WebViewContainer className="hidden md:flex">
        <div className="image">
          <img src="/mitsuha-without-cleanup.png" alt="image" />
        </div>
        <div className="blue-background">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1257"
            height="1024"
            viewBox="0 0 1257 1024"
            fill="none"
          >
            <path d="M0 0H1257L414.692 1267H0V0Z" fill="#63B5DA" />
          </svg>
        </div>
        <div className="text-section flex justify-between items-center">
          <div className="year-title flex gap-2 p-[64px] flex-col max-w-[383px]">
            <div className="year text-[34px] italic pl-[10px]">2016</div>
            <div className="title text-[64px] font-bold leading-[68px] text-center">
              KIMI NO NAWA
            </div>
          </div>
          <div className="summary-director flex flex-col gap-2 w-[383px]">
            <div className="summary ">
              Two teenagers share a profound, magical connection upon
              discovering they are swapping bodies. Things manage to become even
              more complicated when the boy and girl decide to meet in person.
            </div>
            <div className="director text-2xl leading-[68px]">
              <span className="font-bold">Director: </span>
              <span className="font-medium tracking-tight">Makoto Shinkai</span>
            </div>
          </div>
        </div>
      </WebViewContainer>
      <MobileViewContainer className="flex md:hidden">
        <div className="top-section max-h-[505px] flex flex-col">
          <div>
            <img src="/mobile-girl.png" alt="image" />
          </div>
        </div>
        <div className="bottom-section pt-[32px] pb-[24px] flex-grow flex flex-col justify-between">
          <div>
            <div className="flex justify-between px-[32px] items-center">
              <div className="text-[20px]">2016</div>
              <div className="text-[24px] leading-[68px] tracking-tight font-bold">
                KIMI NO NAWA
              </div>
            </div>

            <div className="text-[#585858] px-[32px] text-xs">
              Two teenagers share a profound, magical connection upon
              discovering they are swapping bodies. Things manage to become even
              more complicated when the boy and girl decide to meet in person.
            </div>
          </div>

          <div className="text-sm text-center w-full leading-[68px] flex justify-center items-end">
            <span className="font-bold">Director: </span>{" "}
            <span className="font-medium">Makoto Shinkai</span>
          </div>
        </div>
      </MobileViewContainer>
    </>
  );
}

const MobileViewContainer = styled.div`
  font-family: "Poppins", "sans-serif";
  height: 100%;
  flex-direction: column;

  & .top-section {
    max-height: 505px;
    height: 100%;
    background: #63b5da;
    padding-left: 14px;
    justify-content: flex-end;
    align-items: center;
  }
`;

const WebViewContainer = styled.div`
  width: 100%;
  position: relative;
  background: #eff7fa;

  height: 100%;
  flex-direction: column;
  justify-content: center;

  & .blue-background {
    position: absolute;
    z-index: 1;
    height: 100%;
    overflow: hidden;
  }

  & .image {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    width: 725px; /* Need a specific value to work */
    z-index: 3;
  }

  & .text-section {
    padding: 50px;
    font-family: "Poppins", sans-serif;
    z-index: 2;
  }
`;
