import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Home from './Home.vue';

describe('Home', () => {

    it('render component correctly', () => {
        const wrapper = mount(Home)
        expect(wrapper.find("h1").text()).toBe("Welcome home")
    })

    it('increment variable counter ++', async () => {
        const wrapper = mount(Home)
        expect(wrapper.find('#counter').text()).toContain("Counter: 0")

        await wrapper.find("#counter-btn").trigger("click")
        expect(wrapper.find('#counter').text()).toContain("qCounter: 1")
    })

})
