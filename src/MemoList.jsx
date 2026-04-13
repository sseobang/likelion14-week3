import MemoItem from "./MemoItem.jsx";

function MemoList(props) {
  return (
    <div>
      {props.memos.map(function (memo) {
        return (
          <MemoItem
            key={memo.id}
            memo={memo}
            onRemove={props.onRemove}
          />
        );
      })}
    </div>
  );
}

export default MemoList;