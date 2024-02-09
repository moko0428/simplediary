import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "moko",
    content: "aa",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "12",
    content: "aa",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "13",
    content: "aa",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "15",
    content: "aa",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
