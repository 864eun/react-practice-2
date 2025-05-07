function LinkIcon({ link }) {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrrer">
      <img className="btn__img" src="/img/link-icon.svg" alt=""></img>
    </a>
  );
}
export default function CourseItem({
  title,
  description,
  thumbnail,
  isFavorite,
  link,
}) {
  let heartIconSate =
    isFavorite === true ? "/img/heart-icon.svg" : "/img/heart-fill-icon.svg";

  return (
    <article className="course">
      <img className="course__img" src={thumbnail} alt="강의 이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course__icons">
        <button className="btn">
          <img className="btn__img" src={heartIconSate} />
        </button>
        {link && <LinkIcon link={link} />}
      </div>
    </article>
  );
}
