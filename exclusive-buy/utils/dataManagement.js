export default async function fetchDealItems() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '57b069277dmshd8b557b7fb7f15fp1486b7jsnb408a1ac783a',
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
      'X-RapidAPI-Key': '57b069277dmshd8b557b7fb7f15fp1486b7jsnb408a1ac783a',
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
      'x-rapidapi-key': '57b069277dmshd8b557b7fb7f15fp1486b7jsnb408a1ac783a',
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
      'Content-Type': 'application/json'
    }
  };

  const response = await fetch(`https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${itemId}&country=US`, options)
  const resData = await response.json()
  const data = resData.data
  return data
}

export async function searchProduct(keyWord) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '57b069277dmshd8b557b7fb7f15fp1486b7jsnb408a1ac783a',
      'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };
  console.log(keyWord)
  const response = await fetch(`https://real-time-amazon-data.p.rapidapi.com/search?query=${keyWord}&page=1&country=US`, options)
  const resData = await response.json()
  const data = resData.data.products
  return data
}

export async function filterListing(listFilter, priceFilter, page, condition, keyWord) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '57b069277dmshd8b557b7fb7f15fp1486b7jsnb408a1ac783a',
      'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };
  const response = await fetch(`https://real-time-amazon-data.p.rapidapi.com/search?query=${keyWord}&page=${page}&country=US&sort_by=${listFilter}&min_price=${priceFilter.min}&max_price=${priceFilter.max}&product_condition=${condition}`, options);
  const resData = await response.json();
  const data = resData.data.products
  return data
}