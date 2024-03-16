import { useState, useEffect } from 'react';
import { Appbar } from '../components/Appbar';
import { Balance } from '../components/Balance';
import { Users } from "../components/Users"
import axios from 'axios';

export const Dashboard = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get("https://cashmate-backend.onrender.com/api/v1/account/balance", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        });
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };
    
    fetchBalance();
  }, []);
  return (
    <div>
      <Appbar />
      <div>
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
