export default async function fetchDealItems() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '37574890f8mshf7df8902a5e92e6p1081e2jsnbd77d46d9ddc',
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
      'X-RapidAPI-Key': '37574890f8mshf7df8902a5e92e6p1081e2jsnbd77d46d9ddc',
      'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };

  const response = await fetch(`https://real-time-amazon-data.p.rapidapi.com/search?query=${category}&page=${pageNumber}&country=US`, options)
  const resData = await response.json()
  const data = resData.data.products
  return data
}