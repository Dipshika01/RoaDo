import React from 'react';

const cards = [
  {
    title: 'Revenue',
    subtitle: '$56,945',
    content: '+45%', // Replace with your profit/loss value
    profit: true,  },
  {
    title: 'Users',
    subtitle: '76.8%',
    content: '-17%',
  },
  {
    title: 'New Signups',
    subtitle: '116',
    content: '',
  },
  {
    title: 'Retention',
    subtitle: '12.67%',
    content: '+0.6%',
    profit:true
  },
];

const Card = () => {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          {/* {card.image && (
            <img src={card.image} alt={card.title} className="card-image" />
          )} */}
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            {card.subtitle && <p className="card-subtitle">{card.subtitle}</p>}
            {/* {card.content && <p className="card-text">{card.content}</p>} */}
          </div>
          {card.content && ( // Only render profit/loss if content exists
            <div className="profit-loss">
              <span className={`profit-loss-value ${card.profit ? 'profit' : 'loss'}`}>
                {card.content}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
