import { useSelector, useDispatch } from "react-redux";
import { getUserData, postUserData } from '../modules/userData'
import { useState } from "react";

const UserData = () => {
    const [name, setName] = useState('')
    const { loading, userData } = useSelector((state) => ({
        loading: state.userData.loading,
        userData: state.userData.userData
    }))
    const dispatch = useDispatch();
    const onGetUser = () => {
        dispatch(getUserData())
    }

    return (
        <div>
            <input type="text" 
            value={name} 
            onChange={(e) => {setName(e.target.value);}} />
            <button 
            onClick={onGetUser}>
                버튼을 눌러서 값을 가져오세요
            </button>
            <button
            onClick={() => {
                dispatch(postUserData(name));
            }}>
                버튼을 눌러서 값을 추가하세요
            </button>
            {/* 리덕스를 통해 가져온 값을 map을 통해서 추가함 */}
            { loading && <p>loading...</p> }
            { 
                !loading && userData && userData.map((data) => (
                    <p>name: {data.last}</p>
                ))
            }
        </div>
    );
};

export default UserData;