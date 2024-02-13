import React, { useContext, useEffect, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryItem = ({ author, content, created_date, emotion, id }) => {
  const { onEdit, onRemove } = useContext(DiaryDispatchContext);
  useEffect(() => {
    console.log(`${id}번째 아이템 렌더!`);
  });
  const localContentInput = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  // 원래 content 값을 넣어줌으로써 수정하기 버튼을 누르면 content 값이 나온다.
  const [localContent, setLocalContent] = useState(content);

  const handleRemove = () => {
    if (window.confirm(`${id + 1}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };
  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id + 1}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };
  return (
    <div className="DiaryItem">
      <div className="info">
        <div>
          <span>
            작성자 : {author} | 감정점수 : {emotion}
          </span>
          <div>
            {isEdit ? (
              <>
                {" "}
                <button onClick={handleQuitEdit}>수정 취소</button>
                <button onClick={handleEdit}>수정 완료</button>
              </>
            ) : (
              <>
                <button onClick={handleRemove}>삭제하기</button>
                <button onClick={toggleIsEdit}>수정하기</button>
              </>
            )}
          </div>
        </div>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            ></textarea>
          </>
        ) : (
          <>{content}</>
        )}
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
