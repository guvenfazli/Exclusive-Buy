export default async function fetchDealItems() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ec54d1c6e3msh4efcdc1eb857d38p1c7d44jsn1335bbc620af',
      'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };

  const response = await fetch('https://real-time-amazon-data.p.rapidapi.com/deals-v2?country=US', options)
  const resData = await response.json()
  const data = resData.data.deals
  return data
}

export async function fetchByCategory(category, pageNumber) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ec54d1c6e3msh4efcdc1eb857d38p1c7d44jsn1335bbc620af',
      'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };

  const response = await fetch(`https://real-time-amazon-data.p.rapidapi.com/search?query=${category}&page=${pageNumber}&country=US`, options)
  const resData = await response.json()
  const data = resData.data.products
  return data
}

export async function fetchDetails(itemId) {
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'ec54d1c6e3msh4efcdc1eb857d38p1c7d44jsn1335bbc620af',
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
      'Content-Type': 'application/json'
    }
  };

  const response = await fetch(`https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${itemId}&country=US`, options)
  const resData = await response.json()
  const data = resData.data
  return data
}