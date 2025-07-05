import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";
import Image from "next/image";
import axios from 'axios'
export default async function Home() {


  const value = await new Promise((r) => {
    setTimeout(r, 5000)
  });

  const userDetails = await getUserDetais();
  console.log('userDetails value is', JSON.stringify(userDetails))
  return (
    <div style={{ width: '20%', height: '20%', border: '1px solid black', display: 'flex', flexDirection: 'column', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', padding: '30px', gap: '8px', boxShadow: '5px 5px 15px grey', borderRadius: '20px' }}>
      <h1>Hello</h1>
      <h2>{userDetails?.name}</h2>
      <h2>{userDetails?.email}</h2>
    </div>
  );
}

export async function getUserDetais() {

  const response = await axios.get('http:localhost:3000/api/user');
  return response.data;
}
