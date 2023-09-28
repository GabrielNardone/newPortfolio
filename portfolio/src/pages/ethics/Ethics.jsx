import { useState } from "react"
import "./ethics.css"
import { Column } from "../../components/column/Column"

export const Ethics = () => {
  const quotes = [
    `The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.`,
    `It is not because things are difficult that we do not dare, it is because we do not dare that they are difficult.`,
    `The Sun, who rules over the planets, does not forget to ripen a bunch of grapes.`,
    `Never discourage anyone (...) who continually makes progress, no matter how slow.`,
    `What wisdom can you find greater than kindness.`,
    `Rules for happiness: something to do, someone to love, something to hope for.`,
    `Except our own thoughts, there is nothing absolutely in our power.`,
    `The first and fundamental law of Nature, which is, to seek peace and follow it.`
  ]
  const author = [
    `Marco Aurelio`,
    `Seneca`,
    `Galileo`,
    `Plato`,
    `Rousseau`,
    `Kant`,
    `Descartes`,
    `Hobbes`
  ]

  const [quote, setQuote] = useState(0)

  const nextQuote = () => {
    if (quote === quotes.length - 1) {
      return
    } else setQuote(() => quote + 1)
  }
  const backQuote = () => {
    if (quote === 0) {
      return
    } else setQuote(() => quote - 1)
  }



  return (
    <div className="divEthics animate__animated animate__fadeIn animate__faster">

      <Column/>

      <div className="divQuotes">

        <div>
          <p>{quotes[quote]}</p>
          <p className="author">{author[quote]}</p>
        </div>

        <article>
          <button onClick={backQuote} >Back</button>
          <button onClick={nextQuote} >Next</button>
        </article>

      </div>
      
      <Column/>

    </div>
  )
}
