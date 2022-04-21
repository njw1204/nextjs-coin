import { NextApiRequest, NextApiResponse } from "next";

const getPercentage = () => {
  return ((+(new Date()) - +(new Date('2020-09-11T00:00:00+09:00'))) / (+(new Date('2022-08-10T00:00:00+09:00')) - +(new Date('2020-09-11T00:00:00+09:00'))) * 100).toFixed(7);
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send(`${getPercentage()}%`);
}