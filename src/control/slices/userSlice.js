import { createSlice, } from "@reduxjs/toolkit"
import alertify from "alertifyjs";
import woman from "../../images/woman.jpeg"
import man from "../../images/man.jpg"


 const userSlice = createSlice({
    name: "user",       // key gibi
    initialState: {
        users: [{
            name: "Cuma Kaplan",
            userName: "Cuma",
            email: "cuma@gmail.com",
            phoneNumber: "05554443322", 
            password: "12345",
            address: "mahalle, cadde, sokak, mevki, apartman numarası / daire numarası, İlçe/İl ",
            id: 11,
            profile: man,
        },

        {
            name: "Zeynep Kizil",
            userName: "zeynep",
            email: "zeynep@gmail.com",
            phoneNumber: "05554443322",
            password: "11111",
            address: "mahalle, cadde, sokak, mevki, apartman numarası / daire numarası, İlçe/İl ",
            id: 33,
            profile: woman,
        },
        {
            name: "Ömer",
            userName: "ömer",
            email: "ömer@gmail.com",
            phoneNumber: "05554443322",
            password: "12121",
            address: "mahalle, cadde, sokak, mevki, apartman numarası / daire numarası, İlçe/İl ",
            id: 44,
            profile: man,
        }, 
        ],
       currentUserIndex: -1,
    },
    reducers: {              // update etmek için. Actions, fonksiyon
        addUser: (state, action) => {
            // Return a new array with the new user object appended
            return {
                ...state,
                users: [...state.users, action.payload],
                currentUser: { ...action.payload },
                currentUserIndex : state.users.findIndex(user => user.id === action.payload.id),
                currentUserIndex: state.users.length // Güncel kullanıcı index'i
            };
        },

        logOut: (state) => {
            return {
                ...state,
                currentUserIndex: -1,
            }
        },

        update: (state, action) => {
            const updatedUsers = state.users.map((user, index) => {
                if (index === state.currentUserIndex) {
                    return {
                        ...user,
                        ...action.payload
                    };
                }
                return user;
            });

            return {
                ...state,
                users: updatedUsers
            };
        },

        logIn: (state, action) => {
            // { console.log(action.payload) }
            const userIndex = state.users.findIndex(user => user.email === action.payload.email);

            if (userIndex !== -1) {
                // { console.log(action.payload) }
                if (state.users[userIndex].password === action.payload.password) {
                    return {
                        ...state,
                        currentUserIndex: userIndex,
                    };
                } else {
                    alertify.error("Yanlış şifre!");
                }
            } else {
                alertify.error("Geçerli bir kullanıcı girin.");
                // sayfayı yenile?
                //window.location.reload()
            }
        }
    },
}
)
export const selectUsers = (state) => state.user.users;
export const { addUser, logOut, update, logIn } = userSlice.actions      // fonksiyonları dışarı aktarır
export default userSlice.reducer