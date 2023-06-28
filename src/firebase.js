import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const keys = {
  apiKey: "AIzaSyAJb-9rkdvOw-4-VZF2F_RcBIw1IWgdPH8",
  authDomain: "wecall-analytics.firebaseapp.com",
  projectId: "wecall-analytics",
  storageBucket: "wecall-analytics.appspot.com",
  messagingSenderId: "554743664610",
  appId: "1:554743664610:web:0358dfd0c4770157caf3bb",
};

export const app = initializeApp(keys);
export const messaging = getMessaging(app);

export async function requestPermission() {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    const token  = await getToken(messaging, { vapidKey: "" })
    console.log("TOken", token);
  } else if (permission === "denied") {
    alert("Denied");
  } else {
  }
}

requestPermission();