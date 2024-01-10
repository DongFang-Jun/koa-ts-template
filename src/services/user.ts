import User from "../models/user";
import { anyKeyObject } from "../type/global";
import dayjs from "dayjs";


export const testService = ({
  mobile,
  platform,
}: {
  mobile: string;
  platform: string;
}) => {
  return User.findOne({
    where: { mobile, platform },
  });
};
