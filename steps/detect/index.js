import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Barcode from "../../assets/images/barcode.png";
import CancelIcon from "@mui/icons-material/Cancel";
import { CirclesWithBar, MagnifyingGlass } from "react-loader-spinner";
import axios from "axios";

const Detect = ({ changeStep }) => {
  const { t } = useTranslation();
  const [scanning, setScanning] = useState(true);
  const [codeFound, setCodeFound] = useState(false)

  useEffect(() => {
    localStorage.removeItem("code")

    async function scanItem() {
      return await axios({
        method: 'get',
        url: '/utils/scan',
        timeout: 40000
      })
        .then(function (response) {
          // handle success
          setScanning(false)
          setCodeFound(true)
          console.log(response);
          return response.data.code
        })
        .catch(function (error) {
          // handle error
          setScanning(false)
          setCodeFound(false)
          console.log(error);
          return "non"
        })
    }

    async function logic() {

      console.log("started scanning");
      const code = await scanItem();

      console.log(code);

      if (code && code != "non") {
        localStorage.setItem('code', code)
        changeStep(3)
      } else {
        setScanning(false)
        axios.get('/utils/empty')
      }
    }

    logic()
  }, []);

  return (
    <div className={`w-full  bg-poubelle bg-cover bg-center`}>
      <div className="w-full h-[25rem] flex flex-col  items-center backdrop-blur-md">
        <h1 className="m-8 mt-20 text-center text-2xl text-white font-bold drop-shadow-lg">
          {(scanning) && t("detect_text1")}
          {(scanning) && t("scanning_text1")}
          {(!scanning && !codeFound) && t("detect_failed_text1")}
          <br></br>
        </h1>

        {(scanning) && <CirclesWithBar
          height="150"
          width="150"
          color="#fff"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />}

        {(!codeFound && !scanning) && <button
          className="bg-red-400  text-white font-bold py-4 px-6 rounded inline-flex items-center mr-3"
          onClick={() => changeStep(0)}
        >
          <CancelIcon className="mr-2" />
          <span>{t("restart")}</span>
        </button>}

      </div>
    </div>
  );
};

export default Detect;
