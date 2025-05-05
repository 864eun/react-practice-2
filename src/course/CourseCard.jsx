import '../App.css'

export default function Card(){
  const theme = {
    background : 'blue',
    color: 'black',
  }
  return(
    <article class="course" style={theme}>
    <img class="course__img" src="./public/htmlcss.png" alt="" />
    <div class="course__body">
      <div class="course__title">입문자를 위한, HTML&CSS 웹 개발 입문</div>
      <div class="course__description">웹 개발에 필요한 기본 지식을 배웁니다. </div>
    </div>
  </article>
  )
}