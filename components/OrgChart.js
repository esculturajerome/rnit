import Image from "next/image";

import OrgPicture from "../public/images/org-chart.jpg";
import TitleRow from "./TitleRow";

const OrgChart = () => {
  return (
    <div
      id="orgchart"
      className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl lg:px-24 lg:py-20 "
    >
      <TitleRow title="Organization Chart" />
      <Image
        src={OrgPicture}
        alt="Hero image"
        width={1600}
        height={1400}
        objectFit="contain"
        blurDataURL={OrgPicture.blurData}
        placeholder="blur"
      />
    </div>
  );
};

export default OrgChart;
