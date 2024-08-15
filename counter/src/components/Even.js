import { useEffect } from "react";

function Even() {
    useEffect(() => {
        //cleanup function
        //useEffect에서 return을 사용하면 unmount될때 실행된다
        return () => {
            console.log("unmount even");
        };
    }, []);

    return <div>짝수 입니다.</div>;
}

export default Even;
