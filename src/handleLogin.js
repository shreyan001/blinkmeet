

export default async function handleLogin(address) {
  
    const response = await fetch('api/login', {
      method: 'POST',
      body: JSON.stringify({address}),
      headers: {'Content-Type':'application/json'}
    });
    if (response.ok) {
      response.json().then(userInfo => {
        Navigate('/meet');
      });
    } else {
      setMOpen(true);
    }
  }




