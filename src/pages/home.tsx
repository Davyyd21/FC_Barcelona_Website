import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{
      backgroundImage: 'url("https://wallpapers.com/images/hd/split-barcelona-fc-e5xvu3os4emxgo38.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column', 
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      padding: '20px',
    }}>
      
      <div style={{
        zIndex: 1,
        padding: '20px',
      }}>
        <h1 style={{ 
          margin: '0', 
          fontSize: '2.5em',
          color: '#F8E823',
        }}>Bine ai venit pe site-ul oficial FC Barcelona!</h1>
      </div>

      
      <img 
        src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/UEFA_Champions_League.svg/1200px-UEFA_Champions_League.svg.png" 
        alt="Imagine Barça 1" 
        style={{ 
          position: 'absolute',
          left: '100px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '200px',
        }} 
      />
      
      
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/LaLiga_logo_2023.svg/1024px-LaLiga_logo_2023.svg.png" 
        alt="Imagine Barça 2" 
        style={{ 
          position: 'absolute',
          right: '100px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '200px',
        }} 
      />

      
      <div style={{
        zIndex: 1,
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      }}>
        <div style={{ 
          display: 'flex', 
          gap: '15px', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
        }}>
          <Link to="/team">
            <button style={{ 
              padding: '12px 25px', 
              backgroundColor: '#a50044', 
              color: 'white', 
              border: 'none', 
              cursor: 'pointer', 
              borderRadius: '8px', 
              fontSize: '1.1em', 
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', 
              transition: 'transform 0.2s', 
              '&:hover': { transform: 'scale(1.05)' } 
            }}>Team</button>
          </Link>
          <Link to="/history">
            <button style={{ 
              padding: '12px 25px', 
              backgroundColor: '#004d98', 
              color: 'white', 
              border: 'none', 
              cursor: 'pointer', 
              borderRadius: '8px', 
              fontSize: '1.1em', 
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', 
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.05)' }
            }}>History</button>
          </Link>
          <Link to="/kits">
            <button style={{ 
              padding: '12px 25px', 
              backgroundColor: '#a50044', 
              color: 'white', 
              border: 'none', 
              cursor: 'pointer', 
              borderRadius: '8px', 
              fontSize: '1.1em', 
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', 
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.05)' }
            }}>Kits</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;