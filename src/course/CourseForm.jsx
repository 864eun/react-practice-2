import Card from "../components/card";

function handleSubmit(e){
e.preventDefault();
}


export default function CourseForm() {
  return (
    <Card title="강의등록">
      <form 
      onSubmit={handleSubmit}
      style={{display:'flex', gap:'1rem', flexDirection:'column' }}>
        <input type="text" placeholder="강의 제목" />
        <input type="text" placeholder="강의 한줄 설명" />
        <input type="submit" value="등록" />
      </form>
    </Card>
  );
}
