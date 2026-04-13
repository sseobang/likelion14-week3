function MemoItem(props) {
  function handleDelete() {
    props.onRemove(props.memo.id);
  }

  return (
    <div className="memo-item">
      <span>{props.memo.text}</span>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

export default MemoItem;