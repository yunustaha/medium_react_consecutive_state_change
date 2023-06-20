import { useState } from 'react'

function BasarisizOrnek() {
  const [arabaMarkalari, setArabaMarkalari] = useState([])


  const handleClickFirst = () => {
    setArabaMarkalari(['Toyota'])
  }

  const handleClickSecond = () => {
    setArabaMarkalari([...arabaMarkalari, 'Mercedes'])
  }


  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Ard Arda State Değişimi Başarısız Örnek</h1>
        <div style={{ display: 'flex' }}>
          <p style={{ fontWeight: 'bold', marginRight: '10px' }}>Araba: </p>
          <p>{arabaMarkalari.join(', ')}</p>
        </div>
        <button onClick={() => { handleClickFirst(); handleClickSecond(); }}>Tıkla</button>
      </div>
    </div>
  );
}

export default BasarisizOrnek;
