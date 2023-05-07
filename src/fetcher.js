export const fetcher = async (EndPoint) => {
    const responseObject = { data: [], error: "" };
    const BaseURL = "http://localhost:3001";

    try {
        const res = await fetch(BaseURL + EndPoint);
        const data = await res.json();
        responseObject.data = data;
        // responseObject.error = "";
    } catch (error) {
        responseObject.error = error;
    }
    return responseObject
}

export const getCategories = () => {
    return fetcher("/categories");
}

export const getProducts = () => {
    return fetcher("/products");
}

export const getProductsFilterByCategory = (id) => {
    return fetcher("/products?catId=" + id);
}

export const getProductsByID = (id) => {
    return fetcher("/products/" + id);
}

export const getProductsByQuery = (query) => {
    return fetcher("/products?q=" + query);
}