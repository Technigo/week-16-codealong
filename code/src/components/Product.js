import React from 'react'
import { useSelector } from 'react-redux'

export const Product = () => {
  const scan = useSelector(state => state.products.product)

  if (!scan) return null

  console.log('SCAN', scan)

  const formattedCategories =
    scan.product &&
    scan.product.categories_tags.map(cat =>
      cat.replace('en:', '').replace(/-/gi, ' ')
    )
  /*
  replace can be used with string or regular expression. When used with a string, as in the first example -> .replace('en:', '') it will replace the first time this string occurs. Also since we're mapping through an array this will happen for each item in the array.
  If the replace method is used with a regex (regular expression) like in the second example -> it will replace all the '-'with a ' ' (space) not only the first time for each item in the array. 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  */
  console.log('CAT', formattedCategories)

  return (
    <>
      {scan.product && scan.status === 1 && (
        <section className='product-container'>
          <h1 className='title'>{scan.product.product_name}</h1>
          <p>Nutrition grade: {scan.product.nutrition_grades}</p>
          <img className='nutriton' src={scan.product.image_nutrition_url} />
          {scan.product.photographers_tags.map(photographer => (
            <p key={photographer}>{photographer}</p>
          ))}
          <h3>Categories:</h3>
          <ul>
            {formattedCategories.map((cat, index) => (
              <li key={index}>{cat}</li>
            ))}
          </ul>
        </section>
      )}
      {scan.status === 0 && <h1>{scan.status_verbose}</h1>}
    </>
  )
}
