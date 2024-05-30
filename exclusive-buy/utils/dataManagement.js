export default async function fetchDealItems() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0513a73532mshe0479d6629e987ep131dc3jsn11cda4747b33',
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
      'X-RapidAPI-Key': '0513a73532mshe0479d6629e987ep131dc3jsn11cda4747b33',
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
      'x-rapidapi-key': '0513a73532mshe0479d6629e987ep131dc3jsn11cda4747b33',
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
      'X-RapidAPI-Key': '0513a73532mshe0479d6629e987ep131dc3jsn11cda4747b33',
      'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };

  const response = await fetch(`https://real-time-amazon-data.p.rapidapi.com/search?query=${keyWord}&page=1&country=US`, options)
  const resData = await response.json()
  const data = resData.data.products
  return data
}

export async function filterListing(listFilter, priceFilter, keyWord) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0513a73532mshe0479d6629e987ep131dc3jsn11cda4747b33',
      'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };
  const response = await fetch(`https://real-time-amazon-data.p.rapidapi.com/search?query=${keyWord}&page=1&country=US&sort_by=${listFilter}&min_price=${priceFilter.min}&max_price=${priceFilter.max}&product_condition=ALL`, options);
  const resData = await response.json();
  const data = resData.data.products
  return data
}