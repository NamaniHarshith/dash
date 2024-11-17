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
      <header className="top-bar" style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
  {/* Title */}
  <p style={{ fontSize: '30px', margin: 0 }}>Overview</p>

  {/* Search Bar */}
  <div style={{ width: '400px', height: '40px' }}></div>

  <div className="search-container" style={{ position: 'relative', display: 'inline-block' }}>
    {/* Material Icon for search */}
    <span
      className="material-icons"
      style={{
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '16px',
      }}
    >
      search
    </span>
    
    <input
      type="text"
      placeholder="Search for something"
      className="search-bar"
      style={{
        width: '250px',
        height: '30px',
        paddingLeft: '30px', // Adds padding so text doesn't overlap the icon
        borderRadius: '20px',
        border: 'none',
        fontSize: '14px',
      }}
    />
  </div>

  {/* Profile & Settings Icons */}
  <div className="top-bar-icons" style={{ display: 'flex', alignItems: 'center' }}>
    <img
      src="\images\settings solid 1.png"
      alt="Settings"
      className="settings-icon"
      style={{ width: '30px', height: '30px', marginRight: '10px' }} // Add margin to the right of the first image
    />
    <img
      src="\images\Group 3.png"
      alt="Group"
      className="group-icon"
      style={{ width: '30px', height: '30px', marginRight: '10px' }} // Add margin to the right of the second image
    />
    <img
      src="\images\pexels-christina-morillo-1181690 1.png"
      alt="User Profile"
      className="profile-icon"
      style={{ width: '30px', height: '30px', borderRadius: '50%' }} // No margin here since it's the last item
    />
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
