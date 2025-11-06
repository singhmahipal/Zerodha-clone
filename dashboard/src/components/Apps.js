import React from 'react';

const Apps = () => {
  const apps = [
    {
      id: 1,
      name: 'Kite Connect',
      description: 'Build powerful trading platforms, tools, and experiences',
      icon: '🔌',
      link: 'https://kite.trade',
      category: 'API'
    },
    {
      id: 2,
      name: 'Console',
      description: 'Manage your Zerodha account and view reports',
      icon: '⚙️',
      link: 'https://console.zerodha.com',
      category: 'Tools'
    },
    {
      id: 3,
      name: 'Coin',
      description: 'Invest in direct mutual funds',
      icon: '🪙',
      link: 'https://coin.zerodha.com',
      category: 'Investment'
    },
    {
      id: 4,
      name: 'Streak',
      description: 'Create and backtest trading strategies without coding',
      icon: '⚡',
      link: 'https://streak.tech',
      category: 'Trading'
    },
    {
      id: 5,
      name: 'Sensibull',
      description: 'Options trading platform with strategies and analytics',
      icon: '🐂',
      link: 'https://sensibull.com',
      category: 'Trading'
    },
    {
      id: 6,
      name: 'Smallcase',
      description: 'Invest in portfolio of stocks',
      icon: '📦',
      link: 'https://smallcase.com',
      category: 'Investment'
    },
    {
      id: 7,
      name: 'Ditto',
      description: 'Advice on term insurance',
      icon: '🛡️',
      link: 'https://joinditto.in',
      category: 'Insurance'
    },
    {
      id: 8,
      name: 'Tijori',
      description: 'Investment and portfolio reporting',
      icon: '📊',
      link: '#',
      category: 'Tools'
    }
  ];

  const categories = ['All', 'API', 'Tools', 'Investment', 'Trading', 'Insurance'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredApps = selectedCategory === 'All'
    ? apps
    : apps.filter(app => app.category === selectedCategory);

  return (
    <div className="apps-container">
      {/* Inline CSS */}
      <style>{`
        .apps-container {
          padding: 30px;
          max-width: 1400px;
          margin: 0 auto;
          background: #f8f9fa;
          min-height: 100vh;
        }

        .apps-header {
          margin-bottom: 30px;
        }

        .apps-header h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .apps-subtitle {
          color: #666;
          font-size: 1rem;
          margin: 0;
        }

        .apps-filters {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 20px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 20px;
          cursor: pointer;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          color: #666;
        }

        .filter-btn:hover {
          border-color: #387ed1;
          color: #387ed1;
        }

        .filter-btn.active {
          background: #387ed1;
          color: white;
          border-color: #387ed1;
        }

        .apps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .app-card {
          background: white;
          border-radius: 8px;
          padding: 25px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .app-card:hover {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
          transform: translateY(-2px);
        }

        .app-icon {
          font-size: 3rem;
          margin-bottom: 15px;
        }

        .app-name {
          font-size: 1.3rem;
          color: #333;
          margin: 0 0 10px 0;
          font-weight: 500;
        }

        .app-description {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0 0 15px 0;
          flex-grow: 1;
        }

        .app-category {
          display: inline-block;
          padding: 4px 12px;
          background: #e8f4ff;
          color: #387ed1;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
          margin-bottom: 15px;
        }

        .app-link {
          color: #387ed1;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .app-link:hover {
          color: #2563b8;
        }

        .apps-footer {
          background: white;
          border-radius: 8px;
          padding: 40px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .info-section h3 {
          font-size: 1.5rem;
          color: #333;
          margin: 0 0 15px 0;
          font-weight: 500;
        }

        .info-section p {
          color: #666;
          font-size: 1rem;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto 25px;
        }

        .contact-btn {
          padding: 12px 30px;
          background: #387ed1;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .contact-btn:hover {
          background: #2563b8;
        }

        @media (max-width: 768px) {
          .apps-container {
            padding: 20px;
          }

          .apps-header h2 {
            font-size: 1.5rem;
          }

          .apps-grid {
            grid-template-columns: 1fr;
          }

          .apps-filters {
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 10px;
          }

          .filter-btn {
            white-space: nowrap;
          }
        }
      `}</style>

      <div className="apps-header">
        <h2>Apps & Integrations</h2>
        <p className="apps-subtitle">
          Connect your Zerodha account with powerful third-party apps and tools
        </p>
      </div>

      <div className="apps-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="apps-grid">
        {filteredApps.map(app => (
          <div key={app.id} className="app-card">
            <div className="app-icon">{app.icon}</div>
            <h3 className="app-name">{app.name}</h3>
            <p className="app-description">{app.description}</p>
            <span className="app-category">{app.category}</span>
            <a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="app-link"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>

      <div className="apps-footer">
        <div className="info-section">
          <h3>Want to list your app?</h3>
          <p>
            If you've built an app or service that integrates with Zerodha, 
            we'd love to feature it here. Get in touch with us.
          </p>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Apps;
