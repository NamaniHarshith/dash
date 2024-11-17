import React from 'react';
import './LandingPage.css'; // This will contain specific styling for the landing page

function LandingPage() {
  return (
    <div className="app-container">
      <aside className="sidebar">
      <div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\iconfinder_vector_65_09_473792 1@2x.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />
  <p style={{ fontSize: '20px',color:'black',}}>BankDash.</p>
</div>
        <nav>
          <ul>
            <li style={{ color:'blue'}} > <div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\home 2.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />
  Dashboard
</div>
</li>
            <li><div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\transfer 1.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />Transaction
</div></li>
            <li><div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\user 3 1.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />Accounts
</div></li>
            <li><div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\economic-investment 1.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />
  Investments
</div></li>
            <li><div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\credit-card 1.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />
  Credit Cards
</div></li>
            <li><div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\loan 1.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />
  Loans
</div></li>
            <li><div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\service 1.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />Services
</div></li>
            <li><div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\econometrics 1.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />My priviliges
</div></li>
            <li><div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\settings solid 1.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />Settings
</div></li>
          </ul>
        </nav>
      </aside>

      <main className="content">
        <header className="top-bar">
          <p>Overview</p>
          <input type="text" placeholder="Search for something" className="search-bar" style={{ width: '200px', height: '20px', marginRight: '10px',borderRadius:'20px',border:'none' }} />
          <div className="top-bar-icons">
            <img src="https://your-profile-url.com/profile.png" alt="User Profile" className="profile-icon" />
            <img src="https://your-settings-url.com/settings.png" alt="Settings" className="settings-icon" />
          </div>
        </header>

        <section className="overview-section">
          <div className="card-balance">
            <h3>My Cards</h3>
            <div className="card">
              <p>Balance</p>
              <h2>$5,756</h2>
              <p>Card Holder: Eddy Cusuma</p>
              <p>Valid Thru: 12/22</p>
              <p>3778 **** **** 1234</p>
            </div>
          </div>

          <div className="weekly-activity">
            <h3>Weekly Activity</h3>
            {/* Placeholder for chart or graph */}
          </div>

          <div className="recent-transactions">
            <h3>Recent Transactions</h3>
            {/* Placeholder for recent transaction list */}
          </div>

          <div className="expense-statistics">
            <h3>Expense Statistics</h3>
            {/* Placeholder for pie chart */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
