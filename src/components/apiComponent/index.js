import React from "react";
import GetApiData from "../../services/api/getApiData";
import GetImageByDate from "../../services/api/getImgByDate";
import * as S from "./style"
export default function ApiComponent() {
    return (
        <S.ApiContainer>
            <GetImageByDate />
            <GetApiData />
        </S.ApiContainer>
    )
}

