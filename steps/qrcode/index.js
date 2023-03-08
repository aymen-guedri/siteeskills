import React from "react";
import { useTranslation } from "react-i18next";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Barcode from "../../assets/images/barcode.png";
import CancelIcon from "@mui/icons-material/Cancel";
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import MobileOffIcon from '@mui/icons-material/MobileOff';
import { Box, Icon } from "@mui/material";
import GooglePlay from "../../assets/images/google.png"
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import QRCode from "react-qr-code";

const Qrcode = ({ changeStep }) => {
  const { t } = useTranslation();

  return (
    <div className={`w-full bg-poubelle bg-cover bg-center`}>
      <div className="w-full h-[25rem] flex flex-col items-center backdrop-blur-md">
        <h1 className="m-10 text-center text-2xl text-white font-bold drop-shadow-lg">
          {t("scanqrcode")}
          <br></br>
        </h1>

        {/* <div className="flex flex-row justify-around">
          <div className="flex flex-col">
            <MobileFriendlyIcon className="text-white mr-5 mb-3" style={{ width: "160px", height: "160" }} />
            <button
              className="bg-green-500  text-white font-bold py-4 px-6 rounded inline-flex items-center mr-3"
              onClick={() => changeStep(0)}
            >
              <BloodtypeIcon className="mr-2" />
              <span>Use application</span>
            </button>
          </div>
          <div className="flex flex-col">
            <MobileOffIcon className="text-white mb-3" style={{ width: "160", height: "160" }} />
            <button
              className="bg-yellow-500  text-white font-bold py-4 px-6 rounded inline-flex items-center ml-3"
              onClick={() => changeStep(2)}
            >
              <PlayCircleIcon className="mr-2" />
              <span>Don't use application</span>
            </button>
          </div>
        </div> */}

        <div className="w-full flex justify-around">
          <div className="flex flex-col items-center bg-white rounded-xl p-3">
            {/* <img
              src={Barcode}
              height={"150px"}
              width={"150px"}
              alt="barcode"
            ></img> */}
            <QRCode value="recycling4tunisia.tn/" size={150}></QRCode>
          </div>
        </div>

        <button
          className="bg-red-500 mt-5 text-white font-bold py-4 px-6 rounded inline-flex items-center ml-3"
          onClick={() => changeStep(5)}
        >
          <ArrowBackIcon className="mr-2" />
          <span> {t("goback")}</span>
        </button>
      </div>
    </div>
  );
};

export default Qrcode;
