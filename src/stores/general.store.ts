import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

interface DataInformation {
    id: number;
    title: String;
    duration: number;
    director: String
}

export const useGeneralStore = defineStore("general", () => {
    const generalData: Ref<DataInformation[]> = ref([
        { id: 1, title: 'Test', duration: 8.00, director: 'Test Direct' },
        { id: 2, title: 'Test I', duration: 6.00, director: 'Director' },
        { id: 3, title: 'Test II', duration: 10.00, director: 'Test Director II' }
    ])

    const addGeneralData = (data: DataInformation) => generalData.value.push(data)

    return {
        addGeneralData,
        generalData
    }
})