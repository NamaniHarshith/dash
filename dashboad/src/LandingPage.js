import React from 'react';
import './LandingPage.css'; // This will contain specific styling for the landing page

function LandingPage() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2>BankDash</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Transactions</li>
            <li>Accounts</li>
            <li>Investments</li>
            <li>Credit Cards</li>
            <li>Loans</li>
            <li>Services</li>
            <li>My Privileges</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>

      <main className="content">
        <header className="top-bar">
          <input type="text" placeholder="Search for something" className="search-bar" />
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
