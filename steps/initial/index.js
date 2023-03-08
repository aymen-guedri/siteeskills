import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useTranslation } from "react-i18next";

const Initial = ({ changeStep }) => {
  const { t } = useTranslation();

  return (
    <div className={`w-full  bg-poubelle bg-cover bg-center`}>
      <div className="w-full h-[25rem] flex flex-col  items-center backdrop-blur-md">
        <h1 className="mt-20 text-center text-4xl text-white font-bold drop-shadow-lg">
          {t("welcome")}
        </h1>
        <h1 className="text-3xl text-center text-white font-semibold drop-shadow-xl m-10">
          {t("sub_welcome")}
        </h1>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-6 rounded inline-flex items-center"
          onClick={() => changeStep(1)}
        >
          <PlayCircleIcon className="mr-2" />
          <span>{t("start_label")}</span>
        </button>
      </div>
    </div>
  );
};

export default Initial;
