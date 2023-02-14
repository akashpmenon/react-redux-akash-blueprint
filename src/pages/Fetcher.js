import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';

function Fetcher() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    console.log(data, state); 
    if (state === 'idle' && data) {
      window.alert('Fetch clicked');
    }
  }, [data, state]);

  return (
    <>
      <fetcher.Form method='post' action="prompt">
        <button>Fetch Data</button>
      </fetcher.Form>
    </>  
  )
}

export function action(props) {
  return 'test123';
}

export default Fetcher;