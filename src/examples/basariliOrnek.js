import { useState } from 'react'

const BasariliOrnek = () => {
    const [arabaMarkalari, setArabaMarkalari] = useState([])


    const handleClickFirst = () => {
      setArabaMarkalari((['Toyota']));
    }
  
    const handleClickSecond = () => {
      setArabaMarkalari(prevData => ([...prevData, 'Mercedes']))
    }
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1>Ard Arda State Değişimi Başarılı Örnek</h1>
          <div style={{ display: 'flex' }}>
            <p style={{ fontWeight: 'bold', marginRight: '10px' }}>Araba: </p>
            <p>{arabaMarkalari.join(', ')}</p>
          </div>
          <button onClick={() => { handleClickFirst(); handleClickSecond(); }}>Tıkla</button>
        </div>
      </div>
    );
}

export default BasariliOrnek