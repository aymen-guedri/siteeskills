import React, { useState, useEffect } from "react";
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
import { CirclesWithBar, MagnifyingGlass } from "react-loader-spinner";
import axios from "axios";

const Coupon = ({ changeStep }) => {
    const { t } = useTranslation();
    const [printing, setPrinting] = useState(true)

    useEffect(() => {
        async function printCoupon() {
            const pts = 80
            const total = 600

            return await axios({
                method: 'get',
                url: `/utils/print?pts=${pts}&total=${total}`,
                timeout: 60000
            })
                .then(function (response) {
                    // handle success
                    console.log(response);
                    return response.data
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    return "non"
                })
        }

        printCoupon()

        const timer = setTimeout(() => {
            console.log('This will run after 1 second!')
            changeStep(0)
        }, 5000);

        return () => clearTimeout(timer);

    }, [])


    return (
        <div className={`w-full  bg-poubelle bg-cover bg-center`}>
            <div className="w-full h-[25rem] flex flex-col  items-center backdrop-blur-md">
                <h1 className="m-8 mt-20 text-center text-2xl text-white font-bold drop-shadow-lg">
                    {t("printCoupon")}
                    <br></br>
                </h1>

                <CirclesWithBar
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
                />


            </div>
        </div>
    );
};

export default Coupon;
