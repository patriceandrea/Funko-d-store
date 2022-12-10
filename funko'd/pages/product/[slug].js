import React from 'react'

import { client, urlFor } from '../../lib/client'

const ProductDetails = ({ product, products }) => {

  const { image, name, details, price } = product;

  return (
    <div>
      <div className='product-details-container'>
        <div>
          <div className='image-container'>
            <img src='' />

          </div>
          <div className='small-images-container'>
            {image?.map((item, i) => (
              <img
                src={urlFor(DataTransferItemList)}
                className=''
                onMouseEnter=''
              />
            ))}
          </div>

          <div className='products-details-desc'>
            <h1>{name}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0] `;
  const productQuery = `*[_type == 'product']`;

  const product = await client.fetch(query);
  const products = await client.fetch(productQuery);

  console.log(product)
  return {
    props: { product, products }
  }
}

export async function getStaticPaths() {
  const query = `*[_type =="product"]{
  slug {
    current
  }
}`;

  const products = await client.fetch(query);


  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export default ProductDetails; 
