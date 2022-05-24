import './App.scss';
import {useState} from 'react';
import TodoItem from './components/TodoItem';

const initialState = [
  {
    id: 1,
    count: 0
  },
  {
    id: 2,
    count: 0
  },
  {
    id: 3,
    count: 0
  },
  {
    id: 4,
    count: 0
  },
  {
    id: 5,
    count: 0
  }
]

function App() {
  let [items, setItems] = useState(initialState);

  const total = () => {
      return items.filter(item => item.count > 0).length;
  }

  const refresh = () => {
    const itemsCopy = [...items]
    itemsCopy.map(i => {
      i.count = 0;
      return i;
    })
    setItems(itemsCopy)
  }

  const restore = () => {
    const initialStateCopy = [...initialState]
    const newInitial = initialStateCopy.map(i => {
      i.count = 0
      return i
    })
    setItems(newInitial);
  }

  const increaseItem = (id) => {
    const itemsCopy = [...items]
    itemsCopy.map(i => {
      if (i.id === id) {
        i.count++
      }
      return i
    })
    setItems(itemsCopy)
  }

  const decreaseItem = (id) => {
    const itemsCopy = [...items]
    itemsCopy.map(i => {
      if (i.id === id && i.count > 0) {
        i.count--
      }
      return i
    })
    setItems(itemsCopy)
  }

  const deleteItem = (id) => {
    const itemsCopy = items.filter(item => item.id !== id)
    setItems(itemsCopy)
  }

  return (
      <div className="App">
        <section className="container pt-2">
          <div className="row">
            <div className="col-md-3 parent-containers">
              <img src="assets/icons/shop.svg" />
              <p className="header-items-count">{total()}</p>
              <p className="header-items">Items</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 parent-containers">
              <button className="btn btn-success button-restore" onClick={refresh}>
                  Refresh numbers
                  <img src="assets/icons/refresh.svg" className="icons" />
              </button>
              <button className="btn btn-primary" onClick={restore}>
                  Restore
                  <img src="assets/icons/restore.svg" className="icons" />
              </button>
            </div>
          </div>

          {items.map((item) => {
            return (
                <div key={item.id}>
                  <TodoItem
                      item={item}
                      increaseItem={increaseItem}
                      decreaseItem={decreaseItem}
                      deleteItem={deleteItem}
                  />
                </div>
            )
          })}
        </section>
      </div>
  );
}

export default App;
