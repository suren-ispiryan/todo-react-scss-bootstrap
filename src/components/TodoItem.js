const TodoItem = (props) => {
    const {
        item,
        increaseItem,
        decreaseItem,
        deleteItem
    } = props

    return (
        <div className="row">
            <div className="col-md-3 parent-containers">
                <p className="items-count">{item.count}</p>
                <button
                    className="btn btn-secondary action-parents"
                    onClick={() => increaseItem(item.id)}
                >
                    <img src="assets/icons/plus.svg" className="action-icons" alt="#" />
                </button>

                <button
                    className="btn btn-primary action-parents"
                    onClick={() => decreaseItem(item.id)}
                >
                    <img src="assets/icons/minus.svg" className="action-icons" alt="#" />
                </button>

                <button
                    className="btn btn-danger action-parents"
                    onClick={() => deleteItem(item.id)}
                >
                    <img src="assets/icons/delete.svg" className="action-icons" alt="#" />
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
