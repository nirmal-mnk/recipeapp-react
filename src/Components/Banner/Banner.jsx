import styles from "./Banner.module.css";
import { useState, useEffect } from "react";
export default function Banner() {
  const [whatsfor, setWhatsfor] = useState("BreakFast");
  useEffect(() => {
    const now = new Date();
    const getCurrentHour = now.getHours();
    if (getCurrentHour <= 9 && getCurrentHour > 13) {
      setWhatsfor("BreakFast");
    } else if (getCurrentHour > 9 && getCurrentHour <= 13) {
      setWhatsfor("Lunch");
    } else {
      setWhatsfor("Dinner");
    }
  }, []);
  return (
    <div className={styles.bannerhome}>
      <h1 className={styles.bannertxt}>What's for {whatsfor}?</h1>
    </div>
  );
}
