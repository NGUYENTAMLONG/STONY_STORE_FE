import React, { useEffect } from "react";

const FacebookChat = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v13.0",
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="100006211112118"
        theme_color="#FF0000"
        logged_in_greeting="Chào bạn! Có gì tôi có thể giúp bạn?"
        logged_out_greeting="Xin chào! Đăng nhập vào tài khoản Facebook của bạn để chat với chúng tôi"
      >
        sdfs
      </div>
    </>
  );
};

export default FacebookChat;
