import { createStore } from 'vuex';

// const state = {
//   users: [
//     {
//       id: 'John',
//       firstName: 'John',
//       lastName: 'Doe',
//       email: 'test@gmail.com',
//       pass: 'testing',
//     },
//     {
//       id: 'Dio',
//       firstName: 'Dio Regine',
//       lastName: 'Arayan',
//       email: 'dio@gmail.com',
//       pass: 'dioarayan',
//     },
//   ],
// };

// const mutations = {
//   addUser(state, payload) {
//     state.users.push(payload);
//   },

//   hasUsers(state) {
//     state.users && state.users.length > 0;
//   },
// };

// const actions = {
//   addUser: (context, data) => {
//     const userData = {
//       firstName: data.first,
//       lastName: data.last,
//       email: data.email,
//       pass: data.pass,
//     };
//     context.commit('addUser', { ...userData, id: userData[firstName] });
//   },
// };

// const getters = {
//   users: (state) => state.users,
// };

// export default createStore({
//   state,
//   getters,
//   actions,
//   mutations,
// });

const store = createStore({
  state() {
    return {
      users: [
        {
          id: 'John',
          firstName: 'John',
          lastName: 'Doe',
          email: 'test@gmail.com',
          pass: 'testing',
        },
        {
          id: 'Dio',
          firstName: 'Dio Regine',
          lastName: 'Arayan',
          email: 'dio@gmail.com',
          pass: 'dioarayan',
        },
      ],
    };
  },
  mutations: {
    addUser(state, payload) {
      state.users.push(payload);
    },
  },
  getters: {
    users(state) {
      return state.users;
    },

    hasUsers(state) {
      return state.users && state.users.length > 0;
    },
  },

  actions: {
    addUser(context, data) {
      const userData = {
        firstName: data.first,
        lastName: data.last,
        email: data.email,
        pass: data.pass,
      };
      context.commit('addUser', { ...userData, id: userData[firstName] });
    },
  },
});

export default store;
