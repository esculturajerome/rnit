import { Children, Fragment } from "react";

const Breadcrumb = ({ children }) => {
  const childrenArray = Children.toArray(children);
  console.log(childrenArray, "wwww");

  // var removeHash = #+[a-zA-Z0-9(_)]{1,}/g

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span className="text-white/70">/</span>
        </Fragment>
      );
    }
    return child;
  });

  return (
    <div className="bg-sky-900">
      <nav className="px-4 py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <ol className="flex items-center space-x-4">{childrenWtihSeperator}</ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
