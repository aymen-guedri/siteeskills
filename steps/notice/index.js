import React from "react";
import { useTranslation } from "react-i18next";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Barcode from "../../assets/images/barcode.png";
import CancelIcon from "@mui/icons-material/Cancel";

const Notice = ({ changeStep }) => {
  const { t } = useTranslation();

  return (
    <div className={`w-full  bg-poubelle bg-cover bg-center`}>
      <div className="w-full h-[25rem] flex flex-col  items-center backdrop-blur-md">
        <h1 className="m-8 text-center text-2xl text-white font-bold drop-shadow-lg">
          {t("notice_text1")}
          <br></br>
        </h1>
        <img
          className="bg-white rounded-lg p-5"
          src={Barcode}
          height={"80px"}
          width={"150px"}
          alt="barcode"
        ></img>
        <h1 className="mt-5 mr-10 ml-10 text-center text-md text-white font-bold drop-shadow-lg">
          {t("notice_text2")}
        </h1>

        <div className="flex flex-row mt-5">
          <button
            className="bg-red-400  text-white font-bold py-4 px-6 rounded inline-flex items-center mr-3"
            onClick={() => changeStep(0)}
          >
            <CancelIcon className="mr-2" />
            <span>{t("cancel_label")}</span>
          </button>
          <button
            className="bg-green-500  text-white font-bold py-4 px-6 rounded inline-flex items-center ml-3"
            onClick={() => changeStep(2)}
          >
            <PlayCircleIcon className="mr-2" />
            <span>{t("continue_label")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notice;
