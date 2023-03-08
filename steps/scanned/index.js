import React, { useEffect, useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useTranslation } from "react-i18next";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";

const Scanned = ({ changeStep }) => {
  const { t } = useTranslation();
  let code = localStorage.getItem('code')
  // if (isNaN(code)) {
  //   code = 'non'
  // }
  const [itemData, setItemData] = useState(undefined)

  useEffect(() => {
    async function getItem() {
      return await axios
        .get("/products/" + code)
        .then(async function (response) {
          // handle success
          return response.data
        })
        .catch(function (error) {
          return undefined
        })
    }

    async function logic() {
      const data = await getItem()
      setItemData(data)
      if (data == undefined) {
        axios
          .get("/utils/empty").then((res) => {
            console.log(res.data);
          })
      } else {
        axios.get('/utils/push').then((res) => {
          console.log(res.data);
        })
      }
      console.log(data);
    }


    if (code != 'non') {
      logic()
    }


  }, [])

  const c=t("Unfortunately2");

  return (
    <div className={`w-full  bg-poubelle bg-cover bg-center`}>
      <div className="w-full h-[25rem] flex flex-col  items-center backdrop-blur-md">
        <h1 className="mt-20 text-center text-4xl text-white font-bold drop-shadow-lg">
          {code == 'non' ? 'Unfortunately, the barcode on your item is unreadable, please try with a different item.' : 'We got your item!'}
          {itemData ? '' : c}
        </h1>
        {(code != 'non') && <div className="bg-white p-6 text-center">
          <h1>Barcode: {code}</h1>
          {itemData && <div><h1>Item: {itemData.name}</h1>
            <h1>Weight: {itemData.weight}g</h1>
            <h1>Type: {itemData.type == 'P' ? 'Plastic' : 'Aluminium'}</h1></div>}
        </div>}
        {/* <h1 className="text-3xl text-center text-white font-semibold drop-shadow-xl m-10">
          {t("sub_welcome")}
        </h1> */}
        {!itemData && <button
          className="bg-red-400  text-white font-bold py-4 px-6 rounded inline-flex items-center mr-3"
          onClick={() => changeStep(0)}
        >
          <CancelIcon className="mr-2" />
          <span>Restart</span>
        </button>}

        {itemData && <button
          className="bg-yellow-500  text-white font-bold py-4 px-6 rounded inline-flex items-center ml-3"
          onClick={() => changeStep(4)}
        >
          <PlayCircleIcon className="mr-2" />
          <span>{t('continue_label')}</span>
        </button>}
      </div>
    </div>
  );
};

export default Scanned;
