import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export interface ApiTest {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const initData: ApiTest = {
    id: 0,
    name: '',
    email: '',
    phone: ''
}

export const useFetchStore = defineStore("fetchStore", () => {
    const user: Ref<ApiTest> = ref(initData)
    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    const getUsers = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json()
            return data
        } catch (error) {
            console.log(`Error en get users, error: ${error}`)
        }
    }

    const getUser = async (id: number) => {
        const response = await fetch(`${API_URL}/${id}`)
        const data = await response.json();
        return user.value = data
    }

    return {
        user,
        getUsers,
        getUser
    }
})