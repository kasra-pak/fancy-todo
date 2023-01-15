import React, { forwardRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilter, selectTodoById } from "@reducers/rootReducer";
import * as S from "./Item.styled";

const Item = forwardRef(
  ({ id, handleMouseDown, handleMouseUp, draggingElIndex, currIndex }, ref) => {
    const dispatch = useDispatch();
    const todoData = useSelector(state => selectTodoById(state.todos, id));
    const filter = useSelector(selectFilter);

    const handleToggle = event => {
      dispatch({ type: "TOGGLE_TODO", payload: event.target.dataset.id });
    };

    const handleDelete = event => {
      dispatch({ type: "DELETE_TODO", payload: event.target.dataset.id });
    };

    if (filter === "Completed" && !todoData.completed) {
      return null;
    }

    if (filter === "Active" && todoData.completed) {
      return null;
    }

    const [trans, setTrans] = useState(0);

    useEffect(() => {
      if (draggingElIndex !== null) {
        const { height } = ref.current.getBoundingClientRect();
        const index = Array.from(ref.current.parentElement.childNodes).indexOf(
          ref.current
        );

        if (currIndex !== null) {
          if (draggingElIndex === currIndex) {
            setTrans(0);
          } else if (index < currIndex && index > draggingElIndex) {
            setTrans(-height);
          } else if (index > currIndex && index < draggingElIndex) {
            setTrans(height);
          } else if (index === currIndex) {
            setTrans(prevState => {
              if (prevState) return 0;
              if (index > draggingElIndex) {
                return -height;
              } else {
                return height;
              }
            });
          } else {
            setTrans(0);
          }
        }
      } else {
        setTrans(0);
      }
    }, [currIndex, draggingElIndex]);

    return (
      <S.Wrapper
        ref={ref}
        onMouseDown={handleMouseDown.bind(this, ref)}
        onMouseUp={handleMouseUp}
        style={{ transform: `translateY(${trans}px)` }}
      >
        <S.Border complete={todoData.completed}>
          <S.CompleteBtn
            type="button"
            complete={todoData.completed}
            onClick={handleToggle}
            data-id={id}
          />
        </S.Border>
        <S.Text complete={todoData.completed}>{todoData.text}</S.Text>
        <S.DeleteBtn type="button" data-id={id} onClick={handleDelete} />
      </S.Wrapper>
    );
  }
);

Item.displayName = "Item";

export default Item;
