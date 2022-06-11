import { useState } from "react";

const detailState = {
    detail: [],
}

const useDetailState = (detailState) => {
    const [stateDetail, setStateDetail] = useState(detailState);

    const showDetails = (payload) => {
    setStateDetail({
        detail:[payload]
    })
    }

    return {
        stateDetail,
        showDetails
    }
}

export default useDetailState;