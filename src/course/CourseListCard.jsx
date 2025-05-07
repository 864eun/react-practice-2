import Card from "../components/Card.jsx";
import CourseItem from "./CourseItem";
import { Fragment } from "react";

function CourseListCard({ title, items }) {
  const lastIndex = items.length - 1
  return (
    <Card title={title}>
      <div className="courses">
        {items.map((item, index) => (
          <Fragment key={item.key}>
            <CourseItem {...item} />
            {index != lastIndex && <hr className="divider" />}
          </Fragment>
        ))}
      </div>
    </Card>
  );
}

export default CourseListCard;
