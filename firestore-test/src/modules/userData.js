import { async } from "@firebase/util";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../database/firebase";

/* 액션 값 */
const GET_USERDATA = 'userData/GET_USERDATA'; // 값 가져옴
const GET_SUCCESS = 'userData/GET_SUCCESS'; // 성공
const GET_FAILURE = 'userData/GET_FAILURE'; // 실패

const POST_USERDATA = 'userData/POST_USERDATA';
/* 액션 함수
    firebase를 사용하기 위해 Thunk 사용 */
export const getUserData = () => async(dispatch) => {
    let array = [];
    dispatch({type: GET_USERDATA});
    try {
        const querySnapshot = await getDocs(collection(db, "user"));
        querySnapshot.forEach((doc) => {
        //querySnapshot로 문서들을 가져오고 각각의 문서는 doc으로 확인
            console.log(`${doc.id} => ${doc.data().last}`);
            array.push(doc.data());
        });
        dispatch({type: GET_SUCCESS, payload: array});
    } catch(err) {
        dispatch({type: GET_FAILURE, payload: err});
        console.log('error!', err)
    };
};

export const postUserData = (name) => async(dispatch) => {
    try {
        const docRef = await addDoc(collection(db, 'user'), {
            first: "James",
            last: name,
        });
        // dispatch({type: POST_USERDATA})
    } catch(err) {
        console.log('error!', err)
    }
}

/* 초기값 */
const initialState = {
    loading: false,
    userData: null
};

/* 리듀셔 함수 */
const userData = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERDATA:
            return {
                ...state,
                loading: true
            };
        case GET_SUCCESS:
            return {
                ...state,
                loading: false,
                userData: action.payload
            };
        case GET_FAILURE:
            return {
                ...state,
                loading: false
            };
        default:
            return state
    };
};

export default userData;