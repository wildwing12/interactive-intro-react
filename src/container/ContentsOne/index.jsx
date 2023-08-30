import React, {useEffect, useState} from "react";
import {Section0, Section1, Section2, Section3} from "../../component/contentsOne/index";

const ContentsOne = () => {
    const [sceneInfo,setSceneInfo] =useState( [
        {
            type:'sticky',
            heightNum:5,//브라우저 높이의 5배로 scrollHight 세팅
            scrollHeight:'',//하나의 씬의 높이
            objs:{

            }
        },
        {
            type:'normal',
            heightNum:5,//브라우저 높이의 5배로 scrollHight 세팅
            scrollHeight:'',//하나의 씬의 높이
            objs:{

            }
        },
        {
            type:'sticky',
            heightNum:5,//브라우저 높이의 5배로 scrollHight 세팅
            scrollHeight:'',//하나의 씬의 높이
            objs:{

            }
        },
        {
            type:'sticky',
            heightNum:5,//브라우저 높이의 5배로 scrollHight 세팅
            scrollHeight:0,//하나의 씬의 높이
            objs:{

            }
        }
    ]);

    useEffect(()=>{
        setLayout();
        window.addEventListener('resize',setLayout);
        return ()=>window.removeEventListener('resize',setLayout);
    },[])
    const setLayout = () =>{
        const {innerHeight} = window;
        let heightArr = [];
        for(let i = 0; i<sceneInfo.length; i++){
            const sectionHeight= sceneInfo[i].heightNum * innerHeight; //window.innerHeight는 브라우저의 내부 높이다.
            const sceneHeight = `${sectionHeight}px`;
            heightArr[i]=sceneHeight;
        }
        setSceneInfo(item=>{
            return item.map((item,idx)=>{
                return {...item,scrollHeight:heightArr[idx]}
            })
        })
    }
console.log(sceneInfo[0].scrollHeight)
    return (
        <>
            <Section0 scrollHeight={sceneInfo[0].scrollHeight}/>
            <Section1 scrollHeight={sceneInfo[1].scrollHeight}/>
            <Section2 scrollHeight={sceneInfo[2].scrollHeight}/>
            <Section3 scrollHeight={sceneInfo[3].scrollHeight}/>
        </>
    )
}

export default React.memo(ContentsOne);