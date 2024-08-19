import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: "user",
    state: () => {
        return {
            userList: [
                {
                    id: 1,
                    username: "admin",
                    password: "admin",
                    role: "admin",
                },
                {
                    id: 2,
                    username: "user",
                    password: "user",
                    role: "user",
                }
            ],
            user: null,
            isAdmin: false,
        };
    },
    actions: {
        login(username, password) {
            const user = this.userList.find(user => user.username == username && user.password === password);
            

            if (user) {
                if(user.role === "admin") {
                    this.isAdmin = true;
                }
                this.user = user;
                return true
            } else {
                return false
            }
        },
        register(username, password) {
            const user = {
                id: Math.floor(Math.random() * 1000) + 1,
                role: "user",
                username,
                password,
            };

            if(user) {
                this.userList.push(user);
                this.user = user;

                console.log(this.userList);
                console.log(this.user);
                
                return true;
            } else {
                return false;
            }

        },
        logout() {
            this.user = null;
            this.isAdmin = false;
            localStorage.removeItem("admin");
        },
        setUser(user) {
            this.user = user;
        },
    },
    getters: {
        getUser() {
            return this.user;
        },

        isAdminCheck() {
            return this.user.role === "admin";
        },
    },
    persist: {
        enabled: true,
    },
});