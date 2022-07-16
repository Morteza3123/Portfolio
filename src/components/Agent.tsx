import { useEffect, useState } from "react";
import MDSpinner from "react-md-spinner";
const agentUID = process.env.REACT_APP_AGENT_ID;
const appID = process.env.REACT_APP_ID;
const region = process.env.REACT_APP_REGION;
const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
const wid = process.env.REACT_APP_W2;

const Agent = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.CometChatWidget.init({
      appID: appID,
      appRegion: region,
      authKey: AUTH_KEY,
    }).then(
      (response:any) => {
        console.log("Initialization completed successfully");
        //You can now call login function.
        window.CometChatWidget.login({
          uid: agentUID,
        }).then(
          (response:any) => {
            window.CometChatWidget.launch({
              widgetID: wid,
              target: "#cometchat",
              roundedCorners: "true",
              height: "600px",
              width: "100%",
              defaultID: "", //default UID (user) or GUID (group) to show,
              defaultType: "user", //user or group
            });
            setLoading(false);
          },
          (error: any) => {
            console.log("User login failed with error:", error);
            //Check the reason for error and take appropriate action.
          }
        );
      },
      (error:any) => {
        console.log("Initialization failed with error:", error);
        //Check the reason for error and take appropriate action.
      }
    );
  }, []);
  if (loading) {
    return (
      <div>
        <MDSpinner />
      </div>
    );
  }
  return <div id="cometchat" style={{ margin: "0 auto", width: "60%" }} />;
};
export default Agent;