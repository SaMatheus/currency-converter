import { economiaClient } from '@/utils/axios';

const Dashboard = async () => {
  const request  = await economiaClient.get('json/last/USD-BRL,EUR-BRL,BTC-BRL');
  const data = await request.data;
  console.log(data)
  return (
    <div>Dashboard</div>
  )
};

export default Dashboard;