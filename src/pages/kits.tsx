import React from 'react';

const Kits: React.FC = () => {
  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      width: '100%', 
      height: '100vh', 
      backgroundImage: 'url("https://www.fcbarcelona.com/photo-resources/2019/03/12/304ae4e8-6c40-4e91-a01f-b9c85767bf10/uAnwfqJX.jpg?width=1200&height=750")', // Imagine de fundal
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', 
      position: 'relative',
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '1200px', 
        margin: '0 auto', 
      }}>
        <h1>Echipamentele FC Barcelona</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h2>Home Kit</h2>
            <img src="https://theshoppies.pk/wp-content/uploads/2023/05/FC-Barcelona-2025-26-Home-Jersey.jpg" alt="Echipament acasă" style={{ width: '200px' }} />
          </div>
          <div>
            <h2>Away Kit</h2>
            <img src="https://soccerwearhouse.com/cdn/shop/files/1035915_Main_2017847_5000x.jpg?v=1754944868" alt="Echipament deplasare" style={{ width: '200px' }} />
          </div>
          <div>
            <h2>Third Kit</h2>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFZ2FZ5Uuy9YCN1dg9RLegzC8xsLCpS7u1ot-DPd3ZbJXTBpnVm81XAtR9es8oULSPOzos367ZAUooJz-Nnzighszy79C5YnG4J4WOC_GXp6XST8Gry9WOmGwQgedn2pZ-39CsQWKnEFajUfHF-rzAoaoIJPUfnXVunEweGs_M4XLInJTHaj9QjfaygVky/s1600/barca-25-26-third-kit%20%289%29.jpg" alt="Echipament al treilea" style={{ width: '200px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kits;