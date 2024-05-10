"use client"
// 넥스트 13버전부터 생긴 요소로 컴포넌트가 클라이언트 측에서만 실행되도록 조건을 설정
import { useServerInsertedHTML } from "next/navigation"
import { useState } from "react"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import { GlobalStyle } from "./GlobalStyle"


export const Registry = ({children}) => {
    const [sheet] = useState(()=> new ServerStyleSheet())
    // 초기 상태에서 ServerStyleSheet라는 인스턴스 생성

    useServerInsertedHTML(()=>{
        // 서버에서 html로 스타일 태그를 직접 삽입하는 작업
        const style = sheet.getStyleElement(); // 스타일 시트에서 스타일 요소만 추출
        sheet.instance.clearTag() // 스타일 시트 인스턴스에서 모든 태그를 지움
        return<>{style}</> // 추출된 스타일 요소를 반환해서 html에 삽입
    })

    // 클라이언트 사이드에서 실행되는 경우 children 을 그대로 반환
    if(typeof document !== 'undefined'){
        return<>{children}</>
    }
// 서버 사이드에서 실행되는 경우(StyleSheetManager)를 사용해서 스타일 시트를 적용
    return (
        <StyleSheetManager sheet={sheet.instance}>
            <GlobalStyle/>
            {children}
        </StyleSheetManager>
    )
}