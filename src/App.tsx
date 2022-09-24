import './App.scss'
import React, { useEffect, useState } from 'react'
import { Suggestions } from './components/SuggestionsBox'
import { TProducts, TProduct } from './components/types'

const App = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  const [search, setSearch] = useState<string>('')
  const [suggestions, setSuggestions] = useState<TProduct[]>([])
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    fetch('https://dummyjson.com/products/?limit=100')
      .then((response) => response.json())
      .then(({ products }: TProducts) => {
        setProductList(products)
      })
  }, [])

  const filterResults = (value) =>
    new Promise<TProduct[]>((resolve) => {
      const suggestions = productList.filter((todo) =>
        todo.title.toLowerCase().startsWith(value.toLowerCase())
      )

      resolve(suggestions)
    })

  const handleSearch = async (e) => {
    const value = e.target.value

    setSearch(value)
    setOpen(!!value)

    const suggestions: TProduct[] = await filterResults(value).then(
      (res) => res
    )

    setSuggestions(suggestions)
  }

  const withStyles = (Component) => {
    const HOC = (props) => {
      const style = { color: 'red' }
      return <Component style={style} {...props} />
    }

    HOC.displayName = 'HOC'
    return HOC
  }

  const Text = (props) => <p {...props}>Hello World</p>

  const StyledText = withStyles(Text)

  return (
    <div className="App">
      <div className="title">Auto complete</div>
      <div className="autocompleteWrapper">
        <input className="input" value={search} onChange={handleSearch} />
        {open && <Suggestions suggestions={suggestions} highlight={search} />}
        <StyledText />
      </div>
    </div>
  )
}

export default App
