import axios from 'axios'
import { useEffect, useState } from 'react'

function MyInfo() {
    const [info, setInfo] = useState([])

    async function getInfo() {
        try {
            const chageInfo = await axios({
                method: 'get',
                url: '/api/user',
                headers: { 'Cache-Control': 'no-cache' },
            })
            console.warn(chageInfo.data.content[0])
            setInfo(chageInfo.data.content[0])
        } catch (e) {
            console.log(e)
            alert('정보가 없습니다.')
        }
    }

    useEffect(() => getInfo(), [])

    return (
        <div>
            <div>{info.email}</div>
            <div>{info.username}</div>
        </div>
    )
}

export default MyInfo
