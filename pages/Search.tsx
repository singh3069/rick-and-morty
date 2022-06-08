import React, { useState } from 'react'

function Search() {
    const [msz, setMsz] = useState({abc: ''});
  return (
    <div>
        <input type="text" value={msz.abc}placeholder='type your msz' onChange={e=>{
            const mess = {abc: e.target.value}
            setMsz(mess)
        }} />
        <p>{msz.abc}</p>
    </div>
  )
}

export default Search