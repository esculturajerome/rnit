import Card from "./Card";
import { convertToLink } from "./Functions";

const ProgramsGrid = ({ courses, minimal }) => {
  return (
    <div
      className={`${
        minimal ? "lg:grid-cols-4 " : "lg:grid-cols-3 "
      } grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pb-12 px-4 md:px-24 lg:max-w-screen-2xl mx-auto`}
    >
      {courses?.map((item, i) => (
        <Card
          key={i}
          title={item?.title}
          subText={item?.subText}
          image={item?.image1}
          image2={item?.image2}
          image3={item?.image3}
          url={`
           ${minimal ? "../programs/" : "/programs/"}${convertToLink(
            item?.title
          )}
         `}
        />
      ))}
    </div>
  );
};

export default ProgramsGrid;
