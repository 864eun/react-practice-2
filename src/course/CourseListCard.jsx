import { Fragment } from 'react';
import CourseItem from './CourseItem';
import Card from '../components/Card'

function CourseListCard({ title, items, onFavorite }) {

  const lastIndex = items.length - 1;

  return (
    <Card title={title}>
      <div className='courses'>
        {items.map((item, index) => (
          <Fragment key={item.id}>
            <CourseItem {...item} onFavorite={onFavorite} />
            {index !== lastIndex && <hr className="divider" />}
          </Fragment>
        ))}
      </div>
    </Card>
  );
}

export default CourseListCard;