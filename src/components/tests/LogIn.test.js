// IF WE DIDN'T DEFINE {global: true}
// import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import LogIn from '../../components/LogIn.vue';
import SignUp from '../../components/SignUp.vue';

describe('LogIn', async () => {
  it('should mount LogIn', () => {
    const wrapper = mount(LogIn);
    expect(LogIn).toBeTruthy();
    expect(wrapper.find('div[class="formContainer"]').exists()).toBeTruthy();
  });

  it('should render Signup component', async () => {
    const wrapper = mount(LogIn);

    await wrapper.find('a').trigger('click');
    expect(SignUp).toBeTruthy();
  });
});

describe('Signup', async () => {
  it('should render Signup', async () => {
    const wrapper = mount(SignUp);

    await wrapper.find('a').trigger('click');
    expect(LogIn).toBeTruthy();
  });
});

