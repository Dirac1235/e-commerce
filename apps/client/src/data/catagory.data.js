
'use server';

import fetcher from './fetcher';
import revalidate from './revalidate';

export async function createCategory(data,) {
    const catagory = fetcher.post('/categories', data);
    revalidate({ tags: ['CATAGORIES'] });
    return catagory;
}

export async function getManyCategories() {
    const res = await fetcher.get('/categories');
    return res.data;
}

export async function getOneCategory(id,) {
    const res = await fetcher.get(`/categories/${id}`);
    return res.data;
}

export async function updateCategory(id, data) {
    const res = await fetcher.put(`/categories/${id}`, data);
    return res.data;
}

export async function deleteCatagory(id) {
    const res = await fetcher.get(`/categories/${id}`);
    return res.data;
}

