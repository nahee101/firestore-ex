import { collection, getDocs, addDoc, arrayUnion } from "firebase/firestore";
import { useState } from "react";
import { db } from '../database/firebase';

const Data = () => {

    const [docData, setDocData] = useState([]);

    const getData = async () => {
        // 클릭했을 때 값을 가져오기 위한 함수
        // await를 사용하기 위해 항상 async를 사용해야 함
        const querySnapshot = await getDocs(collection(db, "user"));
            querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().first}`);
            arrayUnion.push({last: doc.data().last, first: doc.data().first})
        });
    };

    const addData = async () => {
        try {
            const docRef = await addDoc(collection(db, "user"), {
                born: 1815,
                first: "Tom",
                last: "Lovelace",
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <div>
            <h1>파이어베이스에서 저장된 값을 가져와 출력하고 있습니다.</h1>
            <p>콘솔 확인</p>
            <button onClick={getData}>버튼을 눌러 확인하세요</button>
            <button onClick={addData}>버튼을 눌러 값을 추가하세요</button>
        
            {
                docData.map((data) => (
                    <div>
                        {data.last}
                    </div>
                ))
            }
        </div>
    );
};

export default Data;