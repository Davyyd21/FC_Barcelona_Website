import React from 'react';

const Team: React.FC = () => {
  const players = [ 
    { name: 'Robert Lewandowski', image: 'https://www.fcbarcelona.com/photo-resources/2025/07/09/e8378527-14fe-4dc7-a0c2-e3cea291a6e2/09-Lewandowski.jpg?width=1200&height=750' }, 
    { name: 'Pedri', image: 'https://www.fcbarcelona.com/photo-resources/2025/07/09/16c3e62d-1a5a-4e10-a964-560eacb6885a/08-Pedri.jpg?width=1200&height=750' }, 
    { name: 'Lamine Yamal', image: 'https://www.fcbarcelona.com/photo-resources/2025/07/09/47ddeac8-9a36-4618-af27-5b1310184370/19-Lamine.jpg?width=1200&height=750' },
    { name: 'Raphinha', image: 'https://www.fcbarcelona.com/photo-resources/2025/07/09/87585699-3a8f-41d4-9912-e63f569f6fd6/11-Raphinha.jpg?width=1200&height=750' },
    { name: 'Cubarsi', image: 'https://www.fcbarcelona.com/photo-resources/2025/07/09/a50b796b-6c71-4a7f-b523-f80895c51c18/02-Cubarsi.jpg?width=1200&height=750' },
    { name: 'Joan Garcia', image: 'https://www.fcbarcelona.com/photo-resources/2025/07/09/3337817d-b39f-4dfa-924b-89994d15eee1/00-Joan_Garcia.jpg?width=1200&height=750' },
    {name:'Jules Kounde',image:'https://www.fcbarcelona.com/photo-resources/2025/07/09/27590369-26fe-4e32-9df5-a0d97327d02c/23-Kounde.jpg?width=1200&height=750'},
    {name:'Frenkie de Jong',image:'https://www.fcbarcelona.com/photo-resources/2025/07/09/606e002a-1771-4660-8c3b-f28ec4138133/21-De_Jong.jpg?width=1200&height=750'},
    {name:'Olmo',image:'https://www.fcbarcelona.com/photo-resources/2025/07/09/a6b7afa7-bcf6-4f64-8954-2b511c6c6639/20-Olmo.jpg?width=1200&height=750'},
    {name:'Ter Stegen',image:'https://www.fcbarcelona.com/photo-resources/2025/07/09/d3a24f5a-c253-48ae-9328-2febd2f55280/01-Ter_Stegen.jpg?width=1200&height=750'},
    {name:'Gavi',image:'https://www.fcbarcelona.com/photo-resources/2025/07/09/d64fc792-45ca-41f7-b676-b6342a770aaa/06-Gavi.jpg?width=1200&height=750'},
    {name:'Ferran Torres',image:'https://www.fcbarcelona.com/photo-resources/2025/07/09/164c067f-76d8-4224-85b2-14ff19c5e716/07-Ferran_Torres.jpg?width=1200&height=750'},
    {name:'Balde',image:'https://www.fcbarcelona.com/photo-resources/2025/07/09/912d0e5b-6e6c-4c9c-97ed-038270fc8980/03-Balde.jpg?width=1200&height=750'},
    {name:'Ronald Araujo',image:'https://www.fcbarcelona.com/photo-resources/2025/07/09/a2081a9d-4be4-46cf-bf06-258589d1b513/04-Araujo.jpg?width=1200&height=750'},
    {name:'Eric Garcia',image:'https://www.fcbarcelona.com/photo-resources/2025/07/09/fbac0f8e-a2db-4763-a267-443c3338735e/24-Eric_Garcia.jpg?width=1200&height=750'},
    {name:'Gerard Martin',image:'https://www.fcbarcelona.com/photo-resources/2025/08/29/ad1d76d8-0422-4d77-af11-c2c0823f80f5/00-martin-1-.jpg?width=1200&height=750'}
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>FC Barcelona Team</h1>
      <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {players.map((player, index) => (
          <li key={index} style={{ margin: '20px', textAlign: 'center' }}>
            <img src={player.image} alt={player.name} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            <p>{player.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;