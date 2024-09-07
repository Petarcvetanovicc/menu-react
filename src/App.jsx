import { useState } from 'react'
import Item from './Item'
import menu from './data'

const categories = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)

  const getCategory = (category) => {
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newArray = menu.filter((item) => item.category === category)
    setMenuItems(newArray)
  }

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our menu</h2>
          <div className="title-underline"></div>
        </div>
        <div className="btn-container">
          {categories.map((item, index) => {
            return (
              <button
                type="button"
                className="btn"
                key={index}
                onClick={(e) => {
                  getCategory(e.target.innerHTML)
                }}
              >
                {item}
              </button>
            )
          })}
        </div>
        <div className="section-center">
          {menuItems.map((item) => {
            return <Item {...item} key={item.id} />
          })}
        </div>
      </section>
    </main>
  )
}
export default App
