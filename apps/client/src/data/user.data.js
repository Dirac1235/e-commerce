"use server"
import fetcher from "./fetcher";

export async function getUser() {
    try {
        const res = await fetcher.get('/users/me');
        console.log(res.data)
        return res.data;
        
    } catch (error) {
        return "error"
    }
}
export async function getUsers() {
    try {
        const res = await fetcher.get('/users');
        return res.data;
        
    } catch (error) {
        return error
    }
}
export async function deleteUser(id) {
    try {
        const res = await fetcher.delete(`/users/me/${id}`);
        return res.data;
        
    } catch (error) {
        return error
    }
}