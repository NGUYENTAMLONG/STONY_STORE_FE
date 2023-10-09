import React, { useEffect } from "react";

const ZaloChat = () => {
  useEffect(() => {
    const zaloScript = document.createElement("script");
    zaloScript.src = "https://sp.zalo.me/plugins/sdk.js";
    zaloScript.onload = () => {
      window.zaloAsyncInit = function () {
        // Chuyển Official Account ID và app ID của bạn vào đây
        window.ZaloSocialSDK.chat({
          oaid: "4462152339089565647",
          ga: "1376097493435701979",
        });
      };
    };
    document.body.appendChild(zaloScript);
  }, []);
  return <div id="zalo-chat-widget"></div>;
};

export default ZaloChat;
