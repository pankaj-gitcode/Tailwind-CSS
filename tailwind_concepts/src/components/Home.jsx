import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { servicesAtom } from './Atom';

export default function Home(){
    const navigate = useNavigate();
    const srvc = useRecoilValue(servicesAtom);

    return(
        <>
            <div className='text-[#fff]'>
                {srvc.map((e)=> <p key={srvc.indexOf(e)} onClick={()=>navigate(e.path)}>{e.path}</p> )}
            </div>
        </>
    )
}