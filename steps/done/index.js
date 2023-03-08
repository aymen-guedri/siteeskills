import React from "react";
import { useTranslation } from "react-i18next";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Barcode from "../../assets/images/barcode.png";
import CancelIcon from "@mui/icons-material/Cancel";
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

const Done = ({ changeStep }) => {
  const { t } = useTranslation();

  return (
    <div className={`w-full  bg-poubelle bg-cover bg-center`}>
      <div className="w-full h-[25rem] flex flex-col  items-center backdrop-blur-md">
        <h1 className="m-8 text-center text-2xl text-white font-bold drop-shadow-lg">
          {t('donate_text1')}
          <br></br>
        </h1>
        <h1 className="m-10 text-center text-2xl text-white font-bold drop-shadow-lg">
          {t('donate_text2')}
        </h1>
        <h1 className="mt-10 mr-10 ml-10 text-center text-2xl text-white font-bold drop-shadow-lg">
          {t('donate_text3')}
        </h1>

        <div className="flex flex-row mt-5">
          <button
            className="bg-green-500  text-white font-bold py-4 px-6 rounded inline-flex items-center mr-3"
            onClick={() => changeStep(0)}
          >
            <BloodtypeIcon className="mr-2" />
            <span>{t('donate_label')}</span>
          </button>
          <button
            className="bg-yellow-500  text-white font-bold py-4 px-6 rounded inline-flex items-center ml-3"
            onClick={() => changeStep(2)}
          >
            <span>{t("scanmore")}</span>
          </button>
          <button
            className="bg-blue-500  text-white font-bold py-4 px-6 rounded inline-flex items-center ml-3"
            onClick={() => changeStep(5)}
          >
            <PlayCircleIcon className="mr-2" />
            <span>{t("Retrieve")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Done;
