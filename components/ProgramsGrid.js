import Card from "./Card";
import { convertToLink } from "./Functions";

const ProgramsGrid = ({ courses, minimal }) => {
  return (
    // <div
    //   className={`${
    //     minimal ? "lg:grid-cols-4 " : "lg:grid-cols-3 "
    //   } grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pb-12 px-4 md:px-8 lg:px-24`}
    // >
    <div className="grid md:grid-cols-2 lg:grid-cols-3 inside gap-6">
      {courses?.map((item, i) => (
        <Card
          key={i}
          title={item?.title}
          description={item?.subText}
          image={item?.image1}
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
