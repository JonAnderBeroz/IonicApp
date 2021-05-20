import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      notes: [
        {
          id: '1',
          title: "Important note",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.",
          dateStart: "",
          dateEnd: "",
          time: "",
          user: "Jon Ander"
        },
        {
          id: '2',
          title: "Shopping List",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.",
          dateStart: "",
          dateEnd: "",
          time: "",
          user: "Mariane"
        },
        {
          id: '3',
          title: "Meeting with coworkers",
          description:
            "patata",
          dateStart: "2021-06-01",
          dateEnd: "2021-06-01",
          time: "",
          user: "Jon Ander"
        },
      ],
      users: [
        {
          id: 1,
          name: "Jon Ander",
          email: "test@gmail.com",
          password: "a",
        },
        {
          id: 2,
          name: "Mariane",
          email: "test1@gmail.com",
          password: "b",
        },
      ],
      currentUser: {},
    };
  },
  mutations: {
    LOGOUT_USER(state) {
      state.currentUser = {};
      window.localStorage.currentUser = JSON.stringify({});
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
      window.localStorage.currentUser = JSON.stringify(user);
    },
    REGISTER_USER(state, user) {
      const newUser = {
        id: state.users.size + 1,
        name: user.name,
        email: user.email,
        password: user.password,
      };
      state.users.unshift(newUser);
    },
    ADD_NOTE(state, note){
        const newNote={
          id: JSON.stringify(state.notes.length + 1),
          title: note.title,
          description: note.description,
          dateStart: note.eventStart,
          dateEnd: note.eventEnd,
          time: note.eventTime,
          user: state.currentUser.name
        };
        state.notes.unshift(newNote);
    }
  },
  actions: {
    logoutUser({ commit }) {
      commit("LOGOUT_USER");
    },
    loginUser({ commit }, loginInfo) {
      let users = this.getters.users;
      let user = users.find(
        (user) =>
          user.email == loginInfo.email && user.password == loginInfo.password
      );
      if (user) {
        commit("SET_CURRENT_USER", user);
        return user;
      } else {
        return { error: "Email password combination does not match any user" };
      }
    },
    registerUser({commit}, registerInfo){
      let users = this.getters.users;
      let user = users.find(
        (user) =>
          user.email == registerInfo.email
      );
      if (!user) {
        commit("REGISTER_USER", registerInfo);
        return registerInfo;
      } else {
        return { error: "User logged already" };
      }
    },
    loadUser({ commit }) {
      let user = JSON.parse(window.localStorage.currentUser);
      commit("SET_CURRENT_USER", user);
    },
    addNote({commit}, noteData){
        commit("ADD_NOTE", noteData);
    }
  },
  getters: {
    notes(state) {
      return state.notes.filter(note => note.user === state.currentUser.name);
    },
    users(state) {
      return state.users;
    },
    currentUser(state) {
      return state.currentUser;
    },
    note(state){
       return (noteID) => {
        return state.notes.find( (note) => note.id === noteID)
      }
    }
  },
});

export default store;
