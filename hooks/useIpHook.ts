import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useIp = () => {
  const [ip, setIp] = useState<string>("");

  const getIp = useCallback(async () => {
    try {
      const { data } = await axios.get("https://ip.nf/me.json");
      setIp(data?.ip?.ip);
    } catch (error) {
      console.log("Error while fetching ip", error);
    }
  }, []);

  useEffect(() => {
    getIp();
  }, [getIp]);

  return {
    ip,
  };
};
